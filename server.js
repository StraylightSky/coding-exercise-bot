'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const dotenv = require('dotenv').config();

const routes = require(Path.join(__dirname, '/react/api/v1/routes'));

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8181
});

// Register plugins
server.register(Inert, () => {});

server.route(routes);

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
