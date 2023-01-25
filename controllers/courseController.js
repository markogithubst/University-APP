const models = require('../models');
const { getOne } = require('./crudController');
const { getAll } = require('./crudController');
const { deleteOne } = require('./crudController');

const getAllCourses = async (req, res) => {
	await getAll(req, res, models.Course);
};


const getOneCourse = async (req, res) => {
	await getOne(req, res, models.Course);
};

const createCourse = async (req, res) => {
	try {
		if (!req.body.name) {
			return res.status(400).json({ message: 'Course name is required' });
		}
		const courseName = req.body.name;
		const alreadyExists = await models.Course.findOne( {where: { name: courseName}} );
		if(!alreadyExists){
			const newCourse = await models.Course.create(req.body);
			return res.status(201).json(newCourse);
		}
		return res.status(404).json({ message: 'There is already a Course with this name in the database' }); 
    
	} catch (error) {
		return res.status(500).json({ message: 'An error occurred while creating the course: ' + error.message });
	}
};


const deleteCourse = async (req, res) => {
	await deleteOne(req, res, models.Course);
};

const updateCourse = async (req, res) => {
	try {
		const courseId = req.params.id;
		const { name, credit_hours, professor_id } = req.body;
		const courseExists = await models.Course.findOne( {where: { id: courseId}} );
		if (!courseExists) {
			return res.status(404).json({ message: 'Course not found' });
		}
		await models.Course.update({ name, credit_hours, professor_id }, { where: { id: courseId } });
		return res.status(200).json({ message: 'Course updated successfully' });
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while updating the course: ' + error.message });
	}
};

module.exports = {
	createCourse,
	getAllCourses,
	getOneCourse,
	updateCourse,
	deleteCourse
};