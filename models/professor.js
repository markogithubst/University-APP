'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Professor extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
			Professor.belongsTo(models.Department, { onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'department_id' });
			models.Department.hasMany(Professor, {foreignKey: 'department_id'});
		}
	}
	Professor.init({
		name: DataTypes.STRING,
		address: DataTypes.STRING,
		phone_number: DataTypes.STRING,
		department_id: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Professor',
		tableName: 'professor',
		freezeTableName: true,
		underscored: true,
		updatedAt: 'updated_at',
		createdAt: 'created_at',
	});
	return Professor;
};