# front-text
Sitio web hecho con ReactJS + Redux + Webapp + Bootstrap. 

Muestra un listado de palabras revertidas, se requiere del servicio [API-TEXT](https://github.com/felifranco/api-text) para funcionar correctamente.

Se ha configurado de tal forma en que sólo es necesario tener docker y sus herramientas instaladas en el equipo para poder ejecutarlo, se utiliza la imagen [NodeJS v12](https://github.com/nodejs/docker-node/blob/31246f5f779cafa0930a1db04bd00d875d6a940d/12/stretch/Dockerfile) para correr el proyecto.

## Variables de entorno
Se utiliza el paquete [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack) para manejar las variables de entorno, para este proyecto se tiene configurada únicamente la variable **API_URL** con la ruta de [API-TEXT](https://github.com/felifranco/api-text).

![dotenv](/docu/dotenv.png)

## Docker Compose
Luego de descargar éste repositorio y estar dentro de la carpeta del proyecto se puede ejecutar el comando 
```
sudo docker-compose up -d && sudo docker-compose logs -f web
```
Comandos:
* **up**: Creamos e iniciamos los contenedores
* **logs**: Muestra la salida de consola del contenedor recién creado.

La última salida de consola que se visualizará es el resultado de [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server):

![Salida de consola](/docu/webpack-log.png)

**IMPORTANTE**: El recurso estará disponible en [http://localhost:3000/](http://localhost:3000/) o [http://0.0.0.0:3000/](http://0.0.0.0:3000/). Si se desean cambiar estos valores se deben editar los archivos *webpack.config.js* y *docker-compose.yml*.

![principal](/docu/principal.png)

## Scripts configurados
El proyecto tiene configurado dos scripts:
1. **npm build**: Construye la salida del webpack.
2. **npm start**: Permite ejecutar el servicio.