'use strict';
const bcrypt = require('bcrypt');
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
    static associate (models) {
      // define association here
      Professor.belongsTo(models.Department, { onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'department_id' });
      models.Department.hasMany(Professor, { foreignKey: 'department_id' });

      Professor.belongsTo(models.Role, { onDelete: 'cascade', onUpdate: 'cascade', foreignKey: 'role_id' });
      models.Role.hasMany(Professor, { foreignKey: 'role_id' });
    }
  }
  Professor.init({
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    department_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: async (professor, options) => {
        const hashPassword = async (password) => {
          const salt = await bcrypt.genSalt();
          return bcrypt.hash(password, salt);
        };
        const hashedPassword = await hashPassword(professor.password);
        professor.password = hashedPassword;
      }
    },
    sequelize,
    modelName: 'Professor',
    tableName: 'professor',
    freezeTableName: true,
    underscored: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });
  return Professor;
};
