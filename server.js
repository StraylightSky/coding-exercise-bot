'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const dotenv = require('dotenv');

const server = new Hapi.Server();

dotenv.config();

server.connection({
  host: 'localhost',
  port: 8181
});

// Register plugins
server.register(Inert, () => {});

// Serve static files
server.route({
  method: 'GET',
  path: '/assets/js/{file*}',
  handler: {
    directory: {
      path: Path.join(__dirname, '/react/assets/js')
    }
  }
});

server.route({
  method: 'GET',
  path: '/assets/css/{file*}',
  handler: {
    directory: {
      path: Path.join(__dirname, '/react/assets/css')
    }
  }
});

server.route({
  method: 'GET',
  path: '/assets/img/{file*}',
  handler: {
    directory: {
      path: Path.join(__dirname, '/react/assets/img')
    }
  }
});

// Actual routes
server.route({
  method: 'GET',
  path: '/',
  handler: {
    file: {
      path: Path.join(__dirname, '/react/index.html')
    }
  }
});

// API routes
server.route({
  method: 'GET',
  path: '/api/v1',
  handler: (request, reply) => {
    reply({ data: 'test data' })
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
