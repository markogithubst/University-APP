/* eslint-disable max-len */
const getOne = async (req, res, model) => {
  try {
    const id = req.params.id;
    const data = await model.findOne({
      where: { id },
      attributes: { exclude: ['id', 'created_at', 'updated_at'] }
    });
    return !data
      ? res.status(404).json({ message: 'Item not found' })
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
    return !data
      ? res.status(404).json({ message: 'There is no data in the database' })
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
      ? res.status(404).json({ message: 'Item not found' })
      : res.status(202).json({ message: 'Item successfully deleted' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createOne = async (req, res, model) => {
  try {
    const data = await model.create(req.body);
    return !data
      ? res.status(400).json({ message: 'Item not created' })
      : res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateOne = async (req, res, model) => {
  try {
    const id = req.params.id;
    const data = await model.update(req.body, { where: { id } });
    return data[0] === 0
      ? res.status(404).json({ message: 'Item not updated' })
      : res.status(200).json({ message: 'Item successfully updated' });
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
