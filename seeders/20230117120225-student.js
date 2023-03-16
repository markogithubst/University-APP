'use strict';
const bcrypt = require('bcrypt');
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

    const salt = await bcrypt.genSalt();
    const hashedPassword1 = await bcrypt.hash('studentpassword', salt);
    const hashedPassword2 = await bcrypt.hash('studentpassword1', salt);
    const hashedPassword3 = await bcrypt.hash('studentpassword2', salt);
    const hashedPassword4 = await bcrypt.hash('studentpassword3', salt);
    const hashedPassword5 = await bcrypt.hash('studentpassword4', salt);
    const hashedPassword6 = await bcrypt.hash('studentpassword5', salt);

    return await queryInterface.bulkInsert('student', [
      {
        full_name: 'John Doe',
        email: 'johndoe@fesb.com',
        password: hashedPassword1,
        address: '181 Mercer Street, New York',
        phone_number: '111222',
        major_id: 1,
        role_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Jane Doe',
        email: 'janedoe@fesb.com',
        password: hashedPassword2,
        address: '13 Washington Square S, New York',
        phone_number: '111333',
        major_id: 2,
        role_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Gregory House',
        email: 'gregoryhouse@fesb.com',
        password: hashedPassword3,
        address: '715 Broadway, New York',
        phone_number: '444555',
        major_id: 3,
        role_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Thomas Shelby',
        email: 'thomasshelby@fesb.com',
        password: hashedPassword4,
        address: '11 Queen St, London',
        phone_number: '222666',
        major_id: 4,
        role_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Arthur Shelby',
        email: 'arthurshelby@fesb.com',
        password: hashedPassword5,
        address: '9218 Manchester Road, London',
        phone_number: '777888',
        major_id: 5,
        role_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Polly Shelby',
        email: 'pollyshelby@fesb.com',
        password: hashedPassword6,
        address: '366 The Grove, London',
        phone_number: '333555',
        major_id: 2,
        role_id: 2,
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
