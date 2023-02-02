/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { execSync } = require('child_process');
const testDataPostExam = require('./testData/testDataPostExam');
const testDataPutExam = require('./testData/testDataPutExam');

describe('Testing all EXAM routes', () => {
  beforeAll(() => {
    execSync('npm run undo:migrate:test:all');
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });

  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });

  describe('Testing GET EXAM route', () => {
    test('should respond with a 200 status code to GET all exams', async () => {
      const response = await request(app).get('/exams');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
    });
    describe.each([
      [3, 200],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing GET ONE EXAM route with exam id', (examId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).get(`/exams/${examId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });

  describe('Testing POST EXAM route', () => {
    describe.each(testDataPostExam)('Testing POST EXAM route', (newExam, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).post('/exams')
          .send(newExam);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });

  describe('Testing PUT EXAM route', () => {
    describe.each(testDataPutExam)('Testing PUT EXAM route', (examId, updatedExam, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).put(`/exams/${examId}`)
          .send(updatedExam);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });

  describe('Testing DELETE EXAM route', () => {
    describe.each([
      [3, 202],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing DELETE ONE exam route', (examId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`/exams/${examId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });
});
