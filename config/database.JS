const Sequelize = require("sequelize");

const db = new Sequelize("dbcorona", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = db;