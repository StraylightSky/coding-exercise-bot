// Heavily influenced by Botkit's slack_bot.js starting point
'use strict';

if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

let Botkit = require('botkit');

// "Existence is pain to a Meeseeks, Jerry."
let frustrationCounter = 0;
let frustratedReplies = [
  'Aww c\'mon!',
  'I can\'t take this anymore! I just wanna die!',
  'Meeseeks are not born into this world fumbling for meaning! We are created to serve a singular purpose for which we will go to any lengths to fulfill!'
];

let replies = ['Yessiree!', 'Ooooh OK!', 'Ooooh yeah~! Yessiree!', 'Can do! I\'m Mr. Meeseeks!'];

let controller = Botkit.slackbot({
  debug: true,
});

let bot = controller.spawn({
  token: process.env.token
}).startRTM();

function formatUptime(uptime) {
  let unit = 'second';
  if (uptime > 60) {
    uptime = uptime / 60;
    unit = 'minute';
  }
  if (uptime > 60) {
    uptime = uptime / 60;
    unit = 'hour';
  }
  if (uptime != 1) {
    unit = unit + 's';
  }

  uptime = uptime + ' ' + unit;
  return uptime;
}

function returnRandomReply(repliesArray) {
  let randomIndex = Math.floor(Math.random() * repliesArray.length);

  return repliesArray[randomIndex];
}

controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', (bot, message) => {
  bot.reply(message, 'Hello! I\'m Mr. Meeseeks! Look at me!!');
});

controller.hears(['can you (.*)', 'help me (.*)'], 'direct_message,direct_mention,mention', (bot, message) => {
  bot.reply(message, returnRandomReply(replies));
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

          if (frustrationCounter > 2) {
            let uptime = formatUptime(process.uptime);

            convo.say(returnRandomReply(frustratedReplies));
            convo.say('I\'ve been alive for ' + uptime + '! That\'s an eternity to a Meeseeks!!');
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