const testDataPostCourse = [
  [{
    name: 'test creating Course1',
    credit_hours: 50,
    professor_id: 2
  },
  201],
  [{
    credit_hours: 50,
    professor_id: 2
  },
  400],
  [{
    name: 'test creating Course',
    professor_id: 2
  },
  400],
  [{
    name: 'test creating Course',
    credit_hours: 50
  },
  400],
  [{
    name: '',
    credit_hours: 50,
    professor_id: 2
  },
  400],
  [{
    name: 'test creating Course',
    credit_hours: 0,
    professor_id: 2
  },
  400],
  [{
    name: 'test creating Course1',
    credit_hours: 50,
    professor_id: 245
  },
  500]
];

module.exports = testDataPostCourse;
