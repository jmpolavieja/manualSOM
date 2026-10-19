---
title: "1.2 Resumen: Representación de la Información"
description: "Resumen de sistemas de numeración, codificación de texto y unidades de medida de la información."
---

# 1.2 Resumen: Representación de la Información y Codificación

::: tip Nota de Coordinación Didáctica
Los contenidos detallados sobre álgebra de Boole, operaciones aritméticas binarias complejas y análisis exhaustivo de protocolos de red asociados a este bloque se desarrollan en profundidad en el módulo profesional de **Redes Locales**.
:::

Los equipos informáticos son sistemas digitales que procesan y almacenan la información en formato binario mediante dos estados eléctricos: **0** (ausencia de tensión) y **1** (presencia de tensión).

---

## 🔢 1. Sistemas de Numeración Posicionales

En un sistema posicional, el valor de cada símbolo depende de la posición que ocupa respecto a la base del sistema:

| Sistema | Base | Símbolos | Uso en Sistemas Operativos |
| :--- | :---: | :--- | :--- |
| **Decimal** | \\(10\\) | `0` al `9` | Lectura e interfaz de usuario. |
| **Binario** | \\(2\\) | `0` y `1` | Procesamiento en circuitos digitales y memoria. |
| **Hexadecimal** | \\(16\\) | `0`-`9` y `A`-`F` (\\(A=10 \dots F=15\\)) | Direcciones de memoria RAM, direcciones MAC e IPv6. |

---

## 🔄 2. Principios de Conversión entre Bases

* **Binario a Decimal**: Suma del producto de cada dígito por las potencias sucesivas de base 2 (\\(2^n\\)).
    * *Ejemplo*: 
  $$
  1101_2 = (1 \cdot 2^3) + (1 \cdot 2^2) + (0 \cdot 2^1) + (1 \cdot 2^0) = 8 + 4 + 0 + 1 = \mathbf{13_{10}}.
  $$
* **Decimal a Binario**: Divisiones sucesivas entre 2 ordenando los restos de abajo a arriba.
* **Binario a Hexadecimal**: Agrupación directa de los bits de 4 en 4 (cada 4 bits o *nibble* equivalen exactamente a 1 dígito hexadecimal, ej. `1010` = `A`).

---

## 🔤 3. Codificación de Texto

Para traducir caracteres alfabéticos y símbolos a formato binario se emplean estándares de codificación:

* **ASCII**: Estándar de 7 bits (128 caracteres) para el alfabeto inglés básico.
* **ASCII Extendido**: Estándar de 8 bits / 1 Byte (256 caracteres), que incluye caracteres regionales (`ñ`, tildes).
* **Unicode (UTF-8)**: Estándar universal multilenguaje de longitud variable (1 a 4 Bytes) que codifica más de 140.000 caracteres (símbolos asiáticos, matemáticos y emojis).

---

## 📏 4. Unidades de Medida y Ancho de Banda

### Capacidad de Almacenamiento
* **Bit (b)**: Unidad mínima de información (0) o (1).
* **Byte (B)**: Conjunto de 8 bits.

::: info Múltiplos Decimales (SI) vs. Binarios (IEC)
* **Comercial / SI (base 1000)**: 
$$
(1 \text{ KB} = 1.000 \text{ Bytes} \quad | \quad 1 \text{ MB} = 1.000 \text{ KB} \quad | \quad 1 \text{ GB} = 1.000 \text{ MB}\\).
$$
* **Informático / IEC (base 1024)**: 
$$ 
1 \text{ KiB} = 1.024 \text{ Bytes} \quad | \quad 1 \text{ MiB} = 1.024 \text{ KiB} \quad | \quad 1 \text{ GiB} = 1.024 \text{ MiB} 
$$
  :::

### Velocidad de Transmisión (Red)
* La velocidad de red se mide en **bits por segundo** (\\(bps\\), \\(Mbps\\), \\(Gbps\\)).
  * Para calcular la velocidad teórica de descarga en **Bytes por segundo** (\\(MB/s\\)), se divide la velocidad de la red entre 8:
  $$
  \frac{800 \text{ Mbps}}{8} = 100 \text{ MB/s de descarga real}\\
  $$
