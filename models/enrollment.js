'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enrollment.belongsTo(models.Student);
      models.Student.hasMany(Enrollment);

      Enrollment.belongsTo(models.Course);
      models.Course.hasMany(Enrollment);
    }
  }
  Enrollment.init({
    CourseId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enrollment',
  });
  Enrollment.removeAttribute('id');
  return Enrollment;
};