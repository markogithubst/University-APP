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
   return await queryInterface.bulkInsert('result', [
    {
      student_id: "1",
      grade: "5",
      exam_id: "1",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      student_id: "2",
      grade: "2",
      exam_id: "2",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      student_id: "3",
      grade: "2",
      exam_id: "3",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      student_id: "4",
      grade: "1",
      exam_id: "4",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      student_id: "5",
      grade: "3",
      exam_id: "5",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      student_id: "6",
      grade: "2",
      exam_id: "6",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      student_id: "1",
      grade: "2",
      exam_id: "3",
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
    return await queryInterface.bulkDelete('result', null, {})
  }
};
