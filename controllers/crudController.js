const getOne = async (req, res, model) => {
  try {
    const id = req.params.id;
    const data = await model.findOne({
      where: { id },
      attributes: { exclude: ['id', 'created_at', 'updated_at'] }
    });
    if (!data) {
      return res.status(404).json({ message: 'Item not found' });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getAll = async (req, res, model) => {
  try {
    const data = await model.findAll({
      attributes: { exclude: ['id', 'created_at', 'updated_at'] }
    });
    if (!data) {
      return res.status(404).json({ message: 'There is no data in the database' });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteOne = async (req, res, model) => {
  try {
    const id = req.params.id;
    const data = await model.destroy({ where: { id } });
    if (!data) {
      return res.status(404).json({ message: 'Item not found' });
    }
    return res.status(200).json({ message: 'Item successfully deleted' });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const createOne = async (req, res, model) => {
  try {
    const data = await model.create(req.body);
    if (!data) {
      return res.status(404).json({ message: 'Item not created' });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const updateOne = async (req, res, model) => {
  try {
    const id = req.params.id;
    const data = await model.update(req.body, { where: { id } });
    if (data[0] === 0) {
      return res.status(404).json({ message: 'Item not updated' });
    }
    return res.status(200).json({ message: 'Item successfully updated' });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getOne,
  getAll,
  deleteOne,
  createOne,
  updateOne
};