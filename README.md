# ACADEMIC REST API

José Miguel Ortiz C. - Programación III - Universidad de Caldas

## Variables de entorno

Para el correcto funcionamiento del proyecto se requieren las siguientes variables de entorno, ya que el paquete < dotenv > está agregado a las dependencias, entonces puede agregarlas en un archivo .env

```bash
SERVER_PORT=

MONGO_HOST=
MONGO_USER=
MONGO_PASSWORD=
MONGO_DB_NAME=

CRYPTO_JS_SECRET_KEY=
JWT_SECRET_KEY=
```

## Iniciar el proyecto

```bash
npm run dev
```

## Cambios realizados al proyecto original

Se cambio la estructura del proyecto, el core del proyecto se encuentra en la carpeta < apiServices > donde cada servicio cuenta con su respectiva carpeta en la que se encuentran < routes | schema | dto | controller >

## Uso

Para usarlo requerirá de un cliente REST < Postman | Insomnia | Postwoman > y deberá hacer un login en la ruta " /login " con un usuario y contraseña almacenados en la base de datos registrada

## Derechos de autor

Proyecto tomado de [Jeferson Arango Lopez - Canal de youtube](https://www.youtube.com/playlist?list=PL53ubkvK7-NV2z3SpYPqQJT9EtTgBwD4H)

## License

[MIT](https://choosealicense.com/licenses/mit/)
