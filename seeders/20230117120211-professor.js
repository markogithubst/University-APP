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
    return await queryInterface.bulkInsert('professor', [
      {
        name: "Bilbo Baggins",
        address: "Abbey Street 121, Dublin",
        phoneNumber: "234567",
        DepartmentId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Frodo Baggins",
        address: "Capel Street 45, Dublin",
        phoneNumber: "765987",
        DepartmentId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mirabelle Tucker",
        address: "Clyde Road 3, Dublin",
        phoneNumber: "666111",
        DepartmentId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Alban Malone",
        address: "East Wall Road 34, Dublin",
        phoneNumber: "644332",
        DepartmentId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Timothea Ball",
        address: "East Wall Road 56, Dublin",
        phoneNumber: "644332",
        DepartmentId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lark Robson",
        address: "Gardiner Street 5, Dublin",
        phoneNumber: "758888",
        DepartmentId: "5",
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
    return await queryInterface.bulkDelete('professor', null, {});
  }
};
