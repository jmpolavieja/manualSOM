---
title: "Práctica 2.2: Administración de Archivos y Permisos por Terminal"
description: "Taller práctico de navegación por la estructura de directorios, operaciones CRUD y asignación de permisos en Linux (Bash) y Windows (PowerShell)."
---

# Práctica 2.2: Administración por Terminal (Bash y PowerShell)

* **Unidad Didáctica**: UD2. Introducción a los Sistemas Operativos [5].
* **Resultado de Aprendizaje**: **RA1** (*Reconoce las características de los sistemas operativos*) [1].
* **Criterios de Evaluación**: **CE RA1.f**, **CE RA1.g**, **CE RA1.h** [1-3].
* **Duración estimada**: 2 sesiones (2 horas).

---

## 🎯 Objetivos
1. Navegar por el árbol de directorios del sistema operativo utilizando rutas absolutas y relativas por consola [4, 6].
2. Crear, copiar, mover, renombrar y eliminar directorios y archivos (operaciones CRUD) mediante comandos en consola [4].
3. Consultar y modificar atributos y permisos de seguridad sobre archivos y carpetas [3, 4].

---

## 💻 Parte 1: Taller Práctico en Linux (Bash)

Abre la consola de **Bash** e introduce la siguiente secuencia ordenada de comandos [7, 8]:

```bash
# 1. Comprobar la ubicación actual y listar contenido
pwd
ls -la

# 2. Crear una estructura de carpetas en el directorio personal
mkdir -p ~/laboratorio_som/unidad2/practica

# 3. Navegar mediante ruta relativa
cd ~/laboratorio_som/unidad2/practica

# 4. Crear un archivo de texto con contenido
echo "Práctica 2.2 de Sistemas Operativos Monopuesto" > notas.txt

# 5. Consultar los permisos del archivo creado
ls -l notas.txt

# 6. Cambiar permisos: Otorgar permiso de ejecución al propietario y quitar escritura al grupo
chmod 754 notas.txt

# 7. Copiar y renombrar el archivo
cp notas.txt notas_backup.txt
mv notas_backup.txt copia_seguridad.txt

# 8. Limpieza de prueba
rm copia_seguridad.txt
🪟 Parte 2: Taller Práctico en Windows (PowerShell)
Abre la consola de PowerShell e introduce los siguientes cmdlets
:
# 1. Comprobar la ubicación y listar archivos (incluyendo ocultos)
Get-Location
Get-ChildItem -Force

# 2. Crear un árbol de directorios en el perfil de usuario
New-Item -Path "$env:USERPROFILE\laboratorio_som\unidad2" -ItemType Directory -Force
Set-Location "$env:USERPROFILE\laboratorio_som\unidad2"

# 3. Crear un archivo de texto
Set-Content -Path "reporte.txt" -Value "Registro de actividad en Windows PowerShell"

# 4. Asignar el atributo de Solo Lectura al archivo
Set-ItemProperty -Path "reporte.txt" -Name IsReadOnly -Value $true

# 5. Intentar eliminar el archivo (comprobar la protección del atributo)
Remove-Item "reporte.txt"

# 6. Desactivar el atributo de solo lectura y eliminar
Set-ItemProperty -Path "reporte.txt" -Name IsReadOnly -Value $false
Remove-Item "reporte.txt"
📤 Entrega y Evaluación en Google Classroom
Captura una fotografía o imagen de la pantalla donde se observe el historial de comandos ejecutados en Bash con los permisos 754 asignados al archivo notas.txt
.
Captura la terminal de PowerShell mostrando la protección del atributo de Solo Lectura (IsReadOnly)
.
Adjunta ambas capturas en la tarea correspondiente de la plataforma educativa
.
