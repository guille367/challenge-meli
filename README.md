# Challenge MeLi

## Requisitos

Docker :whale2:

- Docker 19
- docker-compose 1.26

O bien sin docker

- node >= 12

## Definición de variables de entorno

Copiar los archivos .env.dist definiendo los respectivos valores

`$ cp /front/src/.env.dist src/.env`

`$ cp /api/src/.env.dist src/.env`

### Front:

- PORT=8080 (puerto de ejemplo)
- REACT_APP_API_MELI_URL=http://localhost[:API_PORT]/api (en caso de buildear prod, apuntar a http://localhost/api)
- REACT_APP_AUTHOR_NAME='Ponce Andrés' [Opcional, configura valor que se enviará como header para el request con author]
- REACT_APP_AUTHOR_LASTNAME=Guillermo [Opcional, configura valor que se enviará como header para el request con author]

### Back:

- API_PORT=3000 [Opcional] Si no se configura, la api levanta en el puerto 3000
- NODE_ENV=(production|development)

## Docker

### PROD

`$ docker-compose -f docker-compose.prod.yml up --build`

El compose productivo cuenta de 2 contenedores:

- api - api compilada escuchando en el puerto configurado por variable de entorno
- server - nginx sirviendo los archivos estáticos del build del front y como proxy reverso para la api

### DEV

`$ docker-compose up --build`

compose compuesto de 2 imágenes:

- api-meli - api en modo dev, corriendo con nodemon y ndb habilitado en el puerto 9229
- front-meli - front en modo dev

## Tests

Para correr los tests, correr el siguiente comando en para los diferentes proyectos ubicados en /front y /back luego de instalar las dependencias

`$ npm i`
`$ npm run test`
