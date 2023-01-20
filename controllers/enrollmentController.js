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
    if (!req.body.name) {
        return res.status(400).send({ message: "Course name is required" });
    }
    const courseName = req.body.name
    const alreadyExists = await models.Course.findOne( {where: { name: courseName}} );
    if(!alreadyExists || alreadyExists.length === 0){
      const newCourse = await models.Course.create(req.body);
      return res.status(201).json(newCourse);
    }
    return res.status(404).send({ message: "There is already a Course with this name in the database" }); 
    
} catch (error) {
    return res.status(500).send({ message: "An error occurred while creating the course: " + error.message });
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