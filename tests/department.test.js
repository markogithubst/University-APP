/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

describe('GET /departments', () => {
  it('should return a list of departments', async () => {
    const result = await request(app).get('/departments');
    expect(result.statusCode).toEqual(200);
  });
});
