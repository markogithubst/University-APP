/* eslint-disable max-len */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { execSync } = require('child_process');

describe('Testing all PROFESSOR routes', () => {
  beforeAll(() => {
    execSync('npm run undo:migrate:test:all');
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });

  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });

  describe('Testing GET PROFESSORS route', () => {
    test('should respond with a 200 status code to GET all professors', async () => {
      const response = await request(app).get('/professors');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('Testing POST PROFESSORS route', () => {
    describe.each([
      [{
        full_name: 'test this',
        email: 'testing11@something.com',
        address: '22112, New York test',
        phone_number: '14567889',
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
    ])('Testing POST PROFESSOR route', (newProfessor, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).post('/professors')
          .send(newProfessor);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });
});
