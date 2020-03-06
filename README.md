# p3-t1-c3-http-alu0100833010

_Práctica 3. Desarrollo de Sistemas Informáticos._

## Descripción de la Práctica p3-t1-c3-http.

Siguiendo el capítulo 20 Node.JS bien de la segunda edición del libro Eloquent JavaScript (callbacks) o de la tercera (promises) escriba sus propios apuntes 
con ejemplos y realice los ejercicios que se indican a continuación:

* Ejercicio Creating Directories. 
* Instale insomia o postman para usarlo como cliente de prueba.
* Genere documentación para su código usando algunas de las herramientas que aparecen en la sección recursos.
* Escriba un gulpfile con tareas usando curl para probar el comportamiento del servidor con los diferentes requests.

## Comenzando.

### Node.js

Node.js es un programa que permite aplicar Javascript fuera del navegador. 

Uno de los problemas más difíciles con los sistemas de escritura que se comunican a través de la red es la administración de E/S, es decir, lectura y escritura
de **datos** hacia y desde la red.

El método tradicional de manejar la E/S es tener una **función** como _readFile()_, que comienza a leer un archivo y solo regresa cuando lo haya leído por completo. Esto
recibe el nombre de E/S **síncrona**.

Inicialmente, Node fue hecho con el objetivo de hacer que la E/S **asíncrona** sea fácil y conveniente.

Una _interfaz asíncrona_ permite que el script continúe ejecutándose mientras hace su trabajo y llama a una **callback** mientras. Esta es la forma en la que Node.js
trabaja con sus E/S.

### Asincronía


