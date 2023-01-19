const express = require('express');
const router = express.Router();
const courseRouter = require('./courseRouter');
const enrollmentRouter = require('./enrollmentRouter');
const examRouter = require('./examRouter');
const professorRouter = require('./professorRouter');
const studentRouter = require('./studentRouter');
const majorRouter = require('./majorRouter');
const departmentRouter = require('./departmentRouter');
const resultRouter = require('./resultRouter');

router.use('/courses', courseRouter);
router.use('/enrollments', enrollmentRouter);
router.use('/exams', examRouter);
router.use('/professors', professorRouter);
router.use('/students', studentRouter);
router.use('/majors', majorRouter);
router.use('/departments', departmentRouter);
router.use('/results', resultRouter);


module.exports = router;