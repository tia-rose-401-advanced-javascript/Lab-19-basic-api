'use strict';

require('dotenv').config();

const express = require('express');
const Q = require('@nmq/q/client');

const app = express();

app.get('/database', (response) => {
  let data = {
    name: 'read',
    message: 'This is from the get request',
  };

  Q.publish('database', 'read', data);
  response.send('get');
});

app.post('/database', (response) => {
  let data = {
    name: 'create',
    message: 'This is from the post request',
  };

  Q.publish('database', 'create', data);
  response.send('post');
});

app.put('/database', (response) => {
  let data = {
    name: 'update',
    message: 'This is from the put request',
  };

  Q.publish('database', 'update', data);
  response.send('put');
});

app.delete('/database', (response) => {
  let data = {
    name: 'delete',
    message: 'This is from the delete request',
  };

  Q.publish('database', 'delete', data);
  response.send('delete');
});

app.use((response) => {
  let data = {
    name: 'error',
    message: 'An error has occured',
  };
  Q.publish('database', 'error', data);
});

module.exports = {
  server: app,
  start: port =>{
    let PORT = port || process.env.PORT;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

