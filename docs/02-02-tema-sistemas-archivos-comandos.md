---
title: "2.2 Sistemas de Archivos y Estructura de Directorios"
description: "Organización jerárquica del disco, rutas absolutas/relativas, atributos, permisos rwx y sistemas transaccionales con Journaling."
---

# 2.2 Sistemas de Archivos y Estructura de Directorios

El **sistema de archivos** es la estructura lógica que utiliza el sistema operativo para organizar, almacenar, nombrar y recuperar la información contenida en las unidades de almacenamiento secundario (HDD/SSD) [4].

---

## 🌳 1. Organización Jerárquica y Rutas de Acceso

La información se organiza en una **estructura de árbol invertido** que parte de un directorio raíz [4]:

* **Directorio Raíz**:
    * En **Windows**: Cada unidad física o lógica recibe una letra seguida de dos puntos y barra invertida (ej. `C:\`, `D:\`).
    * En **Linux/Unix**: Existe una única raíz representada por una barra diagonal (`/`).
* **Tipos de Rutas**:
    * **Ruta Absoluta**: Especifica la localización exacta de un archivo o carpeta comenzando desde la raíz del sistema.
        * *Windows*: `C:\Usuarios\Alumno\Documentos\tema2.pdf`
        * *Linux*: `/home/alumno/documentos/tema2.pdf`
    * **Ruta Relativa**: Especifica la localización tomando como punto de partida la carpeta actual de trabajo (`.`) o la carpeta superior (`..`).
        * *Ejemplo estando en `/home/alumno`*: `./documentos/tema2.pdf` o `../profesor`

---

## 📄 2. Archivos, Atributos y Caracteres Comodín

Un **archivo** o fichero es un conjunto homogéneo de información almacenado en disco [4].

### A. Nombre, Extensión y Comodines
* **Nombre y Extensión**: Identifica el contenido y el programa asociado para su apertura (ej. `.docx`, `.pdf`, `.ps1`, `.txt`) [4].
* **Caracteres Comodín (*Wildcards*)** [4]:
    * `*` (Asterisco): Reemplaza una cadena de cualquier número de caracteres (ej. `*.txt` selecciona todos los archivos de texto).
    * `?` (Interrogación): Reemplaza un único carácter en una posición específica (ej. `tema?.pdf` selecciona `tema1.pdf`, `tema2.pdf`, etc.).

### B. Atributos Básicos
Los atributos definen propiedades especiales asignadas por el SO a los archivos y directorios [2, 4]:
* **Solo lectura (*Read-Only*)**: Impide la modificación o borrado accidental del contenido.
* **Oculto (*Hidden*)**: Oculta el archivo en los exploradores estándar para evitar manipulaciones.
* **Sistema (*System*)**: Marca archivos críticos del Kernel o del SO.
* **Archivo / Compreso / Cifrado**: Indican si el archivo requiere copia de seguridad o cifrado a nivel de disco.

---

## 🔒 3. Permisos de Seguridad en Archivos y Directorios

Los permisos determinan qué usuarios o grupos pueden acceder a los recursos del sistema [3, 4]:

### Permisos POSIX en Linux (`rwx`) [3]
Se aplican a tres niveles: **Usuario propietario (*User*)**, **Grupo propietario (*Group*)** y **Otros (*Others*)**.

| Permiso | Símbolo | Valor Octal | Efecto en Archivos | Efecto en Directorios |
| :---: | :---: | :---: | :--- | :--- |
| **Lectura (*Read*)** | `r` | `4` | Ver el contenido del archivo. | Listar el contenido del directorio (`ls`). |
| **Escritura (*Write*)** | `w` | `2` | Modificar o guardar cambios. | Crear, borrar o renombrar archivos dentro. |
| **Ejecución (*Execute*)** | `x` | `1` | Ejecutar el programa/script. | Entrar o atravesar el directorio (`cd`). |

*Ejemplo de permisos*: `-rwxr-xr--` (Propietario: Lectura/Escritura/Ejecución = `7`; Grupo: Lectura/Ejecución = `5`; Otros: Solo lectura = `4`).

---

## 💾 4. Selección del Sistema de Archivos y Transacciones

### A. Principales Sistemas de Archivos [4]
* **FAT32**: Altamente compatible con pendrives USB; límite máximo de archivo de 4 GB y tamaño de volumen de 32 GB/2 TB [4].
* **NTFS**: Sistema nativo de Windows. Admite permisos de seguridad ACL, cifrado, compresión y volúmenes de gran tamaño [4].
* **EXT4**: Sistema estándar en distribuciones GNU/Linux. Altamente eficiente con estructura de inodos [4].

### B. Sistemas Transaccionales (*Journaling*) [2, 4]
Un **sistema de archivos transaccional** utiliza un registro diario (*Journal*) donde anota los cambios planeados antes de escribirlos físicamente en el disco [4]. Si ocurre un corte de luz o fallo del sistema durante la escritura, el SO lee el registro al reiniciar y repara las inconsistencias en segundos sin perder datos [2, 4].
