## Functions

<dl>
<dt><a href="#GET">GET(representa)</a> ⇒ <code>body</code> | <code>status</code> | <code>type</code></dt>
<dd><p>Esta función define el método GET.
Devuelve una lista de archivos al leer un directorio y 
devuelve el contenido del archivo al leer un archivo normal.</p>
</dd>
<dt><a href="#DELETE">DELETE(representa)</a> ⇒ <code>status</code></dt>
<dd><p>Esta función define el método DELETE.
Elimina el archivo o directorio especificado.</p>
</dd>
<dt><a href="#PUT">PUT(representa)</a> ⇒ <code>body</code> | <code>status</code></dt>
<dd><p>Esta función define el método PUT.
Crea un nuevo archivo o lo reemplaza con los datos de la petición.</p>
</dd>
<dt><a href="#MKCOL">MKCOL(representa)</a> ⇒ <code>body</code> | <code>status</code></dt>
<dd><p>Esta función define el método MKCOL.
Crea un nuevo directorio si no existe con los datos de la petición.</p>
</dd>
</dl>

<a name="GET"></a>

## GET(representa) ⇒ <code>body</code> \| <code>status</code> \| <code>type</code>
Esta función define el método GET.
Devuelve una lista de archivos al leer un directorio y 
devuelve el contenido del archivo al leer un archivo normal.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| representa | <code>request</code> | al objeto request hecho por el cliente. |

<a name="DELETE"></a>

## DELETE(representa) ⇒ <code>status</code>
Esta función define el método DELETE.
Elimina el archivo o directorio especificado.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| representa | <code>request</code> | al objeto request hecho por el cliente. |

<a name="PUT"></a>

## PUT(representa) ⇒ <code>body</code> \| <code>status</code>
Esta función define el método PUT.
Crea un nuevo archivo o lo reemplaza con los datos de la petición.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| representa | <code>request</code> | al objeto request hecho por el cliente. |

<a name="MKCOL"></a>

## MKCOL(representa) ⇒ <code>body</code> \| <code>status</code>
Esta función define el método MKCOL.
Crea un nuevo directorio si no existe con los datos de la petición.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| representa | <code>request</code> | al objeto request hecho por el cliente. |

