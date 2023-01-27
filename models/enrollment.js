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
    static associate (models) {
      // define association here
      Enrollment.belongsTo(models.Student, { onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'student_id' });
      models.Student.hasMany(Enrollment, { foreignKey: 'student_id' });

      Enrollment.belongsTo(models.Course, { onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'course_id' });
      models.Course.hasMany(Enrollment, { foreignKey: 'course_id' });
    }
  }
  Enrollment.init({
    course_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enrollment',
    tableName: 'enrollment',
    freezeTableName: true,
    underscored: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });
  Enrollment.removeAttribute('id');
  return Enrollment;
};
