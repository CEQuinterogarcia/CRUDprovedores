const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.NAME, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'postgres',
  port: process.env.PORTDB,
  logging: false
});

const db_connect = async () => {
    try {
      await sequelize.authenticate();
      console.log('connected');
    } catch (error) {
      console.error('Unable to connect:', error);
      process.exit(1);
    }
  };
  
  module.exports = { sequelize, db_connect };