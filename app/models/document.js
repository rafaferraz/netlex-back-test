const Sequelize = require("sequelize");
const config = require("../../config/database");
const sequelize = new Sequelize(config);
const User = require("./user");

const Document = sequelize.define("Documents", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = Document;
