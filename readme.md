# Clase demo - CODERHOUSE - AUTENTICACION Y AUTORIZACION

## Requicitos e instalación

> **Tener instalado NodeJs**

> **Tener instalado en el sistema MongoDb o docker-compose**
- Si Se tiene instalado MongoDb en el sistema no se requiere docker
- Si no tiene, puede instalarlo o bien optar por la opcion de crear un contenedor para la base de datos
    - Para este punto debe tener instalado Docker en su máquina con servicios activos.

> **Recursos útiles**

- https://nodejs.org/en/
- https://docs.docker.com/compose/
- https://www.mongodb.com/languages/mongodb-with-nodejs

> **Tener Instalado Git para clonar el repositorio**

> **INSTALACIÓN**

- Clonar el repositorio
- En root del proyecto ejecutar ``npm install``
- Recomendado pero no necesario ``npm install -g newman`` & ``npm install newman-reporter-htmlextra``
- Configurar variables de entorno en: ``src/server/enviroments/.env``
- BASE DE DATOS: Puede utilizar el siguiente comando sobre el root del proyecto para crear dos contenedores de docker y tener acceso a base de datos de MongoDB y express-mongo  a traves del archivo docker-compose.yml
    - ``docker-compose up -d``

> **EJECUCIÓN**
- Para inicializar una vez configurado e instalado ``npm run start:local``

> **DURANTE LA EJECUCIÓN**
- Durante la misma se ejecutaran casos de testing sobre newman teniendo como target json de postman. ver en src/specs
- Se podrá ver cada vez que se inicializa el servicio como corren los casos de testing.
- Se genera un reporte html durante el proceso de testing que puede ser visto en ``http://localhost:PORT/api/test_report`` (Reemplazar PORT por el correspondiente puerto.)

## HOMEWORK

- Crear esquema de sesión que almacene la siguiente información
    - id de usuario
    - id role de usuario
    - fecha de creacion
    - id de sesión
- Crear repositorio del esquema para poder trabajar con el mismo
- Modificar endpoint de login, para almacenar los ids de sesión en lugar de información directa de del usuario dentro del token.
- Modificar middleware de autenticación para verificar la sesión y guardar en context datos del usuario que permitan controlar procesos de autorización
- Agregar endpoint Logout que aplique alguna técnica de inactivación de token. Este endpoint debe estar protegido, pero accesible para cualquier role.
- Agregar endpoint de DELETE task, que puede ser accedido sólo por el administrador.





