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
        return await queryInterface.bulkInsert('course', [
            {
                name: 'Physics',
                credit_hours: '54',
                professor_id: '1',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Discrete Mathematics',
                credit_hours: '122',
                professor_id: '4',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Relational Databases',
                credit_hours: '70',
                professor_id: '2',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Methods and algorithms of machine learning',
                credit_hours: '80',
                professor_id: '1',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Mobile communications',
                credit_hours: '88',
                professor_id: '3',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Cryptography',
                credit_hours: '66',
                professor_id: '5',
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
        return await queryInterface.bulkDelete('course', null, {});
    }
};
