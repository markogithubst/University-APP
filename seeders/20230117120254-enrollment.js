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
        CourseId: "1",
        StudentId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CourseId: "1",
        StudentId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CourseId: "1",
        StudentId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CourseId: "2",
        StudentId: "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CourseId: "2",
        StudentId: "5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CourseId: "3",
        StudentId: "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CourseId: "3",
        StudentId: "5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CourseId: "4",
        StudentId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        CourseId: "5",
        StudentId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CourseId: "6",
        StudentId: "3",
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
