'use strict';

require('dotenv').config();

const express = require('express');
const Q = require('@nmq/q/client');

const app = express();

app.get('/', (request, response) => {
  response.send('Main Page');
});

app.get('/database', (request, response) => {
  let data = {
    name: 'read',
    message: 'This is from the get request',
  };

  Q.publish('database', 'read', JSON.stringify(data));
  response.send('In the GET request');
});

app.post('/database', (request, response) => {
  let data = {
    name: 'create',
    message: 'This is from the post request',
  };

  Q.publish('database', 'create', data);
  response.send('In the POST request');
});

app.put('/database', (request, response) => {
  let data = {
    name: 'update',
    message: 'This is from the put request',
  };

  Q.publish('database', 'update', data);
  response.send('In the PUT request');
});

app.delete('/database', (request, response) => {
  let data = {
    name: 'delete',
    message: 'This is from the delete request',
  };

  Q.publish('database', 'delete', data);
  response.send('In the DELETE request');
});

app.use((request, response) => {
  let data = {
    name: 'error',
    message: 'An error has occured',
  };
  Q.publish('database', 'error', data);
});

module.exports = {
  server: app,
  start: port =>{
    let PORT = process.env.PORT || port;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

