const testDataPutCourse = [
  [1, {
    name: 'test creating Exam1',
    date_and_time: '2018-11-29T19:25:32+00:00',
    course_id: 2
  },
  200],
  [2, {
    date_and_time: '2018-11-28T18:25:32+00:00',
    course_id: 2
  },
  400],
  [2, {
    name: 'test creating Exam',
    course_id: 2
  },
  400],
  [2, {
    name: 'test creating Exam',
    date_and_time: '2018-11-28T18:25:32+00:00'
  },
  400],
  [2, {
    name: '',
    date_and_time: '2018-11-28T18:25:32+00:00',
    course_id: 2
  },
  400],
  [2, {
    name: 'test creating Exam',
    date_and_time: '2018-2:00',
    course_id: 2
  },
  400],
  [1, {
    name: 'test creating Exam',
    date_and_time: '2018-11-28T18:25:32+00:00',
    course_id: ''
  },
  400],
  ['a', {
    name: 'test creating Exam',
    date_and_time: '2018-11-28T18:25:32+00:00',
    course_id: 2
  },
  400]
];

module.exports = testDataPutCourse;
