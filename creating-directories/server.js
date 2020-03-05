const { createServer } = require('http');

const methods = Object.create(null);

createServer((request, response) => {
  let handler = methods[request.method] || notAllowed;
  console.log(`method= ${request.method} url=${request.url}`);
  handler(request)
    .catch(error => {
      if (error.status != null) return error;
      return { body: String(error), status: 500 };
    })
    .then(({ body, status = 200, type = 'text/plain' }) => {
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.setHeader('Access-Control-Allow-Methods', 'PUT, GET, OPTIONS, DELETE, MKCOL');
      response.writeHead(status, { 'Content-Type': type });
      if (body && body.pipe) body.pipe(response);
      else response.end(body);
    });
}).listen(8000);

async function notAllowed(request) {
  return {
    status: 405,
    body: `Method ${request.method} not allowed.`
  };
}

const { parse } = require('url');
const { resolve, sep } = require('path');

const baseDirectory = process.cwd();

function urlPath(url) {
  let { pathname } = parse(url);
  let path = resolve(decodeURIComponent(pathname).slice(1));
  if (path != baseDirectory && !path.startsWith(baseDirectory + sep)) {
    throw { status: 403, body: 'Forbidden' };
  }
  return path;
}

const { createReadStream } = require('fs');
const { stat, readdir, mkdir } = require('fs').promises;
// Hacemos un require a la versión con promesas de la librería
// filesystem (fs) para acceder al método mkdir
const mime = require('mime');


/** 
* Esta función define el método GET.
* Devuelve una lista de archivos al leer un directorio y 
* devuelve el contenido del archivo al leer un archivo normal. 
* @param { request } representa al objeto request hecho por el cliente. 
* @returns { body }  
* @returns { status }  
* @returns { type }  
*/ 
methods.GET = async function(request) {
  let path = urlPath(request.url);
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != 'ENOENT') throw error;
    else return { status: 404, body: 'File not found' };
  }
  if (stats.isDirectory()) {
    return { body: (await readdir(path)).join('\n') };
  } else {
    return { body: createReadStream(path), type: mime.getType(path) };
  }
};

const { rmdir, unlink } = require('fs').promises;

/** 
* Esta función define el método DELETE.
* Elimina el archivo o directorio especificado. 
* @param { request } representa al objeto request hecho por el cliente. 
* @returns { status }      
*/ 
methods.DELETE = async function(request) {
  let path = urlPath(request.url);
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != 'ENOENT') throw error;
    else return { status: 204 };
  }
  if (stats.isDirectory()) await rmdir(path);
  else await unlink(path);
  return { status: 204 };
};

const { createWriteStream } = require('fs');

function pipeStream(from, to) {
  return new Promise((resolve, reject) => {
    from.on('error', reject);
    to.on('error', reject);
    to.on('finish', resolve);
    from.pipe(to);
  });
}

/** 
* Esta función define el método PUT.
* Crea un nuevo archivo o lo reemplaza con los datos de la petición.
* @param { request } representa al objeto request hecho por el cliente. 
* @returns { body }  
* @returns { status }    
*/ 
methods.PUT = async function(request) {
  let path = urlPath(request.url);
  await pipeStream(request, createWriteStream(path));
  return { status: 200, body: path };
};

// Ejercicio Directory Creation

/** 
* Esta función define el método MKCOL.
* Crea un nuevo directorio si no existe con los datos de la petición.
* @param { request } representa al objeto request hecho por el cliente. 
* @returns { body }  
* @returns { status }    
*/  
methods.MKCOL = async function(request) { // Función asíncrona que nos devuelve una promesa.
  // La función toma como parámetro request que representa al objeto request hecho por el cliente.
  let path = urlPath(request.url);
  // La función urlPath adquiere como entrada la url del request y devuelve el camino al fichero que 
  // hay que seguir y que en este caso es el directorio que queremos crear.
  let stats;
  try { // Si existe no se produce error y el catch no se ejecuta.
    stats = await stat(path);
    // Llamamos al método stat para comprobar si el directorio a crear ya existe.
    // Hacemos await porque se trata de una función asíncrona.
  } catch (error) { // Si no existe, comprobamos que el código que se produce es "ENOENT".
    if (error.code != "ENOENT") throw error;
    await mkdir(path);
    return {status: 204};
  }
  if (stats.isDirectory()) return {status: 204};
  else return {status: 400, body: "Not a directory"};
};

methods.OPTIONS = async function(request) {
  return { status: 204 };
};