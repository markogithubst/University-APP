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
   return await queryInterface.bulkInsert('Students', [
    {
      name: "John Doe",
      email: "johndoe@fesb.com",
      address: "181 Mercer Street, New York",
      phoneNumber: "111222",
      majorId: "1",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Jane Doe",
      email: "janedoe@fesb.com",
      address: "13 Washington Square S, New York",
      phoneNumber: "111333",
      majorId: "2",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Gregory House",
      email: "gregoryhouse@fesb.com",
      address: "715 Broadway, New York",
      phoneNumber: "444555",
      majorId: "3",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Thomas Shelby",
      email: "thomasshelby@fesb.com",
      address: "11 Queen St, London",
      phoneNumber: "222666",
      majorId: "4",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Arthur Shelby",
      email: "arthurshelby@fesb.com",
      address: "9218 Manchester Road, London",
      phoneNumber: "777888",
      majorId: "5",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Polly Shelby",
      email: "pollyshelby@fesb.com",
      address: "366 The Grove, London",
      phoneNumber: "333555",
      majorId: "2",
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
    return await queryInterface.bulkDelete('Students', null, {});
  }
};
