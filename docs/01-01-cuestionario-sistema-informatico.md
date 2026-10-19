---
title: "1.1 Cuestionario y Ejercicios: El Sistema Informático"
description: "Actividades de autoevaluación sobre hardware, software, arquitectura del PC y componentes funcionales."
---

# 1.1 Cuestionario y Ejercicios: El Sistema Informático

* **Unidad Didáctica**: UD1. Introducción a los Sistemas Informáticos [4].
* **Resultado de Aprendizaje**: **RA1** (*Reconoce las características de los sistemas operativos, analizando sus elementos y funciones*) [5].
* **Criterio de Evaluación**: **CE RA1.a** (*Se han identificado y descrito los elementos funcionales de un sistema informático*) [5-7].

---

## 📝 Bloque 1: Cuestionario Tipo Test de Autoevaluación

Selecciona la opción correcta en cada una de las siguientes preguntas. Puedes desplegar la solución para comprobar la explicación técnica.

### 1. ¿Qué unidad interna de la CPU se encarga de dirigir el flujo de datos y coordinar la ejecución de las instrucciones de los programas?
- [ ] a) La Unidad Aritmético-Lógica (ALU).
- [ ] b) La Unidad de Control (UC).
- [ ] c) Los Registros del sistema.
- [ ] d) La Memoria Caché L3.

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: b) La Unidad de Control (UC).**  
> **Explicación**: La **Unidad de Control (UC)** recupera las instrucciones de la memoria principal, las decodifica y envía las señales de control al resto de componentes del sistema. La **ALU** se encarga exclusivamente de las operaciones matemáticas y lógicas [8].
</details>

---

### 2. El código de arranque inicial grabado de fábrica en la placa base que realiza el chequeo inicial de hardware (POST) se denomina:
- [ ] a) Controlador de dispositivo (*Driver*).
- [ ] b) Sistema Operativo de Red.
- [ ] c) Firmware (BIOS / UEFI).
- [ ] d) Software de Aplicación Vertical.

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: c) Firmware (BIOS / UEFI).**  
> **Explicación**: El **Firmware** (BIOS o UEFI) es código no volátil grabado en un chip de la placa base que verifica el hardware inicial (*POST*) y transfiere el control al cargador del sistema operativo [1].
</details>

---

### 3. ¿Qué tipo de bus de comunicación es unidireccional e indica la posición exacta de memoria a la que la CPU quiere acceder?
- [ ] a) Bus de Datos.
- [ ] b) Bus de Control.
- [ ] c) Bus de Direcciones.
- [ ] d) Bus PCI Express.

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: c) Bus de Direcciones.**  
> **Explicación**: El **Bus de Direcciones** es **unidireccional** (la CPU indica la dirección de destino hacia la RAM o E/S). En cambio, el **Bus de Datos** es bidireccional [8].
</details>

---

### 4. ¿Cómo se clasifican las aplicaciones como procesadores de texto, hojas de cálculo o navegadores web que sirven para tareas generales?
- [ ] a) Software de Base.
- [ ] b) Aplicaciones Horizontales.
- [ ] c) Aplicaciones Verticales.
- [ ] d) Controladores de dispositivo.

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: b) Aplicaciones Horizontales.**  
> **Explicación**: Las **aplicaciones horizontales** son programas de propósito general utilizados en múltiples sectores (ofimática, navegadores), mientras que las **verticales** están especializadas en una actividad concreta (CAD, contabilidad médica) [9].
</details>

---

### 5. ¿Qué programa intermedio permite que el Sistema Operativo se comunique con un componente de hardware específico recién instalado?
- [ ] a) Compilador de código.
- [ ] b) Kernel del sistema.
- [ ] c) Controlador de dispositivo (*Driver*).
- [ ] d) Intérprete de ordenes (Shell).

<details>
<summary><b>Ver Respuesta Correcta</b></summary>

> **Respuesta correcta: c) Controlador de dispositivo (Driver).**  
> **Explicación**: El **driver** o controlador proporciona una interfaz estándar hacia el SO y traduce las órdenes genéricas a las instrucciones específicas del hardware concreto [1].
</details>

---

## ✏️ Bloque 2: Preguntas de Desarrollo Corto

Responde de forma concisa a las siguientes cuestiones en tu cuaderno o documento de trabajo:

1. **Diferencia entre Memoria RAM y Memoria ROM**: Indica cuál es volátil, cuál almacena el código de arranque y cuáles son sus posibilidades de lectura/escritura [1].
2. **Jerarquía de la Memoria Caché**: Explica la función de la memoria caché (L1, L2, L3) y por qué se sitúa físicamente entre el procesador y la memoria RAM [8].
3. **Estructura por capas**: Explica qué función cumple la capa del **Sistema Operativo (Kernel)** entre el hardware físico y el software de aplicación [1, 10].

<details>
<summary><b>Ver Solucionario del Bloque 2</b></summary>

> **1. RAM vs ROM**:
> * La **RAM** es de lectura/escritura, **volátil** (pierde datos al apagar) y almacena los programas en ejecución.
> * La **ROM / Firmware (BIOS/UEFI)** es de solo lectura (no volátil) y almacena el código inicial de arranque del sistema [1].
>
> **2. Memoria Caché**:  
> Es una memoria ultrarrápida que almacena los datos e instrucciones que la CPU utiliza con mayor frecuencia para evitar los tiempos de espera más lentos de acceso a la RAM principal [8].
>
> **3. Capa del Kernel / SO**:  
> Aísla al usuario y a las aplicaciones de la complejidad del hardware físico, administrando de forma segura y eficiente la CPU, la memoria, los discos y los periféricos mediante llamadas al sistema (*System Calls*) [1, 10, 11].
</details>

---

## 📊 Bloque 3: Ejercicios Prácticos de Clasificación

### Ejercicio 3.1: Clasificación de Hardware
Clasifica los siguientes componentes en su categoría correspondiente (*CPU, Memoria Principal, Almacenamiento Secundario, Entrada, Salida, Mixto*) [8]:

| Componente Físico | Categoría |
| :--- | :--- |
| Teclado mecánico | `____________________` |
| Disco SSD NVMe M.2 | `____________________` |
| Unidad Aritmético-Lógica (ALU) | `____________________` |
| Monitor con panel IPS | `____________________` |
| Módulo de RAM DDR4 | `____________________` |
| Impresora Multifunción | `____________________` |

<details>
<summary><b>Ver Solución Ejercicio 3.1</b></summary>

| Componente Físico | Categoría |
| :--- | :--- |
| Teclado mecánico | **Dispositivo de Entrada** [8] |
| Disco SSD NVMe M.2 | **Almacenamiento Secundario (Mixto)** [8] |
| Unidad Aritmético-Lógica (ALU) | **CPU (Procesador)** [8] |
| Monitor con panel IPS | **Dispositivo de Salida** [8] |
| Módulo de RAM DDR4 | **Memoria Principal** [8] |
| Impresora Multifunción | **Dispositivo Mixto (E/S)** [8] |
</details>

---

### Ejercicio 3.2: Clasificación de Software
Indica para cada elemento si pertenece al **Software de Base (Sistema)** o al **Software de Aplicación (Horizontal / Vertical)** [9, 10, 12]:

1. Sistema Operativo Ubuntu Linux 24.04 LTS: `____________________` [1]
2. Controlador (*driver*) de la tarjeta gráfica NVIDIA RTX: `____________________` [1]
3. Software de diseño arquitectónico AutoCAD: `____________________` [9]
4. Firmware UEFI de la placa base ASUS: `____________________` [1]
5. Navegador web Google Chrome / Mozilla Firefox: `____________________` [9]

<details>
<summary><b>Ver Solución Ejercicio 3.2</b></summary>

1. **Ubuntu Linux**: *Software de Base (Sistema Operativo)* [1].
2. **Driver NVIDIA**: *Software de Base (Controlador de dispositivo)* [1].
3. **AutoCAD**: *Software de Aplicación Vertical (Específico)* [9].
4. **Firmware UEFI**: *Software de Base (Firmware)* [1].
5. **Google Chrome / Firefox**: *Software de Aplicación Horizontal (General)* [9].
</details>

---

## 📤 Actividad para entregar en Google Classroom / Moodle

1. Completa el cuestionario y las tablas de clasificación en tu cuaderno o documento de texto [2, 3].
2. Responde al caso práctico: *"Si compras una impresora de última generación y al conectarla por USB el ordenador no la reconoce ni imprime nada, ¿qué elemento lógico de software de base falta por instalar y qué función realiza?"* [1]
3. Adjunta el archivo resuelto en formato PDF en la tarea habilitada de la plataforma [3].
