const express = require('express');
const router = express.Router();

const CourseController = require('../controllers/courseController');
const { validateId } = require('../middleware');

router.get('/:id', validateId , CourseController.getOneCourse);
router.get('/', CourseController.getAllCourses);
router.post('/', CourseController.createCourse);
router.put('/:id', validateId , CourseController.updateCourse);
router.delete('/:id', validateId , CourseController.deleteCourse);

module.exports = router;
