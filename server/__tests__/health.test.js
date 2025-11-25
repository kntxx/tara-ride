const request = require('supertest');
const express = require('express');

// Sample test for server
describe('Server Health Check', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.get('/api/health', (req, res) => {
      res.json({ status: 'ok', message: 'Tito Ride API is healthy' });
    });
  });

  it('should return health status', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});
