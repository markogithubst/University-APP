'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Results', {
      StudentId: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      grade: {
        type: Sequelize.INTEGER
      },
      ExamId: {
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
    await queryInterface.addConstraint('Results', {
      fields: ['StudentId'],
      type: 'foreign key',
      references: {
        table: 'Students',
        field: 'id',
      }
    });
    await queryInterface.addConstraint('Results', {
      fields: ['ExamId'],
      type: 'foreign key',
      references: {
        table: 'Exams',
        field: 'id',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Results');
  }
};