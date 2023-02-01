const testDataPutCourse = [
  [1, {
    name: 'test creating Course',
    credit_hours: 50,
    professor_id: 2
  },
  201],
  [2, {
    credit_hours: 50,
    professor_id: 2
  },
  400],
  [2, {
    name: 'test creating Course',
    professor_id: 2
  },
  400],
  [2, {
    name: 'test creating Course',
    credit_hours: 50
  },
  400],
  [2, {
    name: '',
    credit_hours: 50,
    professor_id: 2
  },
  400],
  [2, {
    name: 'test creating Course',
    credit_hours: 0,
    professor_id: 2
  },
  400]
];

module.exports = testDataPutCourse;
