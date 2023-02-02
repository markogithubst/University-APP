const testDataPostExam = [
  [{
    name: 'test creating Exam',
    date_and_time: '2018-11-28T18:25:32+00:00',
    course_id: 2
  },
  201],
  [{
    name: 'test creating Exam',
    course_id: 2
  },
  400],
  [{
    name: 'test creating Exam',
    date_and_time: '2018-11-28T18:25:32+00:00'
  },
  400],
  [{
    date_and_time: '2018-11-28T18:25:32+00:00',
    course_id: 2
  },
  400],
  [{
    name: '',
    date_and_time: '2018-11-28T18:25:32+00:00',
    course_id: 2
  },
  400],
  [{
    name: 'test creating Exam',
    date_and_time: '2018-11-',
    course_id: 2
  },
  400],
  [{
    name: 'test creating Exam',
    date_and_time: '2018-11-28T18:25:32+00:00',
    course_id: 'a'
  },
  400]
];

module.exports = testDataPostExam;
