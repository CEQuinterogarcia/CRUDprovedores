const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    const proveedores =sequelize.define('Proveedores', {
      NIT: {
        type: DataTypes.STRING,
        allowNull: false,        
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cedula: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipoproveedor: {
        type: DataTypes.STRING,
        values: ['Nacional', 'Internacional'],
        allowNull: false,
      },
      tipopersona: {
        type: DataTypes.STRING,
        values: ['Natural', 'Juridica'],
        allowNull: false,
      },
      beneficiarios: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      datosbancarios: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'Pendiente de Validación',       
      },
    });
    return proveedores; // Retornamos el modelo
  };