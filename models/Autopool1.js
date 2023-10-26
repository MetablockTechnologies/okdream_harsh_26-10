const { sequelize, DataTypes } = require('../config/db');
// const sequelize = new Sequelize('sqlite::memory:');

const Autopool1 = sequelize.define('autopool1', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        // field:'referral_user_id' // to match the column name in db table
    },
    month: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
        allowNull: false,
    },
    status:{
        type:DataTypes.STRING,
        validate:{
            isIn:[['pending','distributed']]
        }
    }
});


// Autopool1.sync({ alter: true });
module.exports = { Autopool1 };