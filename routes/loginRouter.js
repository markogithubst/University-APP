const express = require('express');
const router = express.Router();
const { validateLogIn } = require('../middleware/joiMiddleware');

const loginController = require('../controllers/loginController');

router.post('/',
/* #swagger.tags = ['Login'] */
  validateLogIn, loginController.login);

module.exports = router;
