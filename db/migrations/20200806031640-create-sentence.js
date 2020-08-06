'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sentences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vietnamese: {
        allowNull: false,
        type: Sequelize.STRING
      },
      english: {
        allowNull: false,
        type: Sequelize.STRING
      },
      patternId: {
        type: Sequelize.INTEGER,
        field: 'pattern_id',
        references: {
          model: 'Patterns',
          key: 'id',
        },
      },
      audioUrl: {
        field: 'audio_url',
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sentences');
  }
};