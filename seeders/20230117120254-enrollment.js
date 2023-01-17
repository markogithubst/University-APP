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
    return await queryInterface.bulkInsert('Enrollments', [
      {
        courseId: "1",
        studentId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: "1",
        studentId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: "1",
        studentId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: "2",
        studentId: "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: "2",
        studentId: "5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: "3",
        studentId: "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: "3",
        studentId: "7",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: "4",
        studentId: "9",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        courseId: "5",
        studentId: "11",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: "6",
        studentId: "12",
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
    return await queryInterface.bulkDelete('Enrollments', null, {});
  }
};
