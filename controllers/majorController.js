const models = require('../models');
const { getOne, getAll, deleteOne, createOne } = require('./crudController');

const getAllMajors = async (req, res) => {
	await getAll(req, res, models.Major);
};

const getOneMajor = async (req, res) => {
	await getOne(req, res, models.Major);
};

const deleteMajor = async (req, res) => {
	await deleteOne(req, res, models.Major);
};

const createMajor = async (req, res) => {
	await createOne(req, res, models.Major);
};


const updateMajor = async (req, res) => {
	try {
		const majorId = req.params.id;
		const { name } = req.body;
		const majorExists = await models.Major.findOne( {where: { id: majorId}} );
		if (!majorExists) {
			return res.status(404).json({ message: 'Major not found' });
		}
		await models.Major.update({ name }, { where: { id: majorId } });
		return res.status(200).json({ message: 'Major updated successfully' });
	} catch (error) {
		return res.status(500).json({ message: 'An error occured while updating the major: ' + error.message });
	}
};

module.exports = {
	createMajor,
	getAllMajors,
	getOneMajor,
	updateMajor,
	deleteMajor
};