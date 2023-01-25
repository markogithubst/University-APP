const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');

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
	await updateOne(req, res, models.Major);
};

module.exports = {
	createMajor,
	getAllMajors,
	getOneMajor,
	updateMajor,
	deleteMajor
};