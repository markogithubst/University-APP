/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { execSync } = require('child_process');

describe('Testing all MAJOR routes', () => {
  beforeAll(() => {
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });

  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });

  describe('Testing GET MAJOR route', () => {
    test('should respond with a 200 status code to GET all majors', async () => {
      const response = await request(app).get('/majors');
      expect(response.statusCode).toBe(200);
    });
    describe.each([
      [3, 200],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing GET MAJOR route with major id', (majorId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).get(`/majors/${majorId}`);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });

  describe('Testing POST MAJOR route', () => {
    describe.each([
      [{ name: 'Test Major' }, 201],
      [{ name: '' }, 400],
      [{ name: '1' }, 400],
      [{ name: 'a' }, 400],
      [{ name: 'Test Major' }, 500]
    ])('Testing POST MAJOR route', (majorName, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).post('/majors')
          .send(majorName);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });

  describe('Testing PUT MAJOR route', () => {
    describe.each([
      [1, { name: 'Test Major sdfgds' }, 200],
      [2, { name: '' }, 400],
      [0, { name: '1a' }, 400],
      [0, { name: 'sakdjgfihsdfkbashdbfaklhsdfbklashdbfaklsdfbhksadfbakhsdbfadsfhlbkhalsdbvkahldsvb' }, 400]
    ])('Testing PUT MAJOR route', (majorId, updatedMajor, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).put(`/majors/${majorId}`)
          .send(updatedMajor);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });

  describe('Testing DELETE MAJOR route', () => {
    describe.each([
      [3, 204],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing GET MAJOR route with major id', (majorId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`/majors/${majorId}`);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });
});
