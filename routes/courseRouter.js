const express = require('express');
const router = express.Router();

const CourseController = require('../controllers/courseController');
const { validateId, validateCourse } = require('../middleware');

router.get('/:id', validateId, CourseController.getOneCourse);
router.get('/', CourseController.getAllCourses);
router.post('/', validateCourse, CourseController.createCourse);
router.put('/:id', validateId, validateCourse, CourseController.updateCourse);
router.delete('/:id', validateId, CourseController.deleteCourse);

module.exports = router;
