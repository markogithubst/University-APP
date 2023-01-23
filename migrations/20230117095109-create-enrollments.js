'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enrollments', {
      CourseId: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StudentId: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Enrollments', {
      fields: ['StudentId'],
      type: 'foreign key',
      references: {
        table: 'Students',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Enrollments', {
      fields: ['CourseId'],
      type: 'foreign key',
      references: {
        table: 'Courses',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enrollments');
  }
};