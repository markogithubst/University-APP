const models = require("../models");

const getAllEnrollments = async (req, res) => {
    try {
      const enrollments = await models.Enrollment.findAll();
      if (!enrollments || enrollments.length === 0) {
        return res.status(404).json({ message: "There are no Enrollments in the database" });
      }
      return res.status(200).json( enrollments );
    } catch (error) {
      return res.status(500).json({ message: "An error occurred while fetching all enrollments: " + error.message });
    }
  };


const getEnrollmentsByStudent = async (req, res) => {
    try {
        const enrollmentByStudentId = req.params.id
        const allEnrollmentByStudentId = await models.Enrollment.findAll( {where: { StudentId: enrollmentByStudentId}} );
        if (!allEnrollmentByStudentId || allEnrollmentByStudentId.length == 0) {
          return res.status(404).json({ message: "Enrollment By entered Student Id not found" });
        }
        return res.status(200).json( allEnrollmentByStudentId );
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  const getEnrollmentsByCourse = async (req, res) => {
    try {
        const enrollmentByCourseId  = req.params.id
        const allEnrollmentByCourseId = await models.Enrollment.findAll( {where: { CourseId: enrollmentByCourseId}} );
        if (!allEnrollmentByCourseId || allEnrollmentByCourseId.length == 0) {
          return res.status(404).json({ message: "Enrollment By entered Course Id not found" });
        }
        return res.status(200).json( allEnrollmentByCourseId );
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

const createEnrollment = async (req, res) => {
  try {
    if (!req.body.CourseId || !req.body.StudentId) {
        return res.status(400).json({ message: "CourseId and StudentId are both required" });
    }
    const newEnrollment = await models.Enrollment.create(req.body);
    return res.status(201).json(newEnrollment);
    
} catch (error) {
    return res.status(500).json({ message: "An error occurred while creating the enrollment: " + error.message });
}
};


const deleteEnrollment = async (req, res) => {
  try {
    const insertedCourseId = req.body.CourseId
    const insertedStudentId = req.body.StudentId
    if(!insertedStudentId || !insertedCourseId){
      return res.status(400).json({ message: "StudentId and CourseId fields are required" });
    }
    await models.Enrollment.destroy({ where: { StudentId: insertedStudentId, CourseId: insertedCourseId}});
    return res.status(200).json({ message: "Enrollment with the inserted StudenId and CourseId succesfully deleted" });
  } catch (error) {
    return res.status(500).json({ message: "An error occured while deleting the enrollment: " + error.message })
  }
};

const updateEnrollment = async (req, res) => {
  try {
    const studentIdToUpdate = req.params.StudentId;
    const courseIdToUpdate = req.params.CourseId;
    const updatedStudentId = req.body.StudentId;
    const updatedCourse = req.body.CourseId;
    const enrollmentExists = await models.Enrollment.findOne( {where: [{ CourseId: courseIdToUpdate}, {StudentId: studentIdToUpdate}]} );
    if (!enrollmentExists) {
      return res.status(404).json({ message: 'Enrollment with inserted StudentID and CourseId not found' });
    }
    await models.Enrollment.update({StudentId: updatedStudentId, CourseId: updatedCourse}, {where: {StudentId: studentIdToUpdate, CourseId: courseIdToUpdate}});
    return res.status(200).json({ message: 'Enrollment updated successfully'  });
    
  } catch (error) {
    return res.status(500).json({ message: "An error occured while updating the enrollment: " + error.message });
  }
};

module.exports = {
    createEnrollment,
    getEnrollmentsByCourse,
    getAllEnrollments,
    getEnrollmentsByStudent,
    updateEnrollment,
    deleteEnrollment
}