# Challenge MeLi

## Requisitos

Docker :whale2:

- Docker 19
- docker-compose 1.26

O bien sin docker

- node >= 12

## Definición de variables de entorno

Copiar los archivos .env.dist definiendo los respectivos valores

`$ cp front/.env.dist front/.env`

`$ cp api/.env.dist api/.env`

### Front:

- REACT_APP_API_MELI_URL=http://localhost[:API_PORT]/api (en caso de buildear prod, apuntar a http://localhost/api)
- REACT_APP_AUTHOR_NAME='Ponce Andrés' [Opcional, configura valor que se enviará como header para el request con author]
- REACT_APP_AUTHOR_LASTNAME=Guillermo [Opcional, configura valor que se enviará como header para el request con author]

### Back:

- NODE_ENV=(production|development)

## Levantar el proyecto con Docker

### PROD

`$ docker-compose -f docker-compose.prod.yml up --build`

El compose productivo cuenta de 2 contenedores:

- api - api compilada escuchando en el puerto configurado por variable de entorno
- server - nginx sirviendo los archivos estáticos del build del front y como proxy reverso para la api

<b>De ésta forma podemos ingresar a la aplicación en http://localhost</b>

### DEV

`$ docker-compose up --build`

compose compuesto de 2 imágenes:

- api-meli - api en modo dev, corriendo con nodemon y ndb habilitado en el puerto 9229
- front-meli - front en modo dev

## Levantar el proyecto sin docker

### Front

Sobre la carpeta front

`$ npm i && npm run start`

De ésta forma la aplicación se levanta sobre http://localhost:3000

### Back

Sobre la carpeta back

`$ npm i && npm run start`

De ésta forma la aplicación se levanta sobre http://localhost:8080 y el front debería configurar su variable REACT_APP_API_MELI_URL a http://localhost:8080/api

## Tests

Para correr los tests, correr el siguiente comando en para los diferentes proyectos ubicados en /front y /back luego de instalar las dependencias

`$ npm i`

`$ npm run test`
