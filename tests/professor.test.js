/* eslint-disable max-len */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { execSync } = require('child_process');
const testDataPostProfessor = require('./testData/testDataPostProfessor');
const testDataPutProfessor = require('./testData/testDataPutProfessor');

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
      const login = await request(app).post('/login').send({ email: 'johndoe@fesb.com', password: 'studentpassword' });
      const token = login.headers.authorization;
      const response = await request(app).get('/professors').set('Authorization', `${token}`);
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toBeInstanceOf(Array);
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
});
