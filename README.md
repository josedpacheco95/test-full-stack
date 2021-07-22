# test-full-stack

## Server setup instructions
```
  Crear un archivo .env en la carpeta server con los siguientes parametros:
  DB_USER=<Nombre-de-usuario>
  DB_PASSWORD=<contraseña-del-usuario>
  DB_NAME=<nombre-de-la-basa-de-datos>
  DB_HOST=localhost
  NODE_ENV=local
  FRONT_BASE_URL=localhost:8080/#
  Despues ejecutar los siguientes comandos en la carpeta server

  yarn o npm install

  npx sequelize-cli db:migrate
  npx sequelize-cli db:seed:all (Si se quiere obtener valores de prueba en la base de datos para testear las APIS)
  
```
## Server Local Compile

"""
  Si tienes nodemon, en la carpeta server:
    nodemon server
  En caso de no:
    node server
"""

## Project Frontend setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
En caso de querer hacer un build para el proyecto para un deployement
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
