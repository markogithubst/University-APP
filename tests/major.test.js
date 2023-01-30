/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { execSync } = require('child_process');

describe('Testing GET MAJOR route', () => {
  beforeAll(() => {
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });
  test('should respond with a 200 status code to GET all MAJORS', async () => {
    const response = await request(app).get('/majors');
    expect(response.statusCode).toBe(200);
  });
  test('should respond with a 200 status code to GET one department', async () => {
    const majorId = 1;
    const response = await request(app).get(`/majors/${majorId}`);
    expect(response.statusCode).toBe(200);
  });
  test('should respond with a 404 status code for not finding department', async () => {
    const majorId = 88;
    const response = await request(app).get(`/majors/${majorId}`);
    expect(response.statusCode).toBe(404);
  });
  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });
});
