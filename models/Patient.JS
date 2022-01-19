//import database
const db = require("../config/database");
//import sequelize
const Sequelize = require("sequelize");
//init DataTypes
const { DataTypes } = Sequelize;

const Patient = db.define("patients", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        in_date_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        out_date_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true
        }
    }, {
        timestamps: false
    });

module.exports = Patient;