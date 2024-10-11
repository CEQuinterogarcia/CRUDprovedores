const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const usuarios = sequelize.define('usuarios', {
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  rol: { type: DataTypes.STRING, allowNull: false, defaultValue: 'user' }, // Default to 'user'
 
});

module.exports = usuarios;