require('dotenv').config();
module.exports =
  {
  "local": {
    "username": process.env.DB_USER || 'postgres',
    "password": process.env.DB_PASSWORD || null,
    "database": process.env.DB_NAME || 'test_full_stack',
    "host": process.env.DB_HOST ||'localhost',
    "dialect": "postgres"
  },
  "development": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "ssl": true,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "ssl": true,
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
    }
  }
}
