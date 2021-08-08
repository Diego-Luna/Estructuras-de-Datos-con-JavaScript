# Estructuras-de-Datos-con-JavaScript

## 🤔 ¿Qué son las estructuras de datos?

Estructuras de datos son colecciones de valores, las relaciones entre ellos y las funciones u operaciones que se pueden aplicar a los datos.

Nos ayudan a
* Solucionar problemas
* Guardar datos
* Estructurar datos

### 👕 Hablemos de ropa
* Nos pueden dar un poco ordenada o desordenada.
* Nuestra tarea seria ordenarla.
* Trabajar con estructuras de datos.
  * Nos ayuda a guardar muchas cosas entre ellas información.

* Si no la ordenamos de una manera correcta y ordenada, pero si el ropero si se puede cerrar solemos decir que nuestra tarea está terminada.
* Pero si llega alguien y pedimos que nos ayude a sacar una prenda en específico, le llegara a costar sacarla al igual que a ti.
* Es ahi donde encontramos otros modelos para ordenarlos.
  * Por colores
  * Utilidad
  * Formas

* Es ahi donde podemos observar que tenemos mayor espacio libre para nuestra tarea
* Es ahi donde podemos usar este modelo para nuestro código y empezar a hablar de estructuras de datos

### 📚 Estructuras de datos

* Existen diferentes formas para guardar información
* Nos ayudan a resolver problemas en especifico
* No todas son buenas para todos los casos
* JavaScript de por si no tiene algunas estructuras de datos construidas ⇒ Nosotros debemos construirlas

Las estructuras de datos son aquellas que nos permiten optimizar el espacio y el orden en que almacenamos la información, nos ayudan en problemas específicos y algunos lenguajes tienen estructuras de datos ya definidas por el lenguaje en si mientras en otros lenguajes como JavaScript es necesario definirlas.

## 🧠 Memoria y cómo se guardan los datos

Memory Slot espacio donde guardamos información en bits

* Dependiendo del lenguaje la forma de guardar los datos puede llegar a ser diferente en este caso analizaremos el lenguaje JavaScript
* La memoria se puede representar como una tabla la cual cada espacio se llama Memory Slot
* En un memory Slot podemos guardar un byte [8 bits]
* Cuando se guarda la información, se lo hace de forma aleatoria
* Se sabe dónde está cada cosa por la dirección [address]
* La computadora busca los bytes necesarios para guardar la información
* El address sera la “punta” de un cuadro de la tabla donde encontraremos la información que solicitamos

La información se guarda en la memoria la cual contiene memory slots en cada uno llega a guardar un byte, la información lo hace de una manera aleatoria por lo cual se identifica a través de un address

## ✅ Arrays

Array es una colección de información.

Arrays estáticos son aquellos que se quedaran fijos debido a que definimos cuantos espacios tendremos, es decir que le diremos a la maquina cuantos slots deberá usar.

Arrays dinámicos son aquellos que podemos mutar.

* Los arrays son como una lista con indices numerales consecutivas.
* Tambien son conocidas como listas.
* Tenemos diferentes métodos construidos por el lenguaje.
  * Push ⇒ Agregar un elemento al final del array
  * Pop ⇒ Borra el último elemento
  * Unshift ⇒ Agrega un elemento al inicio del array
  * Shift ⇒ Borra el primer elemento
  * Splice ⇒ Agrega un elemento en una parte del array

* Si nosotros agregamos un elemento al inicio debe haber ciertas operaciones que deben suceder.
* Existen dos formas de arrays
  * Estáticos ⇒ Definimos cuantos slots exactamente vamos a usar
  * Dinámicos ⇒ JS Maneja de forma por defecto

* La computadora sabe de dónde a donde esta cada información o en este caso el numero exactamente
* La computadora de inicio es darle una cantidad de slots considerable
* Si es que pasara el límite buscara más espacio en memoria del que está pidiendo la lista
  * Para eso copiara la información y la trasladara a donde encuentre conveniente
  * Los espacios anteriores los libera

Existen dos tipos de listas, los estáticos que estas cuentan con slots de memoria definidos por nosotros y los dinámicos, estos se usan por defecto JavaScript, requieren una considerable cantidad de memoria la cual puede crecer a medida que lo necesitemos

## 🗒️ Strings
String inmutables se refiere a que una vez definido no lo podemos cambiar

De por si no es una estructura de datos, pero la forma en la que se guarda en memoria es como una estructura de datos
Tenemos un string en una variable

```javascript
const saludo = "Hola";
```

Cabe recalcar que en muchos lenguajes incluyendo JavaScript, los strings son inmutables
* para generar un cambio en el string sera necesario:
  * Tomar todos los datos de los memory slots
  * Buscar nuevos memory slots
  * Pegar en los memory slots necesarios con los nuevos elementos
* Hacer todos estos pasos puede llegar a ser un problema generando un problema de computo

Cuando generamos strings con JavaScript casi nunca tenemos modificarlos
Los strings se guardan como un arreglo

Teniendo acceso a cada letra de la cadena definida

Los strings son inmutables es decir que una vez definidos no podemos cambiar “letra por letra” si no que tendremos que tomar todos los items y comenzar a realizar la operación deseada también significa mayor esfuerzo de computo


## 🗂️ Hash Tables

Las hash tables se parecen a los objetos porque podemos guardar valores por llave, valor. Pero su principal diferencia es que genera un hash para cada llave valor. El único problema es que se puede generar un mismo hash colisionando con el anterior



hash function es poder asegurar generar un hash que se convierte en el address para acceder al valor

* En JavaScript se pueden conocer como objetos o Maps [Aun les falta unos pasos para concretarlo]
* En otros lenguajes como python son conocidos como Diccionarios [Python], Maps [Java, Go], Hashes [Ruby]

### Hash Tables vs Objetos

* Las hash tables son similares a los objetos porque tienen el concepto de guardar valores key, value
* La diferencia es que tienen un paso extra que se convierte en caja negra la cual es una hash function
* Funciona de una manera similar a los arreglos debido a que accedemos a través de un numero

### Métodos

* Insert ⇒ Insertar un elemento en la tabla
* Search ⇒ Buscar un elemento por key
* Delete ⇒ Borrar un elemento

### Colisión de Hash Table

* En ocasiones podemos pasar un key distintito puede generar el mismo hash
* Colisionando con el anterior
* Esto podrá depender de la cantidad de espacio disponible

