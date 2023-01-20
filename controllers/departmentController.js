const models = require("../models");

const getAllDepartments = async (req, res) => {
    try {
      const departments = await models.Department.findAll();
      if (!departments || departments.length == 0) {
        return res.status(404).send({ message: "There are no Departments in the database" });
      }
      return res.status(200).json( departments );
    } catch (error) {
      return res.status(500).send({ message: "An error occurred while fetching all departments: " + error.message });
    }
  };

  const getOneDepartment = async (req, res) => {
    try {
        const departmentId  = req.params.id
        const department = await models.Department.findOne( {where: { id: departmentId}} );
        if (!department) {
          return res.status(404).send({ message: "Department not found" });
      }
      return res.status(200).json( department );
    } catch (error) {
      return res.status(500).send({ message: "An error occurred while fetching the department: " + error.message });
    }
  };

module.exports = {
    // createDepartment,
    getAllDepartments,
    getOneDepartment,
    // updateDepartment,
    // deleteDepartment
}