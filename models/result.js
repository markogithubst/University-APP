'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Result.belongsTo(models.student);
      models.student.hasMany(Result);

      Result.belongsTo(models.exam);
      models.exam.hasMany(Result);
    }
  }
  Result.init({
    studentId: DataTypes.INTEGER,
    grade: DataTypes.INTEGER,
    examId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};