'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('result', {
            student_id: {
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            grade: {
                type: Sequelize.INTEGER
            },
            exam_id: {
                primaryKey: true,
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
        await queryInterface.addConstraint('result', {
            fields: ['student_id'],
            type: 'foreign key',
            references: {
                table: 'student',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });
        await queryInterface.addConstraint('result', {
            fields: ['exam_id'],
            type: 'foreign key',
            references: {
                table: 'exam',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });
    },
    // eslint-disable-next-line no-unused-vars
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('result');
    }
};