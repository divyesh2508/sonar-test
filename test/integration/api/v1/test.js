const request = require('supertest');
const express = require('express');
const app = express();
// const testRoutes = require('/controllers/api/v1/test');
const testRoutes = require('../../../../controllers/api/v1/test');


app.use('/test', testRoutes); // Should be a valid middleware function

describe('GET /test', () => {
  it('should return test route response', async () => {
    const res = await request(app).get('/test');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Test route');
  });
});

// #hhrad