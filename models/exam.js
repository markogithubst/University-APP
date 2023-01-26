'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Exam extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            Exam.belongsTo(models.Course, { onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'course_id'  });
            models.Course.hasMany(Exam, {foreignKey: 'course_id'});
        }
    }
    Exam.init({
        name: DataTypes.STRING,
        date_and_time: DataTypes.DATE,
        course_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Exam',
        tableName: 'exam',
        freezeTableName: true,
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
    return Exam;
};