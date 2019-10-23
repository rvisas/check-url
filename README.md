# rvisa@mdlinks
![Build Status](https://img.shields.io/badge/nodeJs-100%25-green) ![Coverage Status](https://img.shields.io/badge/coverage-100%25-magenta) ![npm dependents](https://img.shields.io/badge/dependencias-5-pink)

Md-links es una librería que brinda estadísticas sobre los links que se encuentren dentro de todos los archivos .md de una ruta dada.
- [Diagrama de flujo del proyecto](https://github.com/ayauri29/LIM010-fe-md-links/blob/master/img/Diagrama%20de%20flujo.png).
- [Planificación del proyecto](https://github.com/ayauri29/LIM010-fe-md-links/projects/1).

### Guía de uso e instalación de la librería

### Instalación

Instale rvisa@mdlinks desde npm.

```bash
npm i @rvisa/md-links
```

### Uso

#### API `mdLinks(path, opts)`

La función tiene 2 parámetros:
- `Path`: Ruta absoluta o relativa al archivo o directorio.
- `Opts`: Un objeto con las siguientes propiedades:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.

El valor de retorno es una promesa (`Promise`) que resuelve un arreglo de objetos, donde cada objeto representa un link y contiene las siguientes propiedades:

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `file`: Ruta del archivo donde se encontró el link.

##### Ejemplo

Importe ayauri29@mdlinks desde su proyecto.
```js
const fn = require('ayauri29@mdlinks');
```

Para validación de los links:
```js
mdLinks.mdLinks('src', {validate: true}).then((data) => console.log(data));
```
![image](https://user-images.githubusercontent.com/33959688/65807158-bf073800-e152-11e9-8877-9b888e662a48.png)

Para validate false:
```js
const mdLinks = require('@ayauri29/md-links');
mdLinks.mdLinks('src', {validate: false}).then((data) => console.log(data));
```
![image](https://user-images.githubusercontent.com/33959688/65807683-53729a00-e155-11e9-8336-2232c0476e2a.png)

#### CLI

##### Uso de comandos

```bash
md-links <path-to-file> [options]
```

- El ejecutable implementa `--validate`.

![image](https://user-images.githubusercontent.com/33959688/65807654-1c03ed80-e155-11e9-8bf9-851bb8db4410.png)

- El ejecutable implementa `--stats`.

<p align="center">
  <img src="https://user-images.githubusercontent.com/33959688/65807708-6f763b80-e155-11e9-909a-2c249207ac08.png"/>
</p>

- El ejecutable implementa `--validate` y `--stats` juntos.

<p align="center">
  <img src="https://user-images.githubusercontent.com/33959688/65807773-cb40c480-e155-11e9-9eb7-587821c3b1ff.png"/>
</p>

- El ejecutable no implementa ninguna opción.

<p align="center">
  <img src="https://user-images.githubusercontent.com/33959688/65807806-fdeabd00-e155-11e9-9922-b1de96ff8261.png"/>
</p>

- Para ayuda puede ejecutar el comando `md-links --help`
<p align="center">
  <img src="https://user-images.githubusercontent.com/33959688/65807847-35f20000-e156-11e9-9be8-a77e6e713724.png"/>
</p>

***
#### Objetivos de aprendizaje

##### Objetivos de aprendizaje pendientes
- [x] Uso de callbacks

##### Javascript
- [x] Consumo de Promesas
- [x] Creacion de Promesas
- [x] Modulos de Js
- [x] Recursión

### Node
- [x] Sistema de archivos
- [x] package.json
- [x] crear modules
- [x] Instalar y usar modules
- [x] npm scripts
- [x] CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing
- [x] Testeo de tus funciones
- [x] Testeo asíncrono
- [x] Uso de librerias de Mock
- [x] Mocks manuales
- [x] Testeo para multiples Sistemas Operativos

### Git y Github
- [x] Organización en Github

### Buenas prácticas de desarrollo
- [ ] Modularización
- [ ] Nomenclatura / Semántica
- [ ] Linting

***

### Referencias

- [learnyounode](https://github.com/workshopper/learnyounode)
- [how-to-npm](https://github.com/workshopper/how-to-npm)
- [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
- [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
- [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
- [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
- [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
- [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
- [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
- [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
- [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
- [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
- [Asíncronía en js](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
- [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
- [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
- [Path](https://nodejs.org/api/path.html)
- [Promise](https://javascript.info/promise-basics)
- [Comprendiendo Promesas en Js](https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1)
- [Pill de recursión - video](https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s)