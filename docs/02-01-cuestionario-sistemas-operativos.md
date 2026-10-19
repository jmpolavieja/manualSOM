---
title: "2.1 Cuestionario y Ejercicios: Arquitectura y Procesos"
description: "Actividades de autoevaluación sobre las funciones del SO, arquitectura por capas, llamadas al sistema, estados de procesos y comandos de monitorización."
---

# 2.1 Cuestionario y Ejercicios: Arquitectura y Procesos

* **Unidad Didáctica**: UD2. Introducción a los Sistemas Operativos [3, 4].
* **Resultado de Aprendizaje**: **RA1** (*Reconoce las características de los sistemas operativos, analizando sus elementos y funciones*) [1].
* **Criterios de Evaluación**:
    * **CE RA1.c** (*Análisis de las funciones del sistema operativo*) [1, 2].
    * **CE RA1.d** (*Descripción de la arquitectura del sistema operativo*) [1, 2].
    * **CE RA1.e** (*Identificación de los procesos y sus estados*) [1, 2].

---

## 📝 Bloque 1: Cuestionario Tipo Test de Autoevaluación

Selecciona la opción correcta en cada pregunta. Puedes desplegar la solución para comprobar la explicación técnica.

### 1. ¿Qué componente del sistema operativo opera en modo protegido/privilegiado administrando los recursos de hardware directos?
- [ ] a) El intérprete de comandos o Shell [3, 5].
- [ ] b) El software de aplicación horizontal [6].
- [ ] c) El Núcleo o Kernel [5, 7, 8].
- [ ] d) La interfaz gráfica de usuario (GUI) [3, 5].

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: c) El Núcleo o Kernel [5, 7, 8].**  
> **Explicación**: El **Kernel** es el módulo central del software de base que se ejecuta en el modo privilegiado de la CPU para gestionar el procesador, la memoria RAM y los dispositivos [5, 7]. El Shell y la GUI son interfaces que interactúan con el usuario en modo no privilegiado [3, 5].
</details>

---

### 2. Cuando una aplicación solicita crear un archivo en el disco o reservar memoria RAM, se comunica con el Kernel a través de:
- [ ] a) Un algoritmo de planificación Round Robin [8].
- [ ] b) Una Llamada al Sistema (*System Call* / API) [5, 7, 8].
- [ ] c) El controlador de dispositivo (*Driver*) de la impresora [5].
- [ ] d) El firmware BIOS/UEFI del sistema [5].

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: b) Una Llamada al Sistema (*System Call* / API) [5, 7, 8].**  
> **Explicación**: Las **System Calls** o funciones de la API del SO son la interfaz estandarizada mediante la cual las aplicaciones solicitan servicios directamente al Kernel [5, 7].
</details>

---

### 3. ¿En qué arquitectura de Kernel la mayoría de los servicios (como controladores y sistemas de archivos) se ejecutan fuera del Kernel en espacio de usuario?
- [ ] a) Estructura Monolítica [8].
- [ ] b) Micronúcleo (*Microkernel*) [8].
- [ ] c) Núcleo Híbrido [8].
- [ ] d) Sistema Transaccional [9].

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: b) Micronúcleo (*Microkernel*) [8].**  
> **Explicación**: La arquitectura de **micronúcleo** mantiene en el Kernel solo las funciones mínimas indispensables (planificación básica y comunicación IPC), ejecutando los controladores y gestores de archivos como procesos en espacio de usuario para mayor estabilidad [8].
</details>

---

### 4. ¿Cuál es la diferencia fundamental entre un programa y un proceso?
- [ ] a) Un programa está cargado en la memoria RAM y un proceso en el disco [3, 7].
- [ ] b) Un programa es una entidad estática en disco y un proceso es una entidad dinámica activa en la memoria RAM [3, 7, 10].
- [ ] c) Un programa siempre se ejecuta en modo Kernel y un proceso en modo usuario [5, 8].
- [ ] d) No existe diferencia, ambos términos son sinónimos exactos [3, 10].

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: b) Un programa es una entidad estática en disco y un proceso es una entidad dinámica activa en la memoria RAM [3, 7, 10].**  
> **Explicación**: El programa es el código fuente u objeto almacenado de forma pasiva en el disco duro o SSD [3, 7, 10]. Al ejecutarse, el sistema operativo le asigna espacio en RAM y un PID, convirtiéndolo en un proceso activo [3, 7].
</details>

---

### 5. ¿Qué estado adopta un proceso cuando está cargado en la memoria RAM esperando a que el planificador le asigne un turno de CPU?
- [ ] a) Nuevo (*New*) [3, 10].
- [ ] b) Bloqueado (*Waiting*) [3, 10].
- [ ] c) Preparado (*Ready*) [3, 10].
- [ ] d) Terminado (*Terminated*) [3, 10].

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: c) Preparado (*Ready*) [3, 10].**  
> **Explicación**: El estado **Preparado** indica que el proceso tiene todos sus datos e instrucciones en RAM y únicamente aguarda a que la CPU quede libre para ejecutar sus órdenes [3, 10].
</details>

---

### 6. El algoritmo de planificación que asigna un intervalo fijo de tiempo (*Quantum*) a cada proceso se denomina:
- [ ] a) FCFS (*First Come First Served*) [8].
- [ ] b) SJF (*Shortest Job First*) [8].
- [ ] c) Round Robin (RR) [8].
- [ ] d) Planificación por Prioridades fijas [8].

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: c) Round Robin (RR) [8].**  
> **Explicación**: En **Round Robin**, la CPU concede a cada proceso un turno equitativo llamado *Quantum* [8]. Si el proceso no termina durante su turno, vuelve al final de la cola en estado *Preparado* [3, 8].
</details>

---

## ✏️ Bloque 2: Preguntas de Desarrollo Corto

Responde de forma concisa a las siguientes cuestiones en tu cuaderno o documento de trabajo:

1. **Capas del Sistema Informático**: Describe la relación de comunicación existente entre el Hardware, el Kernel, las Llamadas al Sistema (*System Calls*), el Shell y las Aplicaciones de usuario [3-5].
2. **Ciclo de vida de un proceso**: Explica por qué un proceso pasa del estado *Ejecución* al estado *Bloqueado* y qué evento debe ocurrir para que vuelva a *Preparado* [3, 10].
3. **Comandos de gestión en terminal**: Indica la función de los comandos `top` y `kill` en Linux (o `Get-Process` y `Stop-Process` en Windows) e identifica qué es el número `PID` [3, 10, 11].

<details>
<summary><b>Ver Solucionario del Bloque 2</b></summary>

> **1. Estructura por capas**:  
> El **Hardware** ejecuta las instrucciones electrónicas [5]. El **Kernel** gestiona directamente el hardware en modo protegido [5, 7]. Las **System Calls** ofrecen funciones para que las aplicaciones o el **Shell** le pidan servicios al Kernel [5, 7]. El **Shell / GUI** interpreta los comandos del usuario [3, 5]. Las **Aplicaciones** son los programas de usuario final [3, 6].
>
> **2. Transiciones de Estado**:  
> Un proceso pasa de *Ejecución* a **Bloqueado** cuando necesita realizar una operación de Entrada/Salida (p. ej., leer un archivo en disco o esperar datos de la red) [3, 7, 10]. Vuelve a **Preparado** cuando el dispositivo de E/S finaliza la operación solicitada y notifica la interrupción [3, 10].
>
> **3. Monitorización e Identificadores**:
> * El **PID (*Process ID*)** es el identificador numérico único que asigna el SO a cada proceso activo en la memoria RAM [3, 7].
> * `top` / `Get-Process`: Muestran la lista de procesos activos y su consumo de memoria RAM y CPU [3, 10].
> * `kill` / `Stop-Process`: Detienen o finalizan de forma forzada la ejecución de un proceso según su PID o nombre [3].
</details>

---

## 📊 Bloque 3: Supuesto Práctico de Transición de Estados

### Análisis de la Dinámica de un Proceso
Sigue la siguiente secuencia de eventos realizada por un alumno en el equipo de laboratorio y responde a las cuestiones planteadas [3, 10, 11]:

```text
[Evento 1] El usuario abre la consola de PowerShell y teclea: Start-Process notepad
[Evento 2] El SO lee el ejecutable notepad.exe del disco SSD, reserva espacio en RAM y asigna el PID 4120.
[Evento 3] El planificador otorga la CPU al Bloc de notas y el programa se dibuja en la pantalla.
[Evento 4] El alumno pulsa "Abrir archivo" y el sistema queda a la espera de que seleccione un documento.
[Evento 5] El alumno selecciona el archivo en disco y los datos se cargan en la pantalla.
[Evento 6] El alumno teclea en PowerShell: Stop-Process -Id 4120
```
1. ¿Qué estado tenía notepad durante el Evento 2?
2. ¿A qué estado cambió notepad durante el Evento 3?
3. ¿A qué estado cambió notepad durante el Evento 4 y por qué?
4. ¿Qué ocurre en el Evento 6 con la memoria RAM del equipo?
5. Evento 2: Estado Nuevo (inicializándose) $\rightarrow$ pasa inmediatamente a Preparado (Ready) al cargarse en la RAM con su PID
6. Evento 3: Estado Ejecución (Running) al recibir el turno de CPU
7. Evento 4: Transición al estado Bloqueado (Waiting) porque debe esperar la acción de Entrada/Salida del usuario y la lectura en disco
8. Evento 6: El proceso pasa al estado Terminado (Terminated), liberando el PID 4120 y devolviendo la memoria RAM asignada al fondo común del sistema operativo
## 📤 Actividad para entregar en Google Classroom 
1. Resuelve las preguntas del Bloque 1, Bloque 2 y el Supuesto del Bloque 3 en tu cuaderno o documento de texto.
2. Ejecuta en la consola de tu equipo el comando `ps aux` en Linux o Get-Process en PowerShell. Adjunta una captura de pantalla identificando el PID, el nombre de proceso y el uso de memoria de al menos dos aplicaciones en ejecución.
3. Guarda el trabajo en un archivo PDF y súbelo a la tarea correspondiente antes de la fecha límite.
