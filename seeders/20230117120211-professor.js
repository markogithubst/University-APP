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
    return await queryInterface.bulkInsert('professor', [
      {
        full_name: 'Bilbo Baggins',
        email: 'bilbobaggins@fesb.com',
        password: 'testpassword',
        address: 'Abbey Street 121, Dublin',
        phone_number: '234567',
        department_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Frodo Baggins',
        email: 'frodobaggins@fesb.com',
        password: 'testpassword1',
        address: 'Capel Street 45, Dublin',
        phone_number: '765987',
        department_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Mirabelle Tucker',
        email: 'mirabelletucker@fesb.com',
        password: 'testpassword2',
        address: 'Clyde Road 3, Dublin',
        phone_number: '666111',
        department_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Alban Malone',
        email: 'albanmalone@fesb.com',
        password: 'testpassword3',
        address: 'East Wall Road 34, Dublin',
        phone_number: '644222332',
        department_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Timothea Ball',
        email: 'timotheaball@fesb.com',
        password: 'testpassword4',
        address: 'East Wall Road 56, Dublin',
        phone_number: '644332',
        department_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Lark Robson',
        email: 'larkrobson@fesb.com',
        password: 'testpassword5',
        address: 'Gardiner Street 5, Dublin',
        phone_number: '758888',
        department_id: 5,
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
    return await queryInterface.bulkDelete('professor', null, {});
  }
};
