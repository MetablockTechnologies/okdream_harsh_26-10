const { Sequelize, DataTypes, Op } = require('sequelize');
const logger = require('../logger');
require('dotenv').config();

const sequelize = new Sequelize(
    "mlmapp2",
    "admin",
    "Kush123#", {
    host: "metablockdev.cwuz0hlkkrcq.ap-south-1.rds.amazonaws.com",
    port: 3306,
    dialect: 'mysql',
    // logging:false
    logging: (msg) => logger.debug(msg),
    // dialectOptions: {
    //   ssl: "Amazon RDS",
    // },
})
// Check database connection
async function checkDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        checkDatabaseConnection()
    }
}

// Call the function to check the database connection
checkDatabaseConnection();


module.exports = { sequelize, DataTypes,Op };