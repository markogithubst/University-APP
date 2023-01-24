'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('exam', [
      {
        name: "Physics exam",
        date_and_time: new Date(),
        course_id: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Mathematics exam",
        date_and_time: new Date(),
        course_id: "2",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Cryptography exam",
        date_and_time: new Date(),
        course_id: "6",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Relational Databases exam",
        date_and_time: new Date(),
        course_id: "3",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Relational Databases another exam",
        date_and_time: new Date(),
        course_id: "3",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Physics another exam",
        date_and_time: new Date(),
        course_id: "1",
        created_at: new Date(),
        updated_at: new Date()
      }
     ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('exam', null, {});
  }
};
