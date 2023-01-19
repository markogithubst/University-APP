const models = require("../models");

const getAllDepartments = async (req, res) => {
    try {
      const departments = await models.Department.findAll();
      return res.status(200).json( departments );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    // createDepartment,
    getAllDepartments,
    // getOneDepartment,
    // updateDepartment,
    // deleteDepartment
}