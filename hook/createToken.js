const jwt = require('jsonwebtoken');
const createToken = (existingUser) => {
  return jwt.sign(
    { id: existingUser.id, role: existingUser.role_id },
    process.env.SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRATION }
  );
};

module.exports = {
  createToken
};
