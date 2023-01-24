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
				name: 'Bilbo Baggins',
				address: 'Abbey Street 121, Dublin',
				phone_number: '234567',
				department_id: '1',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				name: 'Frodo Baggins',
				address: 'Capel Street 45, Dublin',
				phone_number: '765987',
				department_id: '1',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				name: 'Mirabelle Tucker',
				address: 'Clyde Road 3, Dublin',
				phone_number: '666111',
				department_id: '3',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				name: 'Alban Malone',
				address: 'East Wall Road 34, Dublin',
				phone_number: '644332',
				department_id: '3',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				name: 'Timothea Ball',
				address: 'East Wall Road 56, Dublin',
				phone_number: '644332',
				department_id: '2',
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				name: 'Lark Robson',
				address: 'Gardiner Street 5, Dublin',
				phone_number: '758888',
				department_id: '5',
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
