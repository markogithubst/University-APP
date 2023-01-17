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
    return await queryInterface.bulkInsert('Exams', [
      {
        name: "Physics exam",
        dateAndTime: new Date(),
        courseId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mathematics exam",
        dateAndTime: new Date(),
        courseId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cryptography exam",
        dateAndTime: new Date(),
        courseId: "6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Relational Databases exam",
        dateAndTime: new Date(),
        courseId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Relational Databases another exam",
        dateAndTime: new Date(),
        courseId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Physics another exam",
        dateAndTime: new Date(),
        courseId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
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
    return await queryInterface.bulkDelete('Exams', null, {});
  }
};
