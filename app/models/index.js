const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.config.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.config.pool.max,
    min: dbConfig.config.pool.min,
    acquire: dbConfig.config.pool.acquire,
    idle: dbConfig.config.pool.idle
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.passengers = require("./passenger.model.js")(sequelize, Sequelize);

module.exports = db;