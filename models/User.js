const { UserDataType } = require('../Constants');
const { sequelize, DataTypes } = require('../config/db');

// const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    email: { //
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Must be a valid email address",
            }
        },
    },
    password: DataTypes.STRING,
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    // node_id: {
    //     type: DataTypes.INTEGER,
    //     unique: true,
    //     allowNull: false
    // },
    status: {
        type: DataTypes.STRING,
        validate: {
            isIn: [['active', 'inactive', 'blocked']]
        },
        allowNull: false
    },
    pack_expiry: {
        type: DataTypes.DATEONLY,
        defaultValue: function () {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 30); // Add 30 days
            return currentDate.toISOString().split('T')[0]; // Return in 'YYYY-MM-DD' format
        },
        allowNull: false
    },
    number_of_renew: {
        type: DataTypes.INTEGER,
        defaultValule: 0,
    },
    number_of_referral: {
        type: DataTypes.INTEGER,
        defaultValule: '0',
    },
    name: {
        type: DataTypes.STRING,
    },
    phonenumber: {
        type: DataTypes.BIGINT,
        unique: true
    },
    hashcode: {
        type: DataTypes.STRING,
        unique: true,
    },
    role: {
        type: DataTypes.ENUM(Object.values(UserDataType)),
        allowNull: false,
        validate: {
            isIn: {
                args: [Object.values(UserDataType)],
                msg: `Only Allowed Values Are: ${Object.values(UserDataType)} `,
            },
        },
    },
    type: {
        type: DataTypes.ENUM,
        values: ["main", "renewed"]
    }
});



// User.hasMany(Transaction, {
//     as: 'user_id'
// })
// User.hasOne(Wallet, {
//     as: 'user_id'
// })
// User.hasMany(Referral, {
//     a: 'referal_userid'
// })
// User.hasMany(Renewal, {
//     as: 'main_id'
// })
// User.hasOne(Income_report, {
//     as: 'user_id'
// })

// User.sync({ alter: true });
module.exports = { User };