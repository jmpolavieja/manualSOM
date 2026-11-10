# [PRA 5.1] Taller Práctico: Asignación de Memoria y Fragmentación (v2)

* **Unidad Didáctica**: UD5. Gestión de la Memoria Principal
* **Resultados de Aprendizaje**: **RA1** (Reconoce las características de los sistemas operativos, analizando sus elementos y funciones) y **RA3** (Realiza tareas de administración básica)
* **Criterios de Evaluación**: **CE RA1.c** (Análisis de las funciones del SO en gestión de memoria), **CE RA1.d** (Descripción de la arquitectura de memoria) y **CE RA3.e** (Seguimiento del rendimiento y uso de memoria)
* **Herramienta complementaria**: Simulador Web `MEMOS-SMR` (`Sistemas_Informáticos_y_Administración_por_Terminal.html` - Pestaña 1 y Pestaña 4)
* **Modo de entrega**: Ficha técnica cumplimentada en PDF entregada a través de Google Classroom

---

## 🎮 Contexto de la Misión: "El Tetris de la Memoria RAM"

Trabajas como **RAM Manager** en el Centro de Datos del laboratorio. El Kernel del sistema operativo necesita alojar los servicios esenciales del servidor de producción en la memoria RAM principal.

Llegan secuencialmente 4 servicios de red con las siguientes necesidades de memoria:

| Servicio / Proceso | Función en el Sistema | Tamaño Requerido |
| :--- | :--- | :--- |
| **`systemd`** | Gestor de sistema y servicios de inicio | 3 MB |
| **`sshd`** | Daemon de acceso seguro por SSH | 6 MB |
| **`nginx`** | Servidor web HTTP | 12 MB |
| **`mysqld`** | Motor de base de datos MySQL | 22 MB |

Tu objetivo es analizar cómo el sistema operativo administra estos procesos bajo diferentes esquemas de particionado (fijas vs. variables) y validar los resultados numéricos con el simulador web.

---

## 🧩 Fase 1: Esquema de Particiones Fijas Asimétricas

El sistema operativo inicializa la memoria mediante un esquema de **4 particiones fijas asimétricas** predefinidas con la siguiente distribución:

$$\text{RAM Disponible} = [\text{Partición 1: 4 MB}] \ \vert \ [\text{Partición 2: 8 MB}] \ \vert \ [\text{Partición 3: 16 MB}] \ \vert \ [\text{Partición 4: 32 MB}]$$

### Tareas a realizar:

1. **Asignación de procesos**: Asigna cada uno de los 4 servicios (`systemd`, `sshd`, `nginx`, `mysqld`) en la partición donde mejor quepan (el bloque libre más pequeño donde el proceso quepa holgadamente).
2. **Cálculo de Fragmentación Interna**: Completa la tabla de ocupación calculando el desperdicio dentro de cada partición:

| Partición | Capacidad Bloque | Servicio Asignado | Tamaño Servicio | Fragmentación Interna (Desperdicio) |
| :--- | :--- | :--- | :--- | :--- |
| **Partición 1** | 4 MB | `systemd` | 3 MB | |
| **Partición 2** | 8 MB | `sshd` | 6 MB | |
| **Partición 3** | 16 MB | `nginx` | 12 MB | |
| **Partición 4** | 32 MB | `mysqld` | 22 MB | |

* **Pregunta 1.1**: ¿Cuál es la suma TOTAL de memoria desperdiciada por **fragmentación interna** acumulada en los 4 bloques?
* **Pregunta 1.2 (Comprobación en la App)**: Abre el simulador web, ve a la pestaña `1. Particiones y Fragmentación`, selecciona *Particiones Fijas* y comprueba el resultado. A continuación, pasa a la pestaña `4. Reto del Administrador` y resuelve la **Misión 1** (+100 XP).

---

## 📐 Fase 2: Esquema de Particiones Variables (First-Fit vs. Best-Fit)

Para optimizar el uso de la RAM, el Kernel cambia a **Particiones Variables (Dinámicas)**, ajustando la memoria exactamente al tamaño de cada proceso. 

En un instante dado de la ejecución del servidor, la memoria RAM presenta los siguientes **5 huecos libres** ordenados por dirección física desde `0x00`:

```
[ Hueco 1: 10 MB ] | [ Hueco 2: 4 MB ] | [ Hueco 3: 20 MB ] | [ Hueco 4: 18 MB ] | [ Hueco 5: 9 MB ]
```

En ese momento, el sistema recibe una solicitud de carga urgente para **`Proceso_BD` (16 MB)**.

### Tareas a realizar:

1. **Estrategia Primer Ajuste (First-Fit)**:
   * ¿Qué hueco elegirá *First-Fit* partiendo desde la dirección `0x00`?
   * ¿De cuántos MB será el residuo sobrante que queda en ese hueco tras alojar `Proceso_BD` (16 MB)?

2. **Estrategia Mejor Ajuste (Best-Fit)**:
   * ¿Qué hueco elegirá *Best-Fit* tras examinar todos los huecos donde cabe el proceso?
   * ¿De cuántos MB será el residuo sobrante que queda libre en ese hueco?

* **Pregunta 2.1**: ¿Por qué *Best-Fit* resulta más eficiente que *First-Fit* en este escenario concreto?
* **Pregunta 2.2 (Comprobación en la App)**: Selecciona *Particiones Variables* en la pestaña 1 del simulador y valida tu respuesta en la **Misión 2** del *Reto del Administrador* (+150 XP).

---

## 🚨 Fase 3: Incidente de Fragmentación Externa y Compactación

El monitor del servidor lanza una alerta crítica: el servicio **`backup_agent` (24 MB)** no puede iniciar y devuelve un error *Out of Memory (OOM)*.

Al revisar la telemetría del Kernel con `free -m`, compruebas que la **memoria libre total es de 36 MB**, pero se encuentra dividida en 4 huecos libres discontinuos:
* `Hueco A: 8 MB`
* `Hueco B: 10 MB`
* `Hueco C: 12 MB`
* `Hueco D: 6 MB`

### Tareas a realizar:

* **Pregunta 3.1**: Explica por qué el servicio de 24 MB no puede cargarse si la suma total de memoria libre (36 MB) supera ampliamente lo requerido. ¿Cómo se llama técnicamente este problema?
* **Pregunta 3.2**: ¿Qué operación del sistema operativo (disponible en el botón *Compactar Memoria* del simulador) desplaza los procesos activos para unificar los 36 MB libres en un único bloque contiguo?
* **Pregunta 3.3 (Comprobación en la App)**: Resuelve la **Misión 3** en el *Reto del Administrador* (+200 XP).

---

## 🏆 Evaluación y Desafío Gamificado

### Criterios de puntuación:
* **Fase 1 (Particiones Fijas)**: 3,5 puntos (Cálculos de fragmentación interna).
* **Fase 2 (First-Fit vs Best-Fit)**: 3,5 puntos (Resolución de residuos de algoritmos).
* **Fase 3 (Fragmentación Externa)**: 3,0 puntos (Diagnóstico técnico y compactación).

### Indicaciones de entrega:
1. Completa los ejercicios y tablas en tu cuaderno o documento de texto.
2. Comprueba y valida tus puntuaciones completando las Misiones 1, 2 y 3 en la app web `MEMOS-SMR` (tus medallas y XP se guardan automáticamente en tu navegador).
3. Exporta tu trabajo a formato **PDF** y súbelo a la tarea `[PRA 5.1]` en Google Classroom.
