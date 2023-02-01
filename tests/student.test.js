/* eslint-disable max-len */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { execSync } = require('child_process');
const testDataPostStudent = require('./hardcodedTestData/testDataPostStudent');
const testDataPutStudent = require('./hardcodedTestData/testDataPutStudent');

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
      expect(response.headers['content-type']).toMatch(/json/);
    });
    describe.each([
      [3, 200],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing GET STUDENTS route with student id to get one STUDENT', (studentId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).get(`/students/${studentId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
    describe.each([
      [3, 200],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing GET STUDENTS route with student id to get own results', (studentId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).get(`/students/own-results/${studentId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });

  describe('Testing POST STUDENTS route', () => {
    describe.each(testDataPostStudent)('Testing POST STUDENTS route', (newStudent, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).post('/students')
          .send(newStudent);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });

  describe('Testing PUT STUDENTS route', () => {
    describe.each(testDataPutStudent)('Testing PUT STUDENTS route', (studentId, updatedStudent, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).put(`/students/${studentId}`)
          .send(updatedStudent);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });

  describe('Testing DELETE STUDENTS route', () => {
    describe.each([
      [3, 202],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing DELETE studens route with student ID', (studentId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`/students/${studentId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });
});
