'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Proveedores', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      NIT: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cedula: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipoproveedor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipopersona: {
        type: Sequelize.STRING,
        allowNull: false
      },
      beneficiarios: {
        type: Sequelize.JSON,
        allowNull: true
      },
      datosbancarios: {
        type: Sequelize.JSON,
        allowNull: true
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Pendiente de Validación'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Proveedores');
  }
};
