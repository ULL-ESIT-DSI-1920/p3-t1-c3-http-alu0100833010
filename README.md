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

En un entorno síncrono, se hacen las solicitudes una tras otra. El inconveniente, es que la segunda solicitud se iniciará solo cuando la primera haya finalizado. Una posible solución para esto es iniciar hilos de control adicionales. Un segundo subproceso podría iniciar la segunda solicitud y luego ambos subprocesos esperan a que vuelvan los resultados para después sincronizarse y combinar ambos resultados. En el método síncrono, el tiempo que la E/S tarda es parte de la línea de tiempo para un hilo de control.

En el método asíncrono, se provoca una división en la línea de tiempo. El subproceso que inició la E/S continúa ejecutándose y la E/S se realiza junto a ella y finaliza llamando a una callback.

Una diferencia entre ambos métodos es que esperar a que finalice la E/S está **IMPLÍCITO** en el modelo _síncrono_, mientras que es **EXPLÍCITO** (bajo nuestro control) en el _asíncrono_. En la asincronía, esto a veces puede ocasionar que los programas sean más incómodos y los callbacks agregan bastante ruido e indirección. Sin embargo, para Javascript, la asincronía es una buena opción por su simplicidad.

### Comando Node

Node es un programa que se instala junto a Node.js en el sistema y sirve para ejecutar archivos Javascript.

El método _console.log_ en Node imprime un fragmento de texto en la secuencia de salida estándar del proceso.

Si ejecutamos **node** por si solo, proporciona un mensaje en el que poder escribir código Javascript e inmediatamente ver el resultado.

La variable _process_, al igual que _console_, está disponible globalmente en Node. Proporciona varias formas de inspeccionar y manipular el programa actual.

El método _process.exit()_ finaliza el proceso y se le puede dar un código de estado de salida:
* 0: Si se completó correctamente.
* Cualquier otro valor: Si se encontró un error.

Para encontrar los argumentos de la línea de comandos dados al script, tenemos el método _process.argv_ que es una matriz de cadenas. Este método incluye el comando **node** y el comando del script, por tanto, los argumentos reales empiezan en el índice 2.

```
$ node showargv.js one --and two
```

### Módulos

Node pone poca funcionalidad en el ámbito global a parte de _process_ y _console_, por ello, para acceder a otras funciones tenemos que acceder al sistema de **módulos**.

El sistema de módulos **commonJS** está basado en la función _require_. Este sistema está integrado en Node y se utiliza para cargar cualquier cosa, desde módulos incorporados a bibliotecas a archivos que forman parte del sistema.

Al llamar a _require_, Node resuelve la cadena dada en un archivo para cargar. Cuando se da una cadena que no es una ruta absoluta o relativa, se refiere a un **módulo** incorporado o instalado en el directorio _node_modules_, como por ejemplo, el módulo _fs_ (módulo del sistema de archivos).

```
module.exports = function(string) {
  return string.split("").map(function(ch) {
    return String.fromCharCode(ch.charCodeAt(0) + 5);
  }).join("");
};
```
