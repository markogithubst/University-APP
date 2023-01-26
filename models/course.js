'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            Course.belongsTo(models.Professor, { onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'professor_id' });
            models.Professor.hasMany(Course, {foreignKey: 'professor_id'});
        }
    }
    Course.init({
        name: DataTypes.STRING,
        credit_hours: DataTypes.INTEGER,
        professor_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Course',
        tableName: 'course',
        freezeTableName: true,
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
    return Course;
};