const jwt = require('jsonwebtoken');
const { statusMessages } = require('../utils/statusMessages');

const isLoggedIn = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(400).send({ message: statusMessages.notLoggedIn });
  }
  try {
    const decoded = await jwt.verify(token, `${process.env.SECRET_KEY}`);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  isLoggedIn
};
