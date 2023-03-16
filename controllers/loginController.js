const models = require('../models');
require('dotenv').config();
const { statusMessages } = require('../utils/statusMessages');
const bcrypt = require('bcrypt');
const { createToken } = require('../hook/createToken');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const attributesToExclude = ['created_at', 'updated_at'];

    const existingUser = await models.Professor.findOne({
      where: { email },
      attributes: { exclude: attributesToExclude }
    }) || await models.Student.findOne({
      where: { email },
      attributes: { exclude: attributesToExclude }
    });
    let accessUserToken;
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (existingUser && isPasswordCorrect) {
      try {
        accessUserToken = createToken(existingUser);
        res.header('Authorization', 'Bearer ' + accessUserToken);
        res.header('Role', existingUser.role_id);
        return res.status(200).json({ message: statusMessages.successfulLogIn });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
    return res.status(404).json({ message: statusMessages.wrongEmailOrPass });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  login
};
