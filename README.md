# ACADEMIC REST API

José Miguel Ortiz C. - Programación III - Universidad de Caldas

## Variables de entorno

Para el correcto funcionamiento del proyecto se requieren las siguientes variables de entorno, ya que el paquete < dotenv > está agregado a las dependencias, entonces puede agregarlas en un archivo .env con el siguiente contenido:

```bash
SERVER_PORT=

MONGO_HOST=
MONGO_USER=
MONGO_PASSWORD=
MONGO_DB_NAME=

CRYPTO_JS_SECRET_KEY=
JWT_SECRET_KEY=

```

Si desea cambiar el tiempo de sesion por defecto el cual es de 24h, agregue el valor SESSION_TIME_IN_SECONDS en el archivo .env

## Iniciar el proyecto

```bash
npm run dev
```

## Cambios realizados al proyecto original

- Se agregan las dependencias **< dotenv | cookie-parser >** , la primera para hacer uso de variables de entorno desde un .env y la segunda para el funcionamiento de la interfaz de administración.

- Se elimina la dependencia **< json-parser >** y es reemplazada por el middleware nativo de express **< express.json() >**.

- Se cambio la estructura del proyecto, el core de la API se encuentra en la carpeta **< apiServices >** donde cada servicio cuenta con su respectiva carpeta en la que se encuentran **< routes | schema | dto | controller >**.

- Se añade una interfaz, que permite utilizar la API sin necesidad de un cliente REST externo.

- La carpeta helpers es reemplazada por las carpetas utils y services para una mejor organización.

- Se crean las rutas y controladores de los servicios **< Group >** y **< Student_Group >**.

## Uso

- Puede hacer uso de la API por medio de su propia interfaz de administracion, para hacerlo debera iniciar el proyecto y luego dirigirse al la direccion **http://localhost:SERVER_PORT** , le mostrará un formulario de **< Login >** , si es la primera vez que lo inicia, haga click en el link **< create_user >** y registre un nuevo usuario (este funcionara como administrador), luego será redireccionado a la ventana de **Login** y podrá iniciar sesión con el usuario creado, luego de eso automaticamente será redireccionado a la ventana de administración.
  **En caso de que las peticiones le devuelvan error por token invalido, simplemente reinicie la pagina o haga click en el boton logout y vuelva a iniciar sesion , esto se debe a que su sesion ha expirado, la sesion por defecto dura 24h.**

- Tambien puede hacer uso de ella mediante un cliente **REST < Postman | Insomnia | Postwoman | etc >** , para ello primero debera hacer una peticion **POST** a la ruta **< /signUp/admin >** con los datos **< name , lastname, username , password >** , luego una peticion **POST** a la ruta **< /login >** con los datos **< username , password >** registrados anteriormente, esto le devolverá un **< access-token >** el cual deberá enviar como encabezado **< "access-token" : token >** para cualquier peticion a los servicios de la API.

## Derechos de autor

Proyecto tomado de [Jeferson Arango Lopez - Canal de youtube](https://www.youtube.com/playlist?list=PL53ubkvK7-NV2z3SpYPqQJT9EtTgBwD4H)

## License

[MIT](https://choosealicense.com/licenses/mit/)
