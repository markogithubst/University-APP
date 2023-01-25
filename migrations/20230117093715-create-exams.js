'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('exam', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
				unique: true
			},
			date_and_time: {
				allowNull: false,
				type: Sequelize.DATE
			},
			course_id: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
		await queryInterface.addConstraint('exam', {
			fields: ['course_id'],
			type: 'foreign key',
			references: {
				table: 'course',
				field: 'id',
			},
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});
	},
	// eslint-disable-next-line no-unused-vars
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('exam');
	}
};