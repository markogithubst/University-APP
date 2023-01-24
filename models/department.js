'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Department extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		// eslint-disable-next-line no-unused-vars
		static associate(models) {
			// define association here
		}
	}
	Department.init({
		name: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Department',
		tableName: 'department',
		freezeTableName: true,
		underscored: true,
		updatedAt: 'updated_at',
		createdAt: 'created_at'
	});
	return Department;
};