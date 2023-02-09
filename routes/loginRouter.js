const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.post('/',
/* #swagger.tags = ['Login'] */
  loginController.login);

module.exports = router;
