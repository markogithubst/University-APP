const models = require('../models');
const { getAll } = require('./crudController');

const getAllEnrollments = async (req, res) => {
	await getAll(req, res, models.Enrollment, 'Enrollment');
};


const getEnrollmentsByStudent = async (req, res) => {
	try {
		const enrollmentByStudentId = req.params.id;
		const allEnrollmentByStudentId = await models.Enrollment.findAll( {where: { student_id: enrollmentByStudentId}} );
		if (!allEnrollmentByStudentId || allEnrollmentByStudentId.length == 0) {
			return res.status(404).json({ message: 'Enrollment By entered Student Id not found' });
		}
		return res.status(200).json( allEnrollmentByStudentId );
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const getEnrollmentsByCourse = async (req, res) => {
	try {
		const enrollmentByCourseId  = req.params.id;
		const allEnrollmentByCourseId = await models.Enrollment.findAll( {where: { course_id: enrollmentByCourseId}} );
		if (!allEnrollmentByCourseId || allEnrollmentByCourseId.length == 0) {
			return res.status(404).json({ message: 'Enrollment By entered Course Id not found' });
		}
		return res.status(200).json( allEnrollmentByCourseId );
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const createEnrollment = async (req, res) => {
	try {
		if (!req.body.course_id || !req.body.student_id) {
			return res.status(400).json({ message: 'CourseId and StudentId are both required' });
		}
		const newEnrollment = await models.Enrollment.create(req.body);
		return res.status(201).json(newEnrollment);
    
	} catch (error) {
		return res.status(500).json({ message: 'An error occurred while creating the enrollment: ' + error.message });
	}
};


const deleteEnrollment = async (req, res) => {
	try {
		const insertedCourseId = req.body.course_id;
		const insertedStudentId = req.body.student_id;
		if(!insertedStudentId || !insertedCourseId){
			return res.status(400).json({ message: 'StudentId and CourseId fields are required' });
		}
		await models.Enrollment.destroy({ where: { student_id: insertedStudentId, course_id: insertedCourseId}});
		return res.status(200).json({ message: 'Enrollment with the inserted StudenId and CourseId succesfully deleted' });
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while deleting the enrollment: ' + error.message });
	}
};

const updateEnrollment = async (req, res) => {
	try {
		const studentIdToUpdate = req.params.StudentId;
		const courseIdToUpdate = req.params.CourseId;
		const updatedStudentId = req.body.student_id;
		const updatedCourse = req.body.course_id;
		const enrollmentExists = await models.Enrollment.findOne( {where: [{ course_id: courseIdToUpdate}, {student_id: studentIdToUpdate}]} );
		if (!enrollmentExists) {
			return res.status(404).json({ message: 'Enrollment with inserted StudentID and CourseID not found' });
		}
		await models.Enrollment.update({student_id: updatedStudentId, course_id: updatedCourse}, {where: {student_id: studentIdToUpdate, course_id: courseIdToUpdate}});
		return res.status(200).json({ message: 'Enrollment updated successfully'  });
    
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while updating the enrollment: ' + error.message });
	}
};

module.exports = {
	createEnrollment,
	getEnrollmentsByCourse,
	getAllEnrollments,
	getEnrollmentsByStudent,
	updateEnrollment,
	deleteEnrollment
};