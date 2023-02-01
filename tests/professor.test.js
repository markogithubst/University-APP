/* eslint-disable max-len */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { execSync } = require('child_process');
const testDataPostProfessor = require('./hardcodedTestData/testDataPostProfessor');
const testDataPutProfessor = require('./hardcodedTestData/testDataPutProfessor');

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
      expect(response.headers['content-type']).toMatch(/json/);
    });
    describe.each([
      [3, 200],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing GET PROFESSORS route with professor id to get one PROFESSOR', (professorId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).get(`/professors/${professorId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });

  describe('Testing POST PROFESSORS route', () => {
    describe.each(testDataPostProfessor)('Testing POST PROFESSOR route', (newProfessor, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).post('/professors')
          .send(newProfessor);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });

  describe('Testing PUT PROFESSORS route', () => {
    describe.each(testDataPutProfessor)('Testing PUT PROFESSOR route', (professorId, updatedProfessor, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).put(`/professors/${professorId}`)
          .send(updatedProfessor);
        expect(response.statusCode).toBe(expectedStatus);
      });
    });
  });

  describe('Testing DELETE PROFESSORS route', () => {
    describe.each([
      [3, 202],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing DELETE professor route with professor ID', (professorId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`/professors/${professorId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });

  describe.each([
    [1, {
      student_id: 2,
      grade: 2,
      exam_id: 5
    }, 201],
    [50, {
      student_id: 2,
      grade: 2,
      exam_id: 5
    }, 403],
    [0, {
      student_id: 2,
      grade: 2,
      exam_id: 5
    }, 400],
    ['a', {
      student_id: 2,
      grade: 2,
      exam_id: 5
    }, 400]
  ])('Testing POST PROFESSORS route with professor id to POST one EXAM RESULT', (professorId, newResult, expectedStatus) => {
    test(`should respond with a ${expectedStatus} status code`, async () => {
      const response = await request(app).post(`/professors/add-exam-results/${professorId}`)
        .send(newResult);
      expect(response.statusCode).toBe(expectedStatus);
    });
  });
});
