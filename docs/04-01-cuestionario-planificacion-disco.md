---
title: "4.1 Cuestionario y Ejercicios: Planificación de Disco"
description: "Actividades de autoevaluación sobre esquemas de particionado MBR y GPT, selección de sistemas de archivos, características de FAT32/NTFS/EXT4 y gestores de arranque GRUB/BCD."
---

### 4.1 Cuestionario y Ejercicios: Planificación de Disco

* **Unidad Didáctica**: UD4. Instalación de Sistemas Operativos.
* **Resultado de Aprendizaje**: **RA2** (*Instala sistemas operativos monopuesto, evaluando sus características y aplicando técnicas de particionado y configuración*).
* **Criterios de Evaluación**: **CE RA2.a** (*Selección de sistema de archivos*), **CE RA2.b** (*Preparación de unidades mediante particionado*), **CE RA2.c** (*Identificación de funciones del gestor de arranque*).

---

#### 📝 Bloque 1: Cuestionario Tipo Test de Autoevaluación

Selecciona la opción correcta en cada una de las siguientes cuestiones. Puedes desplegar la solución para verificar la justificación técnica.

##### 1. ¿Cuál es la capacidad máxima teórica de almacenamiento que puede gestionar el esquema de particionado MBR empleando sectores estándar de 512 Bytes?
* [ ] a) 512 GB.
* [ ] b) 2 TB.
* [ ] c) 128 TB.
* [ ] d) 9,4 ZB.
<details>
<summary><b>Ver Respuesta Correcta</b></summary>

**Respuesta correcta: b) 2 TB.**
**Explicación**: El esquema MBR utiliza direccionamiento de 32 bits para identificar los sectores del disco. Con un tamaño de sector estándar de 512 Bytes: $2^{32} \times 512 \text{ Bytes} = 2.199.023.255.552 \text{ Bytes} \approx \mathbf{2 \text{ TB}}$.
</details>

---

##### 2. Si se requiere formatear un pendrive USB de 64 GB para intercambiar archivos superiores a 10 GB entre ordenadores con Windows, macOS y Linux sin limitaciones de tamaño de fichero, ¿qué sistema de archivos es el más adecuado?
* [ ] a) FAT32.
* [ ] b) EXT4.
* [ ] c) exFAT.
* [ ] d) NTFS.
<details>
<summary><b>Ver Respuesta Correcta</b></summary>

**Respuesta correcta: c) exFAT.**
**Explicación**: FAT32 no permite almacenar archivos de más de 4 GB. NTFS y EXT4 tienen limitaciones de escritura nativa o permisos cruzados en macOS/Linux de fábrica. **exFAT** fue diseñado específicamente para unidades flash extraíbles de gran capacidad sin la restricción del límite de 4 GB.
</details>

---

##### 3. En una tabla de particiones MBR, ¿cuál es el número máximo de particiones primarias que se pueden crear si no se utiliza ninguna partición extendida?
* [ ] a) 2 particiones.
* [ ] b) 4 particiones.
* [ ] c) 128 particiones.
* [ ] d) Ilimitadas.
<details>
<summary><b>Ver Respuesta Correcta</b></summary>

**Respuesta correcta: b) 4 particiones.**
**Explicación**: La tabla de particiones del Sector 0 en MBR mide exactamente 64 Bytes y dispone de 4 entradas de 16 Bytes, lo que limita a un máximo de 4 particiones primarias (o 3 primarias y 1 extendida).
</details>

---

##### 4. ¿Qué ventaja fundamental aporta la tecnología de *Journaling* en sistemas de archivos como NTFS o EXT4?
* [ ] a) Aumenta la velocidad de transferencia al doble mediante compresión automática.
* [ ] b) Permite instalar ejecutables de Windows en distribuciones Linux.
* [ ] c) Mantiene un registro previo de transacciones para recuperar la consistencia del disco tras un apagado inesperado.
* [ ] d) Elimina la necesidad de utilizar un gestor de arranque en el firmware UEFI.
<details>
<summary><b>Ver Respuesta Correcta</b></summary>

**Respuesta correcta: c) Mantiene un registro previo de transacciones para recuperar la consistencia del disco tras un apagado inesperado.**
**Explicación**: El *Journaling* escribe los cambios previstos en una zona especial de diario (*journal*) antes de aplicarlos físicamente en los bloques de datos, evitando chequeos lentos (*fsck* o *chkdsk*) tras una caída del sistema.
</details>

---

##### 5. En un equipo moderno con firmware UEFI y tabla GPT, ¿en qué partición especial se almacenan los ejecutables de arranque `.efi` de los distintos sistemas operativos?
* [ ] a) En el Master Boot Record (MBR).
* [ ] b) En la Partición Extendida.
* [ ] c) En la Partición de Sistema EFI (ESP - EFI System Partition) formateada en FAT32.
* [ ] d) En el área MBR de protección secundario.
<details>
<summary><b>Ver Respuesta Correcta</b></summary>

**Respuesta correcta: c) En la Partición de Sistema EFI (ESP - EFI System Partition) formateada en FAT32.**
**Explicación**: El estándar UEFI no lee código en el MBR, sino que busca una partición del sistema con formato FAT32 (tipo `EF00` o ESP) donde cada sistema operativo ubica sus archivos ejecutable de arranque `.efi`.
</details>

---

##### 6. ¿Cuál es el gestor de arranque estándar en las distribuciones GNU/Linux capaz de detectar automáticamente otros sistemas instalados como Windows?
* [ ] a) NTLDR.
* [ ] b) BCDedit.
* [ ] c) GRUB2.
* [ ] d) LILO.
<details>
<summary><b>Ver Respuesta Correcta</b></summary>

**Respuesta correcta: c) GRUB2.**
**Explicación**: **GRUB2** (GRand Unified Bootloader) es el gestor modular flexible utilizado por defecto en distribuciones como Ubuntu o Debian. Mediante el script `os-prober` escanea los discos e integra automáticamente las entradas de Windows Boot Manager.
</details>

---

#### ✏️ Bloque 2: Preguntas de Desarrollo Corto

Responde de forma concisa a las siguientes cuestiones en tu cuaderno o documento de entrega:

1. **Comparativa MBR vs. GPT**: Justifica por qué un disco de 4 TB de capacidad no puede aprovecharse completamente utilizando el esquema MBR y explica cómo lo resuelve el esquema GPT.
2. **Límites de FAT32**: Explica el problema que surge al intentar copiar una imagen ISO de instalación de Windows 11 de 5.8 GB en un pendrive USB formateado en FAT32 e indica dos soluciones técnicas.
3. **Estructura del Dual-Boot**: En un equipo con Windows 11 y Ubuntu Linux instalados en el mismo disco, describe la función del archivo `/etc/default/grub` y qué comando debe ejecutarse en consola tras modificarlo.

<details>
<summary><b>Ver Solucionario del Bloque 2</b></summary>

**1. MBR vs GPT en discos de 4 TB**:
* MBR gestiona un máximo de $2^{32}$ sectores. Con sectores de 512 Bytes, el límite direccionable es de **2 TB**. Todo el espacio que supere los 2 TB en un disco de 4 TB quedará inaccesible e inútil (*Unallocated*).
* GPT resuelve esto empleando direcciones de **64 bits**, lo que permite direccionar hasta **9,4 Zettabytes** de capacidad, además de admitir hasta 128 particiones sin necesidad de particiones extendidas.

**2. Límites de FAT32**:
* El sistema de archivos FAT32 utiliza campos de 32 bits para el tamaño de cada archivo, imponiendo un límite absoluto de **4 GB por fichero**. La copia de la ISO de 5,8 GB fallará mostrando el error *"El archivo es demasiado grande para el sistema de archivos de destino"*.
* **Soluciones**: Formatear el pendrive en **exFAT** o en **NTFS** (si solo se va a utilizar en equipos Windows).

**3. Configuración de GRUB2 en Dual-Boot**:
* El archivo `/etc/default/grub` define las variables del menú de arranque (tiempo de espera `GRUB_TIMEOUT`, entrada por defecto `GRUB_DEFAULT`, etc.).
* Tras guardar cualquier modificación en dicho archivo, es obligatorio ejecutar en la consola de Linux el comando `sudo update-grub` (o `grub-mkconfig -o /boot/grub/grub.cfg`) para recompilar el archivo de configuración final de arranque.
</details>

---

#### 📊 Bloque 3: Supuesto Práctico de Planificación de Disco

##### Caso Práctico: Diseño de Almacenamiento para el Taller de 1º SMR
Se ha recibido en el laboratorio de informática una torre nueva equipada con un **disco SSD NVMe M.2 de 500 GB** ($500 \text{ GB} \approx 465 \text{ GiB}$ reales). Se requiere configurar un entorno de trabajo con **arranque múltiple (Dual-Boot)** que cumpla con la siguiente estructura de particionado:

1. **Sistema Operativo Windows 11 Pro**: Requiere $120 \text{ GB}$ formateados en **NTFS**.
2. **Sistema Operativo Lubuntu 22.04 LTS**: Requiere $60 \text{ GB}$ formateados en **EXT4** para el sistema raíz (`/`).
3. **Datos de Alumnos (Home)**: Se desea asignar $200 \text{ GB}$ formateados en **EXT4** para los perfiles de usuario de Linux (`/home`).
4. **Intercambio (SWAP)**: Se asignarán $4 \text{ GB}$ para la memoria virtual de Linux.
5. **Almacén Compartido**: El espacio restante se formateará para intercambiar datos de forma transparente entre Windows y Linux.

```text
[Distribución Deseada en el Disco SSD de 500 GB]
┌─────────────┬──────────────┬──────────────┬───────────┬────────────────────┐
│ Windows 11  │ Linux Raíz / │  Linux /home │ Swap Linux│ Almacén Compartido │
│  (120 GB)   │   (60 GB)    │   (200 GB)   │  (4 GB)   │   (Resto ~116 GB)  │
└─────────────┴──────────────┴──────────────┴───────────┴────────────────────┘
```

**Se pide**:

1. Justifica qué esquema de particionado (**MBR o GPT**) y qué tipo de firmware de placa base (**BIOS o UEFI**) se debe seleccionar obligatoriamente para este despliegue.
2. Determina el sistema de archivos óptimo para la **Partición 5 (Almacén Compartido)** justificando la respuesta.
3. Si el equipo se configurase con esquema **MBR**, indica detalladamente qué combinación de **particiones primarias, extendida y lógicas** se debería aplicar para poder alojar las 5 particiones solicitadas.

<details>
<summary><b>Ver Solución al Supuesto Práctico</b></summary>

**1. Esquema de Particionado y Firmware**:
* Se debe seleccionar **GPT** y **UEFI**. Windows 11 exige obligatoriamente firmware UEFI de 64 bits y tabla de particiones GPT con arranque seguro (*Secure Boot*). Además, GPT permite crear las 5 particiones directamente como primarias sin las restricciones de MBR.

**2. Sistema de Archivos para el Almacén Compartido**:
* El sistema de archivos óptimo es **exFAT** (o en su defecto **NTFS**). exFAT permite lectura/escritura nativa tanto en Windows como en Linux sin problemas de permisos POSIX y sin el límite de 4 GB por archivo de FAT32.

**3. Alternativa en Esquema MBR (si fuese un sistema heredado)**:
En MBR solo se permiten 4 particiones primarias. Como se requieren 5 divisiones, la estructura adecuada sería:
* **Partición Primaria 1**: $120 \text{ GB}$ (NTFS) - Windows 11.
* **Partición Primaria 2**: $60 \text{ GB}$ (EXT4) - Linux Raíz (`/`).
* **Partición Primaria 3**: $200 \text{ GB}$ (EXT4) - Linux `/home`.
* **Partición Extendida (Primaria 4)**: Abarca todo el espacio restante ($\sim 120 \text{ GB}$).
  * **Partición Lógica 1** (dentro de la extendida): $4 \text{ GB}$ (Linux Swap).
  * **Partición Lógica 2** (dentro de la extendida): $\sim 116 \text{ GB}$ (exFAT/NTFS) - Almacén Compartido.
</details>
