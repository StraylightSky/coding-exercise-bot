'use strict';

const Path = require('path');

module.exports = [
  // Serve static files
  {
    method: 'GET',
    path: '/assets/js/{file*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../../assets/js')
      }
    }
  },
  {
    method: 'GET',
    path: '/assets/css/{file*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../../assets/css')
      }
    }
  },
  {
    method: 'GET',
    path: '/assets/img/{file*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../../assets/img')
      }
    }
  },

  // Actual routes
  {
    method: 'GET',
    path: '/',
    handler: {
      file: {
        path: Path.join(__dirname, '../../index.html')
      }
    }
  },

  // API routes
  {
    method: 'GET',
    path: '/api/v1/test',
    handler: (request, reply) => {
      reply({data: 'test data'})
    }
  }
];