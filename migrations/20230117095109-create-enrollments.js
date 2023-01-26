'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('enrollment', {
            course_id: {
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            student_id: {
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
        await queryInterface.addConstraint('enrollment', {
            fields: ['student_id'],
            type: 'foreign key',
            references: {
                table: 'student',
                field: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });
        await queryInterface.addConstraint('enrollment', {
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
        await queryInterface.dropTable('enrollment');
    }
};