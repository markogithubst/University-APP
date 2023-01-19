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
      Result.belongsTo(models.Student);
      models.Student.hasMany(Result);

      Result.belongsTo(models.Exam);
      models.Exam.hasMany(Result);
    }
  }
  Result.init({
    StudentId: DataTypes.INTEGER,
    grade: DataTypes.INTEGER,
    ExamId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Result',
  });
  Result.removeAttribute('id');
  return Result;
};