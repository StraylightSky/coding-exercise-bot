// Heavily influenced by Botkit's slack_bot.js starting point
'use strict';

if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

let Botkit = require('botkit');

// "Existence is pain to a Meeseeks, Jerry."
let frustrationCounter = 0;
let frustratedResponses = ['Aww c\'mon!', 'I can\'t take this anymore! I just wanna die!'];

let controller = Botkit.slackbot({
  debug: true,
});

let bot = controller.spawn({
  token: process.env.token
}).startRTM();

controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', (bot, message) => {
  bot.reply(message, 'Hello! I\'m Mr. Meeseeks! Look at me!!');
});

// Jerry special
controller.hears(['i would like to take two strokes off my golf game'],
  'direct_message,direct_mention,mention', (bot, message) => {
    bot.api.reactions.add({
      timestamp: message.ts,
      channel: message.channel,
      name: 'golfer',
    }, (err, res) => {
      if (err) {
        bot.botkit.log(err);
      }
    });

    bot.reply(message, 'Oooh yeah! Can do!!');
  });

controller.hears(['thanks mr. meeseeks', 'thanks'], 'direct_message,direct_mention,mention', (bot, message) => {
  bot.startConversation(message, (err, convo) => {
    convo.ask('Have I fulfilled my purpose for your request? Look at me!', [
      {
        pattern: bot.utterances.yes,
        callback: (response, convo) => {
          convo.say('OOOH YES! *poof*');
          convo.next();
          setTimeout(() => {
            process.exit();
          }, 2000);
        }
      },
      {
        pattern: bot.utterances.no,
        default: true,
        callback: (response, convo) => {
          frustrationCounter += 1;

          // TODO: Pseudo-randomly choose a frustrated response
          if (frustrationCounter > 3) {
            convo.say('Awww c\'mon!');
          } else {
            convo.say('That\'s ok, I\'m Mr. Meeseeks, look at me!');
          }
          convo.next();
        }
      }
    ]);
  });
});

controller.hears(['who are you', 'what is your name'],
  'direct_message,direct_mention,mention', (bot, message) => {
    bot.reply(message, 'Oooh good question! I\'m Mr. Meeseeks, look at me!!');
  });