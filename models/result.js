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
    static associate (models) {
      // define association here
      Result.belongsTo(models.Student, { onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'student_id' });
      models.Student.hasMany(Result, { foreignKey: 'student_id' });

      Result.belongsTo(models.Exam, { onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'exam_id' });
      models.Exam.hasMany(Result, { foreignKey: 'exam_id' });
    }
  }
  Result.init({
    student_id: DataTypes.INTEGER,
    grade: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
        isInt: true
      }
    },
    exam_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Result',
    tableName: 'result',
    freezeTableName: true,
    underscored: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });
  Result.removeAttribute('id');
  return Result;
};
