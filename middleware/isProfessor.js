const { statusMessages } = require('../utils/statusMessages');
const { roles } = require('../utils/roles');
const isProfessor = async (req, res, next) => {
  const professorRole = roles.PROFESSOR;
  const userRole = req.user.role;
  if (userRole !== professorRole) return res.status(403).json({ message: statusMessages.addResultUnauthorized });

  next();
};

module.exports = {
  isProfessor
};
