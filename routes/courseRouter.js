const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController');
const { validateId, validateCourse } = require('../middleware');

router.get('/:id', validateId, courseController.getOneCourse);
router.get('/', courseController.getAllCourses);
router.post('/', validateCourse, courseController.createCourse);
router.put('/:id', validateId, validateCourse, courseController.updateCourse);
router.delete('/:id', validateId, courseController.deleteCourse);

module.exports = router;
