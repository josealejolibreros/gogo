require('dotenv').config()
module.exports = {
    url: process.env.DEV_DATABASE_URL,
    HOST: process.env.DEV_DATABASE_HOST,
    USER: process.env.DEV_DATABASE_USER,
    PASSWORD: process.env.DEV_DATABASE_PASSWORD,
    DB: process.env.DEV_DATABASE_NAME,
    config: {
        dialect: 'postgres',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
    }
    
  };