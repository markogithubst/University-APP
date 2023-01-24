'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enrollment', {
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
    await queryInterface.addConstraint('enrollment', {
      fields: ['StudentId'],
      type: 'foreign key',
      references: {
        table: 'student',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('enrollment', {
      fields: ['CourseId'],
      type: 'foreign key',
      references: {
        table: 'course',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('enrollment');
  }
};