# 5.1 Tema: Gestión de la Memoria Principal y Memoria Virtual

* **Unidad Didáctica**: UD2 / UD5. Arquitectura del Sistema Operativo, Procesos y Gestión de Memoria
* **Módulo Profesional**: Sistemas Operativos Monopuesto (1º SMR)
* **Resultados de Aprendizaje**: **RA1** (Reconoce las características de los sistemas operativos, analizando sus elementos y funciones) y **RA3** (Realiza tareas de administración básica del sistema)
* **Criterios de Evaluación**: **CE RA1.c** (Análisis de las funciones del SO en gestión de recursos), **CE RA1.d** (Descripción de la arquitectura interna y direccionamiento) y **CE RA3.e** (Seguimiento del rendimiento del sistema y uso de memoria Swap)

---

## 🧠 1. Introducción y Funciones de la Gestión de Memoria

La **memoria principal** (RAM - *Random Access Memory*) es el componente físico indispensable donde se almacenan las instrucciones y los datos de los programas en el momento exacto en que están siendo procesados por la CPU. Mientras que un programa almacenado en el disco duro o SSD es una entidad pasiva e inerte, para convertirse en un **proceso activo** requiere ser cargado previamente en el espacio de direccionamiento de la memoria RAM.

Dado que la memoria RAM es un recurso finito y compartido entre múltiples procesos concurrentes y el propio núcleo del sistema operativo, el Kernel debe actuar como un administrador riguroso para maximizar la velocidad de acceso, garantizar el aislamiento entre programas y evitar el colapso del sistema.

### Estructura en Capas del Acceso a Memoria

* **Aplicaciones y Procesos de Usuario**: Programas finales (ej. Firefox, MySQL, Bash, VS Code) que se ejecutan en espacio de usuario no privilegiado.
* **Llamadas al Sistema (*System Calls*)**: Interfaz estandarizada por la cual una aplicación solicita formalmente reservar o liberar memoria RAM al Kernel.
* **Kernel del Sistema Operativo**: Modulo central que opera en modo protegido asignando bloques de RAM, traduciendo direcciones y gestionando la memoria de intercambio (Swap).
* **Hardware Físico**: Módulos RAM (DDR4/DDR5), la Unidad de Gestión de Memoria (MMU) en la CPU y los dispositivos de almacenamiento secundario.

### Funciones Principales del Kernel en la Gestión de Memoria

1. **Seguimiento del estado de la memoria**: Mantener un registro actualizado de qué partes de la memoria RAM están actualmente ocupadas, qué proceso las está utilizando y qué áreas permanecen libres para nuevas asignaciones.
2. **Asignación y liberación dinámica**: Conceder espacio en memoria a los nuevos procesos cuando son creados (`fork` / `exec` en Linux, `CreateProcess` en Windows) y reclamar inmediatamente ese espacio cuando el proceso finaliza (`exit`) o es cancelado.
3. **Protección y aislamiento**: Impedir de forma estricta que un proceso en ejecución lea o escriba en las direcciones de memoria asignadas a otro proceso o al propio Kernel, evitando fuga de datos o fallos del sistema (*Segmentation Fault*).
4. **Gestión de la reubicación**: Permitir que los programas puedan ser cargados y ejecutados en cualquier zona libre de la memoria RAM, independientemente de la dirección física real donde queden alojados.
5. **Soporte de Memoria Virtual**: Coordinar el traslado de páginas de datos entre la RAM física y el almacenamiento secundario en disco (partición o archivo de *Swap*) cuando la demanda de memoria supera la capacidad física instalada.

---

## 📐 2. Esquemas de Asignación Contigua de Memoria

En los primeros sistemas operativos multiprogramados, la memoria RAM se organizaba mediante **asignación contigua**: cada programa debía alojarse en un único bloque continuo e ininterrumpido de direcciones de memoria.

### A. Particiones Fijas (Estáticas)

El espacio de memoria disponible para los procesos se divide en un conjunto de bloques o particiones de tamaño predefinido desde el arranque del sistema. Las particiones pueden ser de **tamaño uniforme** (todas del mismo tamaño) o **asimétricas** (con bloques de diferentes capacidades).

* **Mecánica de funcionamiento**: Cuando un proceso llega a la cola de ejecución, el Kernel busca una partición libre donde el proceso quepa. Cada partición puede albergar únicamente **un solo proceso a la vez**.
* **El fenómeno de la Fragmentación Interna**: Si se asigna una partición de 8 MB a un proceso que únicamente requiere 5 MB, los 3 MB restantes dentro de esa partición quedan totalmente bloqueados e inutilizables para cualquier otro programa. Este espacio desperdiciado dentro del bloque asignado se denomina **Fragmentación Interna**.

> **Definición**: La **Fragmentación Interna** es la pérdida de espacio de memoria que se produce cuando el tamaño asignado a una partición fija es estrictamente mayor que la memoria requerida por el proceso alojado en su interior.

### B. Particiones Variables (Dinámicas)

Para eliminar el despilfarro de las particiones fijas, surgieron las **particiones variables**. En este esquema no existen bloques predefinidos: el Kernel crea una partición del tamaño exacto que solicita el proceso en el instante en que entra en memoria.

#### Algoritmos de Selección de Huecos (*Placement Algorithms*)

Con el paso del tiempo y el cierre alternativo de procesos, la memoria libre se va dividiendo en múltiples huecos (*holes*) de distintos tamaños. Cuando llega un nuevo proceso que requiere $N$ megabytes, el Kernel utiliza uno de los siguientes algoritmos para elegir en qué hueco ubicarlo:

| Algoritmo | Descripción y Funcionamiento | Ventajas | Inconvenientes |
| :--- | :--- | :--- | :--- |
| **Primer Ajuste (*First-Fit*)** | Recorre la memoria desde el inicio (`0x00`) y asigna el **primer hueco libre** que sea suficientemente grande para albergar al proceso. | Es el algoritmo más rápido y de menor carga computacional. | Acumula pequeños huecos en las primeras posiciones de memoria. |
| **Mejor Ajuste (*Best-Fit*)** | Examina **todos los huecos libres** del sistema y selecciona aquel cuyo tamaño se aproxime más al requerido por el proceso. | Minimiza el tamaño del residuo sobrante inmediato tras la asignación. | Crea multitud de micro-huecos inutilizables por ser demasiado pequeños; es más lento al recorrer toda la lista. |
| **Peor Ajuste (*Worst-Fit*)** | Examina **todos los huecos libres** y asigna el proceso en el **hueco de mayor capacidad** disponible. | El residuo sobrante tras la asignación es grande y puede servir para alojar otro proceso posterior. | Agota rápidamente los huecos grandes necesarios para procesos de gran tamaño. |

#### El problema de la Fragmentación Externa y la Compactación

A medida que los procesos entran y salen de la RAM, la memoria libre se descompone en un gran número de huecos dispersos no contiguos.

> **Definición**: La **Fragmentación Externa** se produce cuando la suma total de memoria libre en el sistema es suficiente para satisfacer la demanda de un nuevo proceso, pero al estar dividida en huecos discontinuos, ningún bloque individual por sí solo es capaz de albergarlo.

Para resolver la fragmentación externa en sistemas con asignación contigua, el Kernel debe realizar una **Compactación de Memoria (Reubicación Dinámica)**: desplazar físicamente todos los procesos activos hacia un extremo de la memoria RAM para unificar todos los huecos dispersos en un único bloque libre continuo. Sin embargo, la compactación consume un elevado tiempo de CPU y de bus de datos, paralizando temporalmente la ejecución del sistema.

---

## 🔒 3. Direccionamiento de Memoria y Protección (MMU)

Para aislar a los programas entre sí y permitir la reubicación en RAM, los sistemas operativos modernos utilizan una arquitectura de direccionamiento en dos niveles respaldada por la **MMU** (*Memory Management Unit*).

### Direcciones Lógicas vs. Direcciones Físicas

* **Dirección Lógica (o Virtual / Relativa)**: Es la dirección de memoria generada por el procesador cuando ejecuta el código de un programa. Comienza siempre desde la posición relativa `0x00000000` y representa la visión del espacio de direcciones que tiene el proceso.
* **Dirección Física (o Absoluta)**: Es la posición real y física dentro de los chips de memoria RAM a la que se accede mediante el bus de direcciones.

### La MMU (*Memory Management Unit*)

La **MMU** es un dispositivo de hardware integrado físicamente dentro del procesador (CPU). Su función principal es traducir las direcciones lógicas enviadas por el procesador a direcciones físicas reales en la RAM en tiempo de ejecución de manera totalmente transparente para los programas.

### Registros Base y Límite (Mecanismo de Protección)

En sistemas con asignación contigua, la MMU utiliza dos registros de control para verificar la seguridad de cada acceso a memoria:

1. **Registro Base (o de Reubicación)**: Almacena la dirección física de comienzo en la RAM donde ha sido cargado el proceso.
2. **Registro Límite**: Almacena el tamaño máximo permitido que ocupa el proceso en memoria.

$$\text{Dirección Física Real} = \text{Registro Base} + \text{Dirección Lógica}$$

#### Proceso de Verificación de Seguridad:
Cuando la CPU intenta acceder a una dirección lógica $L$:
1. La MMU comprueba si $L < \text{Registro Límite}$.
2. **Si la condición se cumple**: La MMU calcula la dirección física $\text{Base} + L$ y permite el acceso a la RAM.
3. **Si $L \ge \text{Registro Límite}$**: La MMU bloquea la operación y lanza un **Trap de Violación de Memoria** al Kernel, interrumpiendo la ejecución del programa con el conocido error de **Fallo de Segmentación** (*Segmentation Fault / Access Violation*).

---

## 🧩 4. Paginación y Asignación No Contigua

La **Paginación** es la técnica de gestión de memoria moderna que elimina por completo el problema de la fragmentación externa permitiendo que el espacio de direcciones de un proceso se aloje de forma **no contigua** en la RAM.

### Principios Fundamentales de la Paginación

1. **Páginas Virtuales**: El espacio de direcciones lógicas de un proceso se divide en bloques continuos de tamaño fijo denominados **Páginas**.
2. **Marcos de Página (*Page Frames*)**: La memoria RAM física se divide exactamente en bloques del mismo tamaño que las páginas llamados **Marcos de Página**.
3. **Tamaño Estándar**: El tamaño típico de página y marco en arquitecturas x86 y x64 es de **4 KB (4096 Bytes)**.

Como las páginas y los marcos tienen exactamente la misma capacidad, **cualquier página de un proceso puede alojarse en cualquier marco libre de la RAM**, sin importar su posición física o si los marcos están separados entre sí.

### La Tabla de Páginas (*Page Table*)

El sistema operativo mantiene una estructura de datos para cada proceso denominada **Tabla de Páginas**. La tabla de páginas funciona como un índice de traducción que relaciona cada Número de Página Virtual (**VPN** - *Virtual Page Number*) con el Número de Marco Físico (**PFN** - *Page Frame Number*) donde reside en la RAM.

### Procedimiento Matemático de Traducción de Direcciones

Una dirección lógica enviada por la CPU se compone internamente de dos campos:
* **Número de Página Virtual ($p$ o VPN)**: Indica a qué página del programa pertenece la instrucción.
* **Desplazamiento ($d$ u Offset)**: Indica la posición exacta del byte dentro de esa página.

#### Fórmulas de Cálculo:

$$\text{VPN } (p) = \lfloor \text{Dirección Lógica} / \text{Tamaño de Página} \rfloor$$

$$\text{Offset } (d) = \text{Dirección Lógica} \pmod{\text{Tamaño de Página}}$$

$$\text{Dirección Física} = (\text{Número de Marco } \times \text{Tamaño de Página}) + \text{Offset } (d)$$

---

#### 📐 Ejemplo Práctico de Cálculo MMU:

**Enunciado**: La CPU genera la dirección lógica **$10250$ Bytes**. El sistema utiliza un tamaño de página de **$4096$ Bytes ($4\text{ KB}$)**. La Tabla de Páginas del proceso establece que la **Página 2** está asignada al **Marco 9**.

1. **Calcular el VPN ($p$)**:
   $$p = \lfloor 10250 / 4096 \rfloor = \lfloor 2,5024 \rfloor = \mathbf{2} \quad (\text{Página Virtual 2})$$

2. **Calcular el Offset ($d$)**:
   $$d = 10250 \pmod{4096} = 10250 - (2 \times 4096) = 10250 - 8192 = \mathbf{2058\text{ Bytes}}$$

3. **Consultar la Tabla de Páginas**:
   Para la Página 2, la tabla indica que corresponde al **Marco 9**.

4. **Calcular la Dirección Física Real en RAM**:
   $$\text{Dir. Física} = (9 \times 4096) + 2058 = 36864 + 2058 = \mathbf{38922\text{ Bytes}}$$

---

## 💾 5. Memoria Virtual y Sistemas de Intercambio (Swap)

La **Memoria Virtual** es una técnica avanzada de los sistemas operativos que permite ejecutar programas cuya exigencia de memoria supera la cantidad total de RAM física instalada en el equipo.

### Mecánica del Intercambio (*Swapping*)

Para hacer posible la memoria virtual, el sistema operativo utiliza una zona del disco secundario (HDD o SSD) configurada como **Partición de Swap** (en Linux) o **Archivo de Paginación `pagefile.sys`** (en Windows).

### Bit de Presencia/Ausencia y Fallo de Página (*Page Fault*)

En la Tabla de Páginas se añade un bit de control fundamental llamado **Bit de Presencia ($P$)**:
* **$P = 1$**: La página reside físicamente en un marco de la memoria RAM.
* **$P = 0$**: La página no está en la RAM; se encuentra guardada en el espacio de Swap en disco.

#### Secuencia de Manejo de un Fallo de Página (*Page Fault*):
1. La CPU intenta acceder a una dirección cuya página tiene el bit $P = 0$.
2. La MMU detecta la ausencia en RAM e interrumpe la CPU lanzando una excepción de **Fallo de Página** (*Page Fault*).
3. El Kernel toma el control del sistema y busca un marco libre en la RAM.
4. Si la RAM está llena, el Kernel aplica un **Algoritmo de Reemplazo** para elegir una *página víctima* en RAM y la escribe en el disco (**Swap-Out**).
5. El Kernel lee la página solicitada desde el disco y la carga en el marco de RAM liberado (**Swap-In**).
6. El Kernel actualiza la Tabla de Páginas marcando $P = 1$ y reanuda la instrucción del programa que provocó el fallo.

---

### Algoritmos de Reemplazo de Páginas

Cuando ocurre un fallo de página y la RAM está saturada, el SO debe elegir qué página expulsar a la Swap. Los principales algoritmos de selección de página víctima son:

#### 1. FIFO (*First-In, First-Out*)
* **Funcionamiento**: Expulsa la página que lleva más tiempo cargada en la memoria RAM, independientemente de la frecuencia o el momento de su último acceso.
* **Inconveniente**: Puede desalojar páginas de uso continuo (como librerías de sistema), sufriendo además la conocida *Anomalía de Belady* (aumentar marcos en RAM puede incrementar los fallos de página).

#### 2. LRU (*Least Recently Used* - Menos Usada Recientemente)
* **Funcionamiento**: Evalúa el instante del último acceso a cada página y elige como víctima a aquella cuya última lectura o escritura se produjo **más lejos en el tiempo pasado**.
* **Ventaja**: Es uno de los algoritmos más eficientes en entornos reales al basarse en el principio de localización temporal de los programas.

#### 3. Algoritmo Óptimo
* **Funcionamiento**: Desaloja la página que no volverá a ser utilizada durante el periodo de tiempo más largo en el futuro.
* **Nota**: Es irrealizable en la práctica porque requeriría predecir el futuro; se utiliza únicamente como modelo teórico de comparación para medir la eficacia de LRU y FIFO.

---

### Hiperpaginación (*Thrashing*) y Monitorización de Swap

Si la memoria RAM es insuficiente y el número de procesos activos es elevado, el sistema operativo puede caer en un estado de **Hiperpaginación (*Thrashing*)**: el Kernel pasa más del 90% de su tiempo realizando operaciones de *Swap-In* y *Swap-Out* en disco que ejecutando instrucciones reales de los programas. La luz del disco parpadea continuamente y el sistema deja de responder.

#### Comandos de Monitorización de Memoria en Consola

##### En Linux (Bash):
```bash
# Consultar resumen de RAM y Swap en megabytes
free -m

# Ver detalles del espacio Swap activado
swapon --show

# Monitorizar fallos de página e intercambio en tiempo real (cada 2 segundos)
vmstat 2

# Ver procesos ordenados por consumo de memoria RAM
top -o %MEM
```

##### En Windows (PowerShell):
```powershell
# Obtener estado de la memoria RAM disponible
Get-CimInstance Win32_OperatingSystem | Select-Object TotalVisibleMemorySize, FreePhysicalMemory

# Consultar el estado del archivo de paginación (pagefile.sys)
Get-CimInstance Win32_PageFileSetting
```

---

## 📌 Resumen de Conceptos Clave

* **Fragmentación Interna**: Desperdicio de espacio dentro de una partición de tamaño fijo asignada a un proceso.
* **Fragmentación Externa**: Pérdida de memoria por la existencia de múltiples huecos libres discontinuos en asignación contigua.
* **MMU**: Hardware de la CPU que traduce direcciones lógicas a físicas e impone reglas de aislamiento mediante registros Base y Límite.
* **Paginación**: División de la memoria virtual en páginas y de la RAM en marcos de igual tamaño (4 KB), eliminando la fragmentación externa.
* **Fallo de Página**: Interrupción del Kernel al acceder a una página con $P=0$ alojada en la memoria Swap del disco.
* **LRU**: Algoritmo de reemplazo de páginas que desaloja a Swap la página que lleva más tiempo sin ser utilizada.
