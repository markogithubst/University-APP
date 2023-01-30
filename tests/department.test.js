/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

describe('Testing GET department route', () => {
  test('should respond with a 200 status code to GET all departments', async () => {
    const response = await request(app).get('/departments');
    expect(response.statusCode).toBe(200);
  });
  test('should respond with a 200 status code to GET one department', async () => {
    const departmentId = 3;
    const response = await request(app).get(`/departments/${departmentId}`);
    expect(response.statusCode).toBe(200);
  });
  test('should respond with a 404 status code for not finding department', async () => {
    const departmentId = 50;
    const response = await request(app).get(`/departments/${departmentId}`);
    expect(response.statusCode).toBe(404);
  });
});
