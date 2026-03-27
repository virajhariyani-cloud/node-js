const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', '6353', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
