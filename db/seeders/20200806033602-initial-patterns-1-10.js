'use strict';
const {Op} = require('sequelize');

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

    await queryInterface.bulkInsert('Patterns', [{
      id: 1,
      ordinal_number: 1,
      english: 'S + have/has something + to + V',
      vietnamese: 'Có 1 vài thứ cần phải làm.',
    }, {
      id: 2,
      ordinal_number: 2,
      english: 'S + have/has nothing + to do with + object',
      vietnamese: 'Không liên quan gì đến…',
    }, {
      id: 3,
      ordinal_number: 3,
      english: 'How + to be + S + doing?',
      vietnamese: 'Ai đó có khỏe không?',
    }, {
      id: 4,
      ordinal_number: 4,
      english: 'How + was + N?',
      vietnamese: 'Cái gì đó thế nào rồi? (đã diễn ra rồi)',
    }, {
      id: 5,
      ordinal_number: 5,
      english: 'Are you serious about doing something?',
      vietnamese: 'Có thật là bạn sẽ làm điều đó không?',
    }, {
      id: 6,
      ordinal_number: 6,
      english: 'Have you ever been to + N?',
      vietnamese: 'Bạn đã từng đến đó chưa?',
    }, {
      id: 7,
      ordinal_number: 7,
      english: 'I’ll show you the way to + V',
      vietnamese: 'Tôi sẽ chỉ cho bạn cách làm gì đó',
    }, {
      id: 8,
      ordinal_number: 8,
      english: 'Is it possible to + V?',
      vietnamese: 'Có thể làm việc gì đó không?',
    }, {
      id: 9,
      ordinal_number: 9,
      english: 'S + to be supposed to + V.',
      vietnamese: 'Cần phải làm gì đó.',
    }, {
      id: 10,
      ordinal_number: 10,
      english: 'S + to be getting used to + V-ing.',
      vietnamese: 'Dần quen với việc gì đó.',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Patterns', {
      ordinal_number: {
        [Op.gte]: 1,
        [Op.lte]: 10,
      },
    }, {});
  },
};
