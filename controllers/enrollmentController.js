const models = require("../models");

const getAllEnrollments = async (req, res) => {
    try {
      const enrollments = await models.Enrollment.findAll();
      if (!enrollments || enrollments.length === 0) {
        return res.status(404).send({ message: "There are no Enrollments in the database" });
      }
      return res.status(200).json( enrollments );
    } catch (error) {
      return res.status(500).send({ message: "An error occurred while fetching all enrollments: " + error.message });
    }
  };


const getEnrollmentsByStudent = async (req, res) => {
    try {
        const enrollmentByStudentId = req.params.id
        const allEnrollmentByStudentId = await models.Enrollment.findAll( {where: { StudentId: enrollmentByStudentId}} );
        if (!allEnrollmentByStudentId || allEnrollmentByStudentId.length == 0) {
          return res.status(404).send({ message: "Enrollment By entered Student Id not found" });
        }
        return res.status(200).json( allEnrollmentByStudentId );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getEnrollmentsByCourse = async (req, res) => {
    try {
        const enrollmentByCourseId  = req.params.id
        const allEnrollmentByCourseId = await models.Enrollment.findAll( {where: { CourseId: enrollmentByCourseId}} );
        if (!allEnrollmentByCourseId || allEnrollmentByCourseId.length == 0) {
          return res.status(404).send({ message: "Enrollment By entered Course Id not found" });
        }
        return res.status(200).json( allEnrollmentByCourseId );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

const createEnrollment = async (req, res) => {
  try {
    if (!req.body.CourseId || !req.body.StudentId) {
        return res.status(400).send({ message: "CourseId and StudentId are both required" });
    }
    const newEnrollment = await models.Enrollment.create(req.body);
    return res.status(201).json(newEnrollment);
    
} catch (error) {
    return res.status(500).send({ message: "An error occurred while creating the enrollment: " + error.message });
}
};

module.exports = {
    createEnrollment,
    getEnrollmentsByCourse,
    getAllEnrollments,
    getEnrollmentsByStudent,
    // updateEnrollment,
    // deleteEnrollment
}