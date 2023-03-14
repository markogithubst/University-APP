const { statusMessages } = require('../utils/statusMessages');
/* eslint-disable max-len */
const getOne = async (req, res, model) => {
  try {
    const id = req.params.id;
    const data = await model.findOne({
      where: { id },
      attributes: { exclude: ['id', 'created_at', 'updated_at'] }
    });
    return !data
      ? res.status(404).json({ message: statusMessages.itemNotFound })
      : res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res, model) => {
  try {
    const data = await model.findAll({
      attributes: { exclude: ['id', 'created_at', 'updated_at'] }
    });
    return data.length === 0
      ? res.status(404).json({ message: statusMessages.emptyDatabase })
      : res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteOne = async (req, res, model) => {
  try {
    const id = req.params.id;
    const data = await model.destroy({ where: { id } });
    return !data
      ? res.status(404).json({ message: statusMessages.itemNotFound })
      : res.status(202).json({ message: statusMessages.itemDeleted });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createOne = async (req, res, model) => {
  try {
    const data = await model.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateOne = async (req, res, model) => {
  try {
    const id = req.params.id;
    const data = await model.update(req.body, { where: { id } });
    return data[0] === 0
      ? res.status(404).json({ message: statusMessages.itemNotFound })
      : res.status(200).json({ message: statusMessages.itemUpdated });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getOne,
  getAll,
  deleteOne,
  createOne,
  updateOne
};
