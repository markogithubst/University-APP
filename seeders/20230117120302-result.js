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
   return await queryInterface.bulkInsert('Results', [
    {
      StudentId: "1",
      grade: "5",
      ExamId: "7",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      StudentId: "2",
      grade: "2",
      ExamId: "7",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      StudentId: "3",
      grade: "2",
      ExamId: "8",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      StudentId: "4",
      grade: "1",
      ExamId: "9",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      StudentId: "5",
      grade: "3",
      ExamId: "10",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      StudentId: "6",
      grade: "2",
      ExamId: "11",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      StudentId: "1",
      grade: "2",
      ExamId: "12",
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
    return await queryInterface.bulkDelete('Results', null, {})
  }
};
