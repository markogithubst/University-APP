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
      Professor.belongsTo(models.Department, { onDelete: 'cascade', onUpdate: 'cascade' });
      models.Department.hasMany(Professor);
    }
  }
  Professor.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    DepartmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Professor',
  });
  return Professor;
};