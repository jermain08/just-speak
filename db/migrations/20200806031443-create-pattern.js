'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patterns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ordinalNumber: {
        allowNull: false,
        field: 'ordinal_number',
        unique: true,
        type: Sequelize.INTEGER,
      },
      english: {
        allowNull: false,
        type: Sequelize.STRING
      },
      vietnamese: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Patterns');
  }
};