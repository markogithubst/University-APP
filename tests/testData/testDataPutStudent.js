const testDataPutStudent = [
  [1, {
    full_name: 'test this',
    email: 'testingtesting@something.com',
    address: '22112, New York test',
    password: 'fdgbfjkgbdsfjds',
    phone_number: '547960',
    major_id: 2,
    role_id: 2
  },
  200],
  [2, {
    email: 'testing11@something.com',
    address: '22112, New York test',
    phone_number: '14567889',
    major_id: 2
  },
  400],
  [2, {
    full_name: 'test this',
    address: '22112, New York test',
    phone_number: '14567889',
    major_id: 2
  },
  400],
  [2, {
    full_name: 'test this',
    email: 'testing11@something.com',
    phone_number: '14567889',
    major_id: 2
  },
  400],
  [2, {
    full_name: 'test this',
    email: 'testing11@something.com',
    address: '22112, New York test',
    major_id: 2
  },
  400],
  [2, {
    full_name: 'test this',
    email: 'testing11@something.com',
    address: '22112, New York test',
    phone_number: '14567889'
  },
  400],
  [2, {
    full_name: '',
    email: 'testing11@something.com',
    address: '22112, New York test',
    phone_number: '14567889',
    major_id: 2
  },
  400],
  [2, {
    full_name: 'test this',
    email: '',
    address: '22112, New York test',
    phone_number: '14567889',
    major_id: 2
  },
  400],
  [2, {
    full_name: 'test this',
    email: 'testing11@something.com',
    address: '',
    phone_number: '14567889',
    major_id: 2
  },
  400],
  [2, {
    full_name: 'test this',
    email: 'testing11@something.com',
    address: '22112, New York test',
    phone_number: '',
    major_id: 2
  },
  400],
  [2, {
    full_name: 'test this',
    email: 'testing11something.com',
    address: '22112, New York test',
    phone_number: '',
    major_id: 2
  },
  400],
  [2, {
    full_name: 'test this',
    email: 'testing11something.com',
    address: '22112, New York test',
    phone_number: '234',
    major_id: 2
  },
  400],
  [2, {
    full_name: 'test this',
    email: 'testing11something.com',
    address: '22112, New York test',
    phone_number: '234',
    major_id: 200
  },
  400],
  [276, {
    full_name: 'test this',
    email: 'testing11something.com',
    address: '22112, New York test',
    phone_number: '234',
    major_id: 4
  },
  400],
  ['s', {
    full_name: 'test this',
    email: 'testing11something.com',
    address: '22112, New York test',
    phone_number: '234',
    major_id: 4
  },
  400]
];

module.exports = testDataPutStudent;
