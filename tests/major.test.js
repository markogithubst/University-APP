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
  test('should respond with a 200 status code to GET one major', async () => {
    const majorId = 1;
    const response = await request(app).get(`/majors/${majorId}`);
    expect(response.statusCode).toBe(200);
  });
  test('should respond with a 404 status code for not finding major', async () => {
    const majorId = 88;
    const response = await request(app).get(`/majors/${majorId}`);
    expect(response.statusCode).toBe(404);
  });
  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });
});

describe('Testing POST MAJOR route', () => {
  beforeAll(() => {
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });
  test('should respond with a 201 status code to POST one major', async () => {
    const newMajor = { name: 'Test Major' };
    const response = await request(app)
      .post('/majors')
      .send(newMajor);
    expect(response.statusCode).toBe(201);
  });
  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });
});

describe('Testing PUT MAJOR route', () => {
  beforeAll(() => {
    execSync('npm run migrate:test');
    execSync('npm run seed:test');
  });
  test('should respond with a 200 status code to PUT(update) one major', async () => {
    const majorId = 2;
    const updatedMajor = { name: 'Test Major sdfgds' };
    const response = await request(app)
      .put(`/departments/${majorId}`)
      .send(updatedMajor);
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
  test('should respond with a 204 status code to DELETE one major', async () => {
    const majorId = 2;
    const response = await request(app)
      .delete(`/departments/${majorId}`);
    expect(response.statusCode).toBe(204);
  });
  afterAll(() => {
    execSync('npm run undo:migrate:test:all');
  });
});
