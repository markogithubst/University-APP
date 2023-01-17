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
    return await queryInterface.bulkInsert('Courses', [
      {
        name: "Physics",
        creditHours: "54",
        professorId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Discrete Mathematics",
        creditHours: "122",
        professorId: "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Relational Databases",
        creditHours: "70",
        professorId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Methods and algorithms of machine learning",
        creditHours: "80",
        professorId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mobile communications",
        creditHours: "88",
        professorId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cryptography",
        creditHours: "66",
        professorId: "5",
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
    return await queryInterface.bulkDelete('Courses', null, {});
  }
};