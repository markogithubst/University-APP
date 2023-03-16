const models = require('../models');
const { getAll } = require('./crudController');

const getAllRoles = async (req, res) => {
  await getAll(req, res, models.Role);
};

module.exports = {
  getAllRoles
};
