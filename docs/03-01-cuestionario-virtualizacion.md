---
title: "3.1 Cuestionario y Ejercicios: Fundamentos de Virtualización"
description: "Cuestionario de autoevaluación sobre hipervisores Tipo 1 y 2, arquitectura anfitrión/huésped y configuración de MVs."
---

# 3.1 Cuestionario y Ejercicios: Fundamentos de Virtualización

* **Unidad Didáctica**: UD3. Virtualización de Sistemas [7].
* **Resultado de Aprendizaje**: **RA5** (*Crea máquinas virtuales identificando su campo de aplicación e instalando software específico*) [1, 2].
* **Criterios de Evaluación**:
    * **CE RA5.a** (*Diferenciación entre máquina real y máquina virtual*) [2, 6].
    * **CE RA5.b** (*Establecimiento de las ventajas e inconvenientes de la utilización de máquinas virtuales*) [2, 6].
    * **CE RA5.c** (*Instalación de software para la creación de MVs*) [2, 6].
    * **CE RA5.f** (*Relación de la máquina virtual con el sistema operativo anfitrión*) [2, 6].

---

## 📝 Bloque 1: Cuestionario Tipo Test de Autoevaluación

### 1. ¿Qué tipo de hipervisor es Oracle VM VirtualBox 6.1?
- [ ] a) Hipervisor Tipo 1 (*Bare-Metal*).
- [ ] b) Hipervisor Tipo 2 (*Hosted* o Alojado).
- [ ] c) Contenedor de aplicaciones de Kernel compartido.
- [ ] d) Emulador de microcódigo firmware.

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: b) Hipervisor Tipo 2 (Hosted o Alojado).** [5]  
> **Explicación**: VirtualBox 6.1 se ejecuta como una aplicación sobre el sistema operativo anfitrión (Windows, Linux o macOS), el cual gestiona directamente los controladores del hardware físico [5].
</details>

---

### 2. El sistema operativo que se instala dentro de una Máquina Virtual y que ejecuta sus instrucciones de forma aislada se denomina:
- [ ] a) Sistema Anfitrión (*Host*).
- [ ] b) Sistema Huésped (*Guest*).
- [ ] c) Firmware UEFI.
- [ ] d) Kernel Monolítico.

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: b) Sistema Huésped (Guest).** [5, 6]  
> **Explicación**: El sistema **Huésped (*Guest*)** es el SO virtualizado (como Lubuntu o Ubuntu Server) que interactúa con el hardware emulado por el hipervisor [5, 6].
</details>

---

### 3. ¿Qué ventaja ofrece un disco virtual VDI en VirtualBox configurado como "Reservado dinámicamente"?
- [ ] a) Asigna el espacio completo en el disco duro físico en el momento exacto de su creación.
- [ ] b) Ocupa en el disco real solo el espacio utilizado por los archivos instalados y va creciendo según se necesita.
- [ ] c) Aumenta la velocidad de lectura y escritura del disco al doble de la velocidad real.
- [ ] d) Impide que la máquina virtual pueda infectarse por malware.

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: b) Ocupa en el disco real solo el espacio utilizado por los archivos instalados y va creciendo según se necesita.**  
> **Explicación**: La *reserva dinámica* permite ahorrar espacio físico en el disco anfitrión, ya que el archivo `.vdi` crece paulatinamente a medida que el sistema huésped almacena datos.
</details>

---

### 4. ¿Por qué razón Ubuntu Server 20.04 requiere menos memoria RAM (1 GB) que Lubuntu 20.04 Desktop (2 GB) en una máquina virtual?
- [ ] a) Porque Ubuntu Server no se puede conectar a Internet mediante adaptador NAT.
- [ ] b) Porque Ubuntu Server no carga una interfaz gráfica de usuario (GUI), trabajando exclusivamente en modo terminal (CLI).
- [ ] c) Porque Ubuntu Server no utiliza sistemas de archivos del tipo EXT4.
- [ ] d) Porque Ubuntu Server sólo funciona sobre hipervisores Tipo 1.

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: b) Porque Ubuntu Server no carga una interfaz gráfica de usuario (GUI), trabajando exclusivamente en modo terminal (CLI).**  
> **Explicación**: El entorno gráfico (GUI) como LXQt en Lubuntu requiere cargar en la RAM el servidor X, gestores de ventanas y librerías gráficas. La versión Server trabaja solo en modo consola (CLI), reduciendo notablemente el consumo de recursos.
</details>

---

## ✏️ Bloque 2: Preguntas de Desarrollo Corto

Responde a las siguientes preguntas en tu cuaderno o documento de entrega:

1. **Diferencia entre Hipervisores**: Explica la diferencia arquitectónica fundamental entre un hipervisor Tipo 1 (*Bare-Metal*) como Proxmox VE o VMware ESXi y un hipervisor Tipo 2 (*Hosted*) como VirtualBox 6.1 [5].
2. **Redes en VirtualBox**: Compara el funcionamiento del modo de red **NAT** frente al modo **Adaptador Puente (*Bridge*)** en una máquina virtual.
3. **Portabilidad de MVs**: ¿Qué archivos componen una máquina virtual en VirtualBox 6.1 y qué ventaja aporta a la hora de hacer copias de seguridad?

<details>
<summary><b>Ver Solucionario del Bloque 2</b></summary>

> **1. Tipo 1 vs Tipo 2**:  
> El **Tipo 1** se instala directamente sobre el hardware físico sin necesidad de un SO previo (usado en servidores de producción) [5]. El **Tipo 2** se instala como una aplicación sobre un SO anfitrión ya existente (Windows/Linux/macOS), ideal para el laboratorio de aula [5].
>
> **2. NAT vs Puente**:  
> En modo **NAT**, la MV navega a Internet saliendo oculta tras la dirección IP del equipo anfitrión. En modo **Puente (*Bridge*)**, la MV se integra en la red del aula obteniendo su propia IP como si fuera un equipo físico independiente.
>
> **3. Archivos de la MV**:  
> La MV se compone del archivo de configuración `.vbox` (hardware virtual asignado) y el disco virtual `.vdi` (datos e instalación). Para hacer una copia de seguridad basta con copiar o exportar dicho directorio.
</details>

---

## 📊 Bloque 3: Supuesto Práctico de Laboratorio

### Caso Práctico: Asignación de Recursos en la Torre del Taller

Dispones en el laboratorio de 1º SMR de un equipo físico con las siguientes especificaciones:
* **CPU**: Intel Core i5 (4 núcleos / 4 hilos).
* **RAM**: 8 GB DDR4.
* **Almacenamiento**: SSD de 256 GB.
* **Sistema Anfitrión**: Windows 10 Pro 64-bit.

Debes configurar en **VirtualBox 6.1** un escenario simultáneo con **dos máquinas virtuales**:
1. `MV_Lubuntu` (Lubuntu 20.04 Desktop para el usuario).
2. `MV_UbuntuServer` (Ubuntu Server 20.04 para servicios de consola).

**Se pide**:
1. Diseña la distribución de memoria RAM y núcleos de CPU para las dos MVs de modo que el **Sistema Anfitrión conserve al menos 3 GB de RAM libres** para garantizar la estabilidad del equipo.
2. Justifica qué tipo de almacenamiento (`.vdi` dinámico o tamaño fijo) seleccionarías si el disco SSD anfitrión tiene poco espacio libre.

<details>
<summary><b>Ver Solución al Supuesto Práctico</b></summary>

> **1. Reparto recomendado de RAM y CPU**:
> * **Memoria RAM Total (8 GB = 8192 MB)**:
>   * `MV_Lubuntu`: 2048 MB (2 GB).
>   * `MV_UbuntuServer`: 1024 MB (1 GB).
>   * **Reserva para el Anfitrión**: \\(8192 - 2048 - 1024 = 5120 \text{ MB}\\) (**5 GB libres**, cumpliendo ampliamente el mínimo de 3 GB requeridos).
> * **Núcleos de CPU (4 núcleos disponibles)**:
>   * Asignar 1 o 2 vCPUs a Lubuntu y 1 vCPU a Ubuntu Server.
>
> **2. Elección de disco virtual**:  
> Seleccionar **VDI con reserva dinámica**, ya que sólo consumirá en el SSD real el espacio efectivamente utilizado por los sistemas instalados (aprox. 5-7 GB iniciales en lugar de reservar los 35 GB máximos asignados entre ambas MVs).
</details>
