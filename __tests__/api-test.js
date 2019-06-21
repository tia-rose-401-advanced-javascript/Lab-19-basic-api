'use strict';

const {server} = require('../api');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server', () => {


  it('should respond properly on request to /database', () => {

    return mockRequest
      .get('/database')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

  it('should respond properly on request to /database', () => {

    return mockRequest
      .post('/database')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

  it('should respond properly on request to /database', () => {

    return mockRequest
      .put('/database')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

  it('should respond properly on request to /database', () => {

    return mockRequest
      .delete('/database')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

});