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
    return await queryInterface.bulkInsert('Majors', [
      {
        name: "Electrical Engineering and Information Technology",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Computing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mechanical Engineering",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Naval Architecture",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Industrial Engineering",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Majors', null, {});
  }
};
