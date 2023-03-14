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
          { id: existingUser.id, email: existingUser.email },
          `${process.env.SECRET_KEY}`,
          { expiresIn: process.env.JWT_EXPIRATION }
        );
        res.header('Authorization', 'Bearer ' + accessUserToken);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
      return res.status(200).json({ message: statusMessages.successfulLogIn });
    }
    return res.status(404).json({ message: statusMessages.wrongEmailOrPass });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(400).send(statusMessages.noToken);
  }
  try {
    const decoded = await jwt.verify(token, `${process.env.SECRET_KEY}`);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send(statusMessages.invalidToken);
  }
  return next();
};

module.exports = {
  login,
  authenticateToken
};
