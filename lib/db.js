const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://jill:Dakota12!@localhost/jill-stock-api', {logging: false});
module.exports = {sequelize};
