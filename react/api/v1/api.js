'use strict';

const recastai = require('recastai');
const client = new recastai.Client(process.env.RECAST_AI_TOKEN, 'en');
const axios = require('axios');

let service = {
  handlePost: handlePost
}

function handlePost(request, reply) {
  client
    .textConverse(request.payload.text)
    .then((res) => {
      console.log(res.reply());
    });
}

module.exports = service;