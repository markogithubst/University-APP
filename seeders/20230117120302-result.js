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
      studentId: "1",
      grade: "5",
      examId: "6",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId: "2",
      grade: "2",
      examId: "5",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId: "3",
      grade: "2",
      examId: "4",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId: "4",
      grade: "1",
      examId: "3",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId: "5",
      grade: "3",
      examId: "2",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId: "6",
      grade: "2",
      examId: "1",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentId: "4",
      grade: "2",
      examId: "10",
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
