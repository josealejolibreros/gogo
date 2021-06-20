const { passengers } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Passenger = sequelize.define("passenger", {
        
        document_type:{
            type: Sequelize.STRING,
        },
        document_number:{
            type: Sequelize.STRING,
        },
        first_name:{
            type: Sequelize.STRING,
        },
        last_name:{
            type: Sequelize.STRING,
        },
        phone:{
            type: Sequelize.STRING,
        },
        email:{
            type: Sequelize.STRING(1000),
        }
    });
    return Passenger;
};