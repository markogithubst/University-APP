'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('professor', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            address: {
                type: Sequelize.STRING
            },
            phone_number: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            department_id: {
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
        await queryInterface.addConstraint('professor', {
            fields: ['department_id'],
            type: 'foreign key',
            references: {
                table: 'department',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });
    },
    // eslint-disable-next-line no-unused-vars
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('professor');
    }
};