const testDataPostProfessor = [
  [{
    full_name: 'test this',
    email: 'testing11@something.com',
    address: '22112, New York test',
    phone_number: '14567889',
    password: 'testpassword33',
    department_id: 2
  },
  201],
  [{
    email: 'testing11@something.com',
    address: '22112, New York test',
    phone_number: '14567889',
    department_id: 2
  },
  400],
  [{
    full_name: 'test this',
    address: '22112, New York test',
    phone_number: '14567889',
    department_id: 2
  },
  400],
  [{
    full_name: 'test this',
    email: 'testing11@something.com',
    phone_number: '14567889',
    department_id: 2
  },
  400],
  [{
    full_name: 'test this',
    email: 'testing11@something.com',
    address: '22112, New York test',
    department_id: 2
  },
  400],
  [{
    full_name: 'test this',
    email: 'testing11@something.com',
    address: '22112, New York test',
    phone_number: '14567889'
  },
  400],
  [{
    full_name: '',
    email: 'testing11@something.com',
    address: '22112, New York test',
    phone_number: '14567889',
    department_id: 2
  },
  400],
  [{
    full_name: 'test this',
    email: '',
    address: '22112, New York test',
    phone_number: '14567889',
    department_id: 2
  },
  400],
  [{
    full_name: 'test this',
    email: 'testing11@something.com',
    address: '',
    phone_number: '14567889',
    department_id: 2
  },
  400],
  [{
    full_name: 'test this',
    email: 'testing11@something.com',
    address: '22112, New York test',
    phone_number: '',
    department_id: 2
  },
  400],
  [{
    full_name: 'test this',
    email: 'testing11something.com',
    address: '22112, New York test',
    phone_number: '',
    department_id: 2
  },
  400],
  [{
    full_name: 'test this',
    email: 'testing11something.com',
    address: '22112, New York test',
    phone_number: '234',
    department_id: 2
  },
  400],
  [{
    full_name: 'test this',
    email: 'testing11something.com',
    address: '22112, New York test',
    phone_number: '234',
    department_id: 200
  },
  400]
];

module.exports = testDataPostProfessor;
