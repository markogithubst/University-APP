/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { execSync } = require('child_process');

describe('Testing all ENROLLMENT routes', () => {
  beforeAll(() => {
    execSync('npm run undo:migrate:test:all');
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });

  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });

  describe('Testing GET ENROLLMENT route', () => {
    test('should respond with a 200 status code to GET all enrollments', async () => {
      const response = await request(app).get('/enrollments');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
    });
    describe.each([
      [3, 200],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing GET ENROLLMENT BY STUDENT ID route ', (studentId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).get(`/enrollments/student/${studentId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
    describe.each([
      [3, 200],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing GET ENROLLMENT BY COURSE ID route ', (courseId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).get(`/enrollments/course/${courseId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });

  describe('Testing DELETE ENROLLMENT route', () => {
    describe.each([
      [1, 1, 202],
      [50, 1, 404],
      [0, 1, 400],
      ['a', 1, 400],
      [2, 5, 202],
      [1, 50, 404],
      [1, 'b', 400]
    ])('Testing DELETE ENROLLMENT route', (firstId, secondId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`/enrollments/${firstId}/${secondId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });
});
