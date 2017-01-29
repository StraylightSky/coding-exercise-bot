'use strict';

const recastai = require('recastai');
const client = new recastai.Client(process.env.RECAST_AI_TOKEN, 'en');

let service = {
  handlePost: handlePost
}

function handlePost(request, reply) {
  client
    .textConverse(request.payload.text)
    .then((res) => {
      return reply(res.reply());
    });
}

module.exports = service;