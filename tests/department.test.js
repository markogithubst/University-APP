/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { execSync } = require('child_process');

describe('Testing GET DEPARTMENT route', () => {
  beforeAll(() => {
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });
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
  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });
});

describe('Testing POST DEPARTMENT route', () => {
  beforeAll(() => {
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });
  test('should respond with a 201 status code to POST(create) one department', async () => {
    const newDepartment = { name: 'Test Department' };
    const response = await request(app)
      .post('/departments')
      .send(newDepartment);
    expect(response.statusCode).toBe(201);
  });
  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });
});

describe('Testing PUT DEPARTMENT route', () => {
  beforeAll(() => {
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });
  test('should respond with a 200 status code to PUT(update) one department', async () => {
    const departmentId = 2;
    const updatedDepartment = { name: 'Test Department sdfgds' };
    const response = await request(app)
      .put(`/departments/${departmentId}`)
      .send(updatedDepartment);
    expect(response.statusCode).toBe(200);
  });
  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });
});

describe('Testing DELETE DEPARTMENT route', () => {
  beforeAll(() => {
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });
  test('should respond with a 204 status code to DELETE one department', async () => {
    const departmentId = 2;
    const response = await request(app)
      .delete(`/departments/${departmentId}`);
    expect(response.statusCode).toBe(204);
  });
  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });
});
