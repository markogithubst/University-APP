'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
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
    return await queryInterface.bulkInsert('enrollment', [
      {
        course_id: '1',
        student_id: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: '1',
        student_id: '2',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: '1',
        student_id: '3',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: '2',
        student_id: '4',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: '2',
        student_id: '5',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: '3',
        student_id: '4',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: '3',
        student_id: '5',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: '4',
        student_id: '2',
        created_at: new Date(),
        updated_at: new Date()
      },{
        course_id: '5',
        student_id: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: '6',
        student_id: '3',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  // eslint-disable-next-line no-unused-vars
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('enrollment', null, {});
  }
};
