---
title: "Práctica 4.2: Despliegue de Sistemas Operativos en Máquinas Virtuales"
description: "Taller práctico de despliegue de una distribución Linux (Lubuntu) en Oracle VirtualBox: preparación de la MV, proceso de particionado e instalación, configuración post-instalación y actualización por terminal Bash (apt update & upgrade)."
---

### Práctica 4.2: Despliegue de Sistemas Operativos en Máquinas Virtuales

* **Unidad Didáctica**: UD4. Instalación de Sistemas Operativos.
* **Resultado de Aprendizaje**: **RA2** (*Instala sistemas operativos monopuesto, evaluando sus características y aplicando técnicas de particionado y configuración*).
* **Criterios de Evaluación**: **CE RA2.d**, **CE RA2.e**, **CE RA2.f**, **CE RA2.g**.
* **Duración estimada**: 2 sesiones (2 horas de taller de laboratorio).

---

#### 🎯 Objetivos de la Práctica

1. Configurar una máquina virtual en **Oracle VM VirtualBox 6.1+** adaptando los recursos de hardware (RAM, vCPU, Disco VDI y Red) a los requisitos del sistema operativo huésped.
2. Desplegar de forma completa la distribución **Lubuntu Linux** realizando la fase de particionado de disco e inicialización de cuentas de usuario.
3. Ejecutar las tareas post-instalación de administración del sistema mediante la consola de comandos **Bash** (`lsblk`, `df`, `apt update`, `apt upgrade`).

---

#### 🧰 Materiales y Requisitos Previos

* Equipo físico del taller con sistema anfitrión (Windows 10/11 o Linux).
* **Oracle VM VirtualBox 6.1** o superior instalado en el equipo anfitrión.
* Imagen ISO oficial de **Lubuntu 22.04 LTS (64-bit)** alojada en el disco local del anfitrión.

---

#### 💻 Parte 1: Creación de la Máquina Virtual en VirtualBox

1. Abre **VirtualBox** y haz clic en el botón **Nueva** (Ctrl+N). Configura los siguientes parámetros iniciales:
   * **Nombre**: `MV_Lubuntu_SMR`
   * **Tipo**: `Linux`
   * **Versión**: `Ubuntu (64-bit)`
2. **Asignación de Memoria RAM**: Asigna **2048 MB (2 GB)**.
3. **Creación de Disco Duro Virtual**:
   * Selecciona *Crear un disco duro virtual ahora*.
   * **Tipo de archivo**: `VDI (VirtualBox Disk Image)`.
   * **Almacenamiento en disco físico**: `Reservado dinámicamente`.
   * **Tamaño del disco**: **25 GB**.
4. **Montaje de la Imagen ISO**:
   * Accede a `Configuración` -> `Almacenamiento`.
   * Selecciona el controlador IDE/SATA con el icono de disco vacío (*Vacío*).
   * En el panel derecho, pulsa sobre el icono del disco y selecciona *Añadir un archivo de disco óptico virtual*. Busca y selecciona la ISO de Lubuntu descargada.
5. **Configuración de Red**:
   * Accede a `Configuración` -> `Red` y verifica que el **Adaptador 1** está habilitado en modo **NAT**.

---

#### ⚙️ Parte 2: Proceso de Instalación de Lubuntu Linux

1. Inicia la máquina virtual pulsando en **Iniciar**.
2. En el menú de arranque del instalador (GRUB), selecciona la opción **Try or Install Lubuntu**.
3. Una vez cargado el escritorio en vivo (Live-CD), haz doble clic sobre el icono **Instalar Lubuntu 22.04 LTS** presente en el escritorio.
4. Sigue los pasos del asistente gráfico:
   * **Idioma**: Selecciona *Español*.
   * **Zona Horaria**: Selecciona *Madrid* (`Europe/Madrid`).
   * **Teclado**: Selecciona *Spanish* (Español).
5. **Fase de Particionado de Disco**:
   * Selecciona la opción **Borrar disco** (el instalador creará automáticamente la tabla de particiones GPT, la partición de sistema EFI de 300 MB y la partición raíz `/` en EXT4).
6. **Creación de la Cuenta de Usuario**:
   * **Su nombre**: `Alumno SMR`
   * **El nombre de su ordenador**: `pc-laboratorio-som`
   * **Nombre de usuario**: `alumno`
   * **Contraseña**: `som2026` (o la definida por el profesor).
7. Haz clic en **Instalar** y confirma la escritura de los cambios en el disco VDI. Espera a que se complete el proceso de copia y descompresión.
8. Al finalizar, marca *Reiniciar ahora*, pulsa Enter cuando el sistema pida retirar el medio de instalación (*Please remove the installation medium*), y espera al primer inicio.

---

#### 🖥️ Parte 3: Tareas Post-Instalación en Consola Bash

Inicia sesión con el usuario `alumno` y abre la **Terminal de QTerminal** (o pulsa Ctrl+Alt+T). Ejecuta la siguiente secuencia de comandos de verificación y mantenimiento:

```bash
# 1. Verificar el esquema de particiones creadas en el disco virtual VDI
lsblk

# 2. Consultar el espacio en disco utilizado y disponible en formato legible (human-readable)
df -h /

# 3. Actualizar la lista de paquetes e índices de los repositorios oficial
sudo apt update

# 4. Descargar e instalar todas las actualizaciones y parches de seguridad pendientes
sudo apt upgrade -y

# 5. Instalación de utilidades del sistema y controladores adicionales
sudo apt install -y build-essential dkms htop net-tools

# 6. Comprobar el consumo de memoria RAM y CPU en tiempo real
htop
```

::: tip Nota sobre el uso de sudo
El comando `sudo` eleva temporalmente los privilegios del usuario `alumno` a nivel de **root** (administrador). Se solicitará la contraseña de usuario (`som2026`) durante la primera ejecución.
:::

---

#### 📤 Entrega y Evaluación en Google Classroom

Para superar la práctica, debes realizar las siguientes capturas de pantalla de tu máquina virtual y adjuntarlas en la tarea habilitada en la plataforma:

1. **Captura 1 (Particionado de Disco)**: Muestra la consola de terminal con la salida completa del comando `lsblk` y `df -h`, donde se observe la partición raíz `/` con sistema de archivos EXT4.
2. **Captura 2 (Actualización Post-Instalación)**: Muestra la terminal con la ejecución con éxito del comando `sudo apt update && sudo apt upgrade` finalizado sin errores.
3. **Captura 3 (Monitorización)**: Muestra la herramienta `htop` ejecutándose en la terminal, donde se aprecie el consumo de memoria RAM de Lubuntu en reposo.
