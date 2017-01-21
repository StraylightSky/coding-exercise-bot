# **CarLabs Coding Exercise**

Jan 2017

## **Introduction**

If you’re reading this, then you’re applying for a job at CarLabs. Thanks for your interest in joining our team! If you’ve made it this far, know that we already think you know your stuff; it’s just a matter of figuring out if your knowledge, style, and technique are a good fit for our somewhat-obscure needs.

## **Purpose of this Exercise**

Our success as a company rests on our ability to execute and change direction quickly. So, in addition to gaining insight into your coding style and technique, we want to see how you respond to the unfamiliar.

## **Instructions**

You will build a bot. This is intentionally open-ended, but many (free) resources and tutorials have been curated for you and are in the section below, [Resources](https://github.com/Revmaker/coding-exercise-bot/blob/master/README.md#resources). You're welcome to make any bot you can imagine, but we have listed some ideas so you don't have to come up with a product: [Ideas](https://github.com/Revmaker/coding-exercise-bot/blob/master/README.md#ideas).

You’ll make decisions such as:

* Should you code everything from scratch, start with a framework like Botkit, or use a more all-in-one GUI like API.ai?

* Will the frontend of your bot be Messenger, Slack, or JS/HTML/CSS?

* What will you show off? Will you tweak an already working bot and focus on the front end? Or will you show off your backend skills?

#### TODO

1. Clone this repo and rename this file to `INSTRUCTIONS.md` - we want to know that you use Git(Hub) effectively, and we’ll use your git history and commit messages to understand what you did. NOTE: if you are starting with a cloned repo (a tutorial, a bot that you are extending, etc), then you can just add this file as `INSTRUCTIONS.md` without cloning this repo.

2. Create a `README.md` and use it to document instructions and explain why you made decisions

3. Get coding! The cloned repo should be all we need to understand what you did and why.

## **Timeline**
We understand that you have a job and a life. Things come up. As long as your commits are small, it's obvious from your commit history how you worked on the project. Given that, we are flexible about the period of time you work in. We estimate this will take 3-5 days, given your other responsibilities, but just keep us posted if the timeline is different. Communication is important, so feel free to contact any of us with any questions, concerns, or request for clarification.

## **Ideas**
- Build a simple bot on API.ai ([tutorial](https://www.sitepoint.com/how-to-build-your-own-ai-assistant-using-api-ai/)), and make a HTML/CSS/JS front-end for it
- Make a web or Messenger front end for, and add functionality to [Port Namer](https://github.com/odannyc/portnamer)
- Use a [computer vision API](https://www.sighthound.com/products/cloud) to make a Messenger bot that can tell you what cars are in a picture

## **Resources**

#### *Bot Tools / Frameworks*

[BotKit](https://github.com/howdyai/botkit)

[Init.ai](https://www.init.ai/)

[api.ai](https://api.ai/)

[MSFT Bot Framework](https://dev.botframework.com/?ref=stackshare)

[Recast.ai](https://recast.ai/)

[GoMix Bots](https://gomix.com/community/handy-bots)

#### *Useful APIs*

[WolframAlpha](http://products.wolframalpha.com/api/) - Knows a lot of facts. Siri uses to answer questions

[Sight Hound](https://www.sighthound.com/products/cloud) - Computer Image Recognition API, identify faces, landmarks, etc...

[Text Analysis API](https://developer.aylien.com/) - sentiment analysis, summarization, classification...

#### *Deployment*

[now](https://zeit.co/now/)

[Heroku](https://www.heroku.com/)

#### *Tutorials and other useful projects*

[Building a bot with API.ai](https://www.sitepoint.com/how-to-build-your-own-ai-assistant-using-api-ai/)

[React Chat App](https://medium.com/front-end-hacking/react-webpack-and-horizon-quick-start-b9335c1ece53#.je2aeupxx)

[Slackbot tutorial](https://medium.com/@samhavens/building-somerset-d518ba284c49#.gb1y45wx1)

[Messenger bot with Wit tutorial](https://chatbotsmagazine.com/psst-time-to-jack-up-your-dumb-chat-bot-brain-using-wit-ai-aada04e8a303#.5gbrvihwn)

## **FYI**

**Background on our Product**

CarLabs’ primary product is Carla - a bot that can talk about and give advice on car-related decisions. As such, we face many interesting challenges. An obvious one is how to understand and process natural language. However, another interesting challenge is designing a user interface and experience in a conversational setting. We believe the industry is in the early days of solving this problem.

**Our Stack**

CarLabs’ web applications are written in React (though some prototypes are still being ported from jQuery). However, as a messaging product, one of Carla’s front-ends is Messenger - a rigid, non-customizable platform (with the exception of webviews, a new addition). We also see Carla living, potentially, on Amazon Echo/Google Home.

Backends are written in Node v6, with Redis for caching, PostgreSQL for persistence, Flow for types (when needed), and Hapi or Express depending on the size of the application. Tests are written in Elixir. CarLabs’ data pipeline is a PHP7/MySQL application, with services written in PHP, Python, and R.

Parts of our stack are Dockerized, and we continue to move in that direction. In production, we are currently all-AWS, but since we won a Joyent competition, we are testing out their cloud as well.

**Contact Info**
Sam is best reachable on Slack. If you are reading this, you should have recieved a single-channel guest invite to our company Slack.
