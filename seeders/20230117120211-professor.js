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
    const hashedPassword1 = await bcrypt.hash('testpassword1', salt);
    const hashedPassword2 = await bcrypt.hash('testpassword2', salt);
    const hashedPassword3 = await bcrypt.hash('testpassword3', salt);
    const hashedPassword4 = await bcrypt.hash('testpassword4', salt);
    const hashedPassword5 = await bcrypt.hash('testpassword5', salt);
    const hashedPassword6 = await bcrypt.hash('testpassword6', salt);

    return await queryInterface.bulkInsert('professor', [
      {
        full_name: 'Bilbo Baggins',
        email: 'bilbobaggins@fesb.com',
        password: hashedPassword1,
        address: 'Abbey Street 121, Dublin',
        phone_number: '234567',
        department_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Frodo Baggins',
        email: 'frodobaggins@fesb.com',
        password: hashedPassword2,
        address: 'Capel Street 45, Dublin',
        phone_number: '765987',
        department_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Mirabelle Tucker',
        email: 'mirabelletucker@fesb.com',
        password: hashedPassword3,
        address: 'Clyde Road 3, Dublin',
        phone_number: '666111',
        department_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Alban Malone',
        email: 'albanmalone@fesb.com',
        password: hashedPassword4,
        address: 'East Wall Road 34, Dublin',
        phone_number: '644222332',
        department_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Timothea Ball',
        email: 'timotheaball@fesb.com',
        password: hashedPassword5,
        address: 'East Wall Road 56, Dublin',
        phone_number: '644332',
        department_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        full_name: 'Lark Robson',
        email: 'larkrobson@fesb.com',
        password: hashedPassword6,
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
