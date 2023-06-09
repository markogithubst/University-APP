/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { execSync } = require('child_process');

describe('Testing all DEPARTMENT routes', () => {
  beforeAll(() => {
    execSync('npm run undo:migrate:test:all');
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });

  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });

  describe('Testing GET DEPARTMENT route', () => {
    test('should respond with a 200 status code to GET all departments', async () => {
      const response = await request(app).get('/departments');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toBeInstanceOf(Array);
    });
    describe.each([
      [3, 200],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing GET DEPARTMENT route with department id', (departmentId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).get(`/departments/${departmentId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });

  describe('Testing POST DEPARTMENT route', () => {
    describe.each([
      [{ name: 'Test Department' }, 201],
      [{ name: '' }, 400],
      [{ name: '1' }, 400],
      [{ name: 'a' }, 400],
      [{ name: 'Test Department' }, 500]
    ])('Testing POST DEPARTMENT route', (departmentName, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).post('/departments')
          .send(departmentName);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });

  describe('Testing PUT DEPARTMENT route', () => {
    describe.each([
      [1, { name: 'Test Department sdfgds' }, 200],
      [2, { name: '' }, 400],
      [0, { name: '1a' }, 400],
      [0, { name: 'sakdjgfihsdfkbashdbfaklhsdfbklashdbfaklsdfbhksadfbakhsdbfadsfhlbkhalsdbvkahldsvb' }, 400]
    ])('Testing PUT DEPARTMENT route', (departmentId, updatedDepartment, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).put(`/departments/${departmentId}`)
          .send(updatedDepartment);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });

  describe('Testing DELETE DEPARTMENT route', () => {
    describe.each([
      [3, 202],
      [50, 404],
      [0, 400],
      ['a', 400]
    ])('Testing DELETE DEPARTMENT route with department id', (departmentId, expectedStatus) => {
      test(`should respond with a ${expectedStatus} status code`, async () => {
        const response = await request(app).delete(`/departments/${departmentId}`);
        expect(response.statusCode).toBe(expectedStatus);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
  });
});
