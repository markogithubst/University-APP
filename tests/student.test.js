/* eslint-disable max-len */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { execSync } = require('child_process');

describe('Testing all STUDENT routes', () => {
  beforeAll(() => {
    execSync('npm run undo:migrate:test:all');
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });

  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });

  describe('Testing GET STUDENTS route', () => {
    test('should respond with a 200 status code to GET all students', async () => {
      const response = await request(app).get('/students');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('Testing POST STUDENTS route', () => {
    describe.each([
      [{
        full_name: 'test this',
        email: 'testing11@something.com',
        address: '22112, New York test',
        phone_number: '14567889',
        major_id: 2
      },
      201],
      [{
        email: 'testing11@something.com',
        address: '22112, New York test',
        phone_number: '14567889',
        major_id: 2
      },
      400],
      [{
        full_name: 'test this',
        address: '22112, New York test',
        phone_number: '14567889',
        major_id: 2
      },
      400],
      [{
        full_name: 'test this',
        email: 'testing11@something.com',
        phone_number: '14567889',
        major_id: 2
      },
      400],
      [{
        full_name: 'test this',
        email: 'testing11@something.com',
        address: '22112, New York test',
        major_id: 2
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
        major_id: 2
      },
      400],
      [{
        full_name: 'test this',
        email: '',
        address: '22112, New York test',
        phone_number: '14567889',
        major_id: 2
      },
      400],
      [{
        full_name: 'test this',
        email: 'testing11@something.com',
        address: '',
        phone_number: '14567889',
        major_id: 2
      },
      400],
      [{
        full_name: 'test this',
        email: 'testing11@something.com',
        address: '22112, New York test',
        phone_number: '',
        major_id: 2
      },
      400],
      [{
        full_name: 'test this',
        email: 'testing11something.com',
        address: '22112, New York test',
        phone_number: '',
        major_id: 2
      },
      400],
      [{
        full_name: 'test this',
        email: 'testing11something.com',
        address: '22112, New York test',
        phone_number: '234',
        major_id: 2
      },
      400],
      [{
        full_name: 'test this',
        email: 'testing11something.com',
        address: '22112, New York test',
        phone_number: '234',
        major_id: 234
      },
      400]
    ])('Testing POST STUDENTS route', (newStudent, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).post('/students')
          .send(newStudent);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });
});
