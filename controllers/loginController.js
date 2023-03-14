const models = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { statusMessages } = require('../utils/statusMessages');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await models.Professor.findOne({
      where: { email },
      attributes: { exclude: ['created_at', 'updated_at'] }
    }) || await models.Student.findOne({
      where: { email },
      attributes: { exclude: ['created_at', 'updated_at'] }
    });
    let accessUserToken;
    if (existingUser && existingUser.password === password) {
      try {
        // Creating jwt token
        accessUserToken = jwt.sign(
          { id: existingUser.id },
          `${process.env.SECRET_KEY}`,
          { expiresIn: process.env.JWT_EXPIRATION }
        );
        res.header('Authorization', 'Bearer ' + accessUserToken);
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
