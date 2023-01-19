const express = require('express');
const router = express.Router();

const CourseController = require('../controllers/courseController')

// router.get('/:id', CourseController.getOneCourse);
router.get('/', CourseController.getAllCourses);
// router.post('/', CourseController.createCourse);
// router.put('/:id', CourseController.updateCourse);
// router.delete('/:id', CourseController.deleteCourse);

module.exports = router;
