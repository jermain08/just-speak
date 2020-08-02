'use strict';
const { Op } = require('sequelize');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Roles', [{
      id: 1,
      name: 'Admin',
    }, {
      id: 2,
      name: 'User',
    }]);
    await queryInterface.bulkInsert('Users', [{
      full_name: 'Admin',
      username: 'admin',
      password: '123123',
      role_id: 1
    }, {
      full_name: 'Luong Kien Minh',
      username: 'minhkl',
      password: '123123',
      role_id: 2,
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', {
      username: {
        [Op.in]: ['admin', 'minhkl'],
      }
    }, {});
    await queryInterface.bulkDelete('Roles', {
      id: {
        [Op.in]: [1, 2],
      }
    }, {});
  }
};
