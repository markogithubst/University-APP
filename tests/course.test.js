/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { execSync } = require('child_process');
const testDataPostCourse = require('./testData/testDataPostCourse');
const testDataPutCourse = require('./testData/testDataPutCourse');

describe('Testing all COURSE routes', () => {
  beforeAll(() => {
    execSync('npm run undo:migrate:test:all');
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });

  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });

  describe('Testing GET COURSES route', () => {
    test('should respond with a 200 status code to GET all courses', async () => {
      const response = await request(app).get('/courses');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toBeInstanceOf(Array);
    });
    describe.each([
      [3, 200,
        {
          name: 'Relational Databases',
          credit_hours: 70,
          professor_id: 2
        }],
      [50, 404,
        {
          message: 'Item not found'
        }],
      [0, 400,
        {
          message: '"id" must be greater than or equal to 1'
        }],
      ['a', 400,
        {
          message: '"id" must be a number'
        }]
    ])('Testing GET COURSES route with course id to get one COURSE', (courseId, expectedStatus, responseBody) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).get(`/courses/${courseId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toStrictEqual(responseBody);
        expect(response.body).toBeInstanceOf(Object);
      });
    });
  });

  describe('Testing POST COURSE route', () => {
    describe.each(testDataPostCourse)('Testing POST COURSE route', (newCourse, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).post('/courses')
          .send(newCourse);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });

  describe('Testing PUT COURSE route', () => {
    describe.each(testDataPutCourse)('Testing PUT COURSE route', (courseId, updatedCourse, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).put(`/courses/${courseId}`)
          .send(updatedCourse);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });

  describe('Testing DELETE COURSE route', () => {
    describe.each([
      [3, 202],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing DELETE course route with course ID', (courseId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`/courses/${courseId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });
});
