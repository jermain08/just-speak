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
    await queryInterface.bulkInsert('Sentences', [{
      english: 'Tôi có vài việc cần nói với bạn',
      vietnamese: 'I have something to tell you',
      pattern_id: 1,
    }, {
      english: 'Con có bài cần học',
      vietnamese: 'I have lesson to study',
      pattern_id: 1,
    }, {
      english: 'Cô ấy cần nói với cậu về một điều',
      vietnamese: 'She has one thing to talk to you',
      pattern_id: 1,
    }, {
      english: 'Mẹ tôi có thứ cần xem',
      vietnamese: 'My mom has thing to watch',
      pattern_id: 1,
    }, {
      english: 'Anh ấy có thứ cần đọc ở ngân hàng',
      vietnamese: 'He has thing to read at the bank',
      pattern_id: 1,
    }, {
      english: 'Bọn anh có điều cần hỏi em về cô ấy',
      vietnamese: 'We have something to ask you about her',
      pattern_id: 1,
    }, {
      english: 'Tôi không liên quan gì đến nó',
      vietnamese: 'I have nothing to do with it',
      pattern_id: 2,
    }, {
      english: 'Cuộc tranh luận này không liên quan gì đến tôi cả',
      vietnamese: 'This argument has nothing to do with me',
      pattern_id: 2,
    }, {
      english: 'Gia đình tôi không liên quan đến quyết định này',
      vietnamese: 'My family has nothing to do with this decision',
      pattern_id: 2,
    }, {
      english: 'Cô ấy không liên quan gì đến hắn ta cả',
      vietnamese: 'She has nothing to do with him',
      pattern_id: 2,
    }, {
      english: 'Tôi không có việc gì liên quan gì đến vấn đề đó',
      vietnamese: 'I has nothing to do with that matter',
      pattern_id: 2,
    }, {
      english: 'Anh của bạn dạo này thế nào',
      vietnamese: 'How\'s your brother doing?',
      pattern_id: 3,
    }, {
      english: 'Gia đình bạn thế nào rồi',
      vietnamese: 'How\'s your family doing?',
      pattern_id: 3,
    }, {
      english: 'Sinh viên của bạn thế nào rồi',
      vietnamese: 'How\'s your student doing?',
      pattern_id: 3,
    }, {
      english: 'Bạn gái của bạn thế nào rồi',
      vietnamese: 'How\'s your girlfriend doing?',
      pattern_id: 3,
    }, {
      english: 'Cuối tuần của bạn thế nào',
      vietnamese: 'How was your weekend?',
      pattern_id: 4,
    }, {
      english: 'Bài thi của bạn thế nào',
      vietnamese: 'How was your exam?',
      pattern_id: 4,
    }, {
      english: 'Phần trình diễn của bạn thế nào',
      vietnamese: 'How was your performance?',
      pattern_id: 4,
    }, {
      english: 'Chuyến du lịch của bạn thế nào',
      vietnamese: 'How was your travel?',
      pattern_id: 4,
    }, {
      english: 'Cuộc họp của bạn thế nào',
      vietnamese: 'How was your meeting?',
      pattern_id: 4,
    }, {
      english: 'Có thật là bạn sẽ đến đó không',
      vietnamese: 'Are you serious about going/getting there?',
      pattern_id: 5,
    }, {
      english: 'Có thật là bạn sẽ tìm một chiếc xe hơi không',
      vietnamese: 'Are you serious about looking for a car?',
      pattern_id: 5,
    }, {
      english: 'Có thật là bạn sẽ học tiếng Anh không',
      vietnamese: 'Are you serious about studying English?',
      pattern_id: 5,
    }, {
      english: 'Có thật là bạn sẽ đi chơi với cô ấy không',
      vietnamese: 'Are you serious about hanging out with her?',
      pattern_id: 5,
    }, {
      english: 'Bạn có từng đến Seoul chưa',
      vietnamese: 'Have you ever been to Soul?',
      pattern_id: 6,
    }, {
      english: 'Bạn có từng đến dự một đám cưới chưa',
      vietnamese: 'Have you ever been to a wedding?',
      pattern_id: 6,
    }, {
      english: 'Bạn có từng đến công viên quốc gia chưa',
      vietnamese: 'Have you ever been to the National Park?',
      pattern_id: 6,
    }, {
      english: 'Bạn có từng đến buổi hòa nhạc trực tiếp chưa',
      vietnamese: 'Have you ever been to a live concert?',
      pattern_id: 6,
    }, {
      english: 'Bạn có từng đến nước ngoài chưa',
      vietnamese: 'Have you ever been to a foreign country?',
      pattern_id: 6,
    }, {
      english: 'Tôi sẽ chỉ bạn cách để nướng một cái bánh',
      vietnamese: 'I\'ll show you the way to bake a cake',
      pattern_id: 7,
    }, {
      english: 'Tôi sẽ chỉ bạn cách trở nên giàu có',
      vietnamese: 'I\'ll show you the way to be rich',
      pattern_id: 7,
    }, {
      english: 'Tôi sẽ chỉ bạn cách dậy sớm buổi sáng',
      vietnamese: 'I\'ll show you the way to get up early in the morning',
      pattern_id: 7,
    }, {
      english: 'Tôi sẽ chỉ bạn cách để gặp cô ấy',
      vietnamese: 'I\'ll show you the way to meet her',
      pattern_id: 7,
    }, {
      english: 'Tôi sẽ chỉ bạn cách để nói tiếng Anh giỏi',
      vietnamese: 'I\'ll show you the way to speak English well',
      pattern_id: 7,
    }, {
      english: 'Có thể đi ra ngoài vào lúc nửa đêm không',
      vietnamese: 'Is it possible to go out at the midnight?',
      pattern_id: 8,
    }, {
      english: 'Có thể gặp bạn lúc 12 giờ được không',
      vietnamese: 'Is it possible to meet you at 12 o\'clock?',
      pattern_id: 8,
    }, {
      english: 'Có thể đi Sapa bằng xe máy được không',
      vietnamese: 'Is it possible to go to Sapa by motorbike?',
      pattern_id: 8,
    }, {
      english: 'Có thể nói chuyện với tôi bằng tiếng Anh được không',
      vietnamese: 'Is it possible to talk to me in English?',
      pattern_id: 8,
    }, {
      english: 'Có thể đi bộ từ khách sạn ra tới trung tâm thành phố được không',
      vietnamese: 'Is it possible to walk from the hotel to the city center?',
      pattern_id: 8,
    }, {
      english: 'Có thể giúp tôi làm bài tập về nhà được không',
      vietnamese: 'Is it possible to help me with my homework?',
      pattern_id: 8,
    }, {
      english: 'Tôi cần phải có mặt ở đó vào khoảng 10 giờ',
      vietnamese: 'I was supposed to be there around 10 o\'clock',
      pattern_id: 9,
    }, {
      english: 'Tôi cần phải học hành chăm chỉ cùng với cô ấy',
      vietnamese: 'I was supposed to study hard with her',
      pattern_id: 9,
    }, {
      english: 'Tôi cần phải mua một chiếc xe hơi xịn',
      vietnamese: 'I was supposed to buy a good car',
      pattern_id: 9,
    }, {
      english: 'Tôi cần phải tìm một cuốn sách tiếng Anh hay',
      vietnamese: 'I was supposed to look for a good English book',
      pattern_id: 9,
    }, {
      english: 'Tôi cần phải giúp cô ấy hết sức có thể',
      vietnamese: 'I was supposed to help her as far as I could',
      pattern_id: 9,
    }, {
      english: 'Tôi đang dần quen với việc tập thể dục mỗi buổi sáng',
      vietnamese: 'I\'m getting used to doing exercise every morning',
      pattern_id: 10,
    }, {
      english: 'Tôi đang dần quen với việc nói tiếng Anh',
      vietnamese: 'I\'m getting used to speaking English',
      pattern_id: 10,
    }, {
      english: 'Tôi đang dần quen với việc gặp cô ấy',
      vietnamese: 'I\'m getting used to meeting her',
      pattern_id: 10,
    }, {
      english: 'Tôi đang dần quen với việc nói chuyện bằng tiếng Anh',
      vietnamese: 'I\'m getting used to talking in English',
      pattern_id: 10,
    }, {
      english: 'Tôi đang dần quen với việc họp bằng tiếng Anh mỗi ngày',
      vietnamese: 'I\'m getting used to having a meeting in English everyday',
      pattern_id: 10,
    }, {
      english: 'Cô ấy đang dần quen với việc đi bộ đến nơi làm',
      pattern_id: 10,
      vietnamese: 'She\'s getting used to walking to the workplace',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Sentences', {
      pattern_id: {
        [Op.gte]: 1,
        [Op.lte]: 10,
      },
    }, {});
  },
};
