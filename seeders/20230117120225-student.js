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
    return await queryInterface.bulkInsert('student', [
      {
        full_name: 'John Doe',
        email: 'johndoe@fesb.com',
        address: '181 Mercer Street, New York',
        phone_number: '111222',
        major_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Jane Doe',
        email: 'janedoe@fesb.com',
        address: '13 Washington Square S, New York',
        phone_number: '111333',
        major_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Gregory House',
        email: 'gregoryhouse@fesb.com',
        address: '715 Broadway, New York',
        phone_number: '444555',
        major_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Thomas Shelby',
        email: 'thomasshelby@fesb.com',
        address: '11 Queen St, London',
        phone_number: '222666',
        major_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Arthur Shelby',
        email: 'arthurshelby@fesb.com',
        address: '9218 Manchester Road, London',
        phone_number: '777888',
        major_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Polly Shelby',
        email: 'pollyshelby@fesb.com',
        address: '366 The Grove, London',
        phone_number: '333555',
        major_id: 2,
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
    return await queryInterface.bulkDelete('student', null, {});
  }
};
