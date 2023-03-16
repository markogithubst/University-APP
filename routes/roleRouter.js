const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

router.get('/',
/* #swagger.tags = ['Role'] */
  /* #swagger.responses[200] = {
        description: 'Get all Roles from the database',
        schema: [
                    {
                        "name": "professor"
                    },
                    {
                        "name": "student"
                    }
                ]
    } */
  roleController.getAllRoles);

module.exports = router;
