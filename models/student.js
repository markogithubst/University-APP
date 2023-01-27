'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Student.belongsTo(models.Major, { onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'major_id' });
      models.Major.hasMany(Student, { foreignKey: 'major_id' });
    }
  }
  Student.init({
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    major_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'student',
    freezeTableName: true,
    underscored: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });
  return Student;
};
