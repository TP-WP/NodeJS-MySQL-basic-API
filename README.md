npm start para iniciar servidor de api

MySQL: para crear y configurar base de datos  
mysql -u username -p userpass CREATE DATABASE testDB  
mysql -u username -p userpass testDB < ./mysql/testDB.sql

configurar .env con credenciales para su base de datos  
DB_USER = 'username' //cambiar por usuario de mysql  
DB_HOST = 'localhost'  
DB_PASSWORD = 'userpass' //cambiar por clave de usuario de mysql  
DB_NAME = 'testDB'
