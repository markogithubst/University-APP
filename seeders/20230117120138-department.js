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
    return await queryInterface.bulkInsert('department', [
      {
        name: "Department of Power Engineering",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Department of Electronics",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Department of Mathematics and Physics",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Department of Mechanical Engineering and Naval Architecture",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Department of Mechanical Engineering Technology",
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
    return await queryInterface.bulkDelete('department', null, {});
  }
};
