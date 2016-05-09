require('dotenv').load();
var util = require("util");

var AlexaSkill = require('./AlexaSkill')
  , Counter    = require('./count').Counter
  , APP_ID     = process.env.APP_ID

var handleCountRequest = function(intent, session, response){
  console.log("intent.slots is :")
  console.log(util.inspect(intent, {showHidden: false, depth: null}))
  
  const endNum = intent.slots.num.value
  var incNum = intent.slots.inc.value
  if(incNum == undefined) incNum = 1
  const ints = new Counter().count(0, endNum, incNum)
  
  const speech = ints.join()
  const heading = "Counting"
  response.tellWithCard(speech, heading, speech);
};

var CountSkill = function(){
  AlexaSkill.call(this, APP_ID);
};

CountSkill.prototype = Object.create(AlexaSkill.prototype);
CountSkill.prototype.constructor = CountSkill;

CountSkill.prototype.eventHandlers.onSessionStarted = function(sessionStartedRequest, session){
  // What happens when the session starts? Optional
  console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId
      + ", sessionId: " + session.sessionId);
};

CountSkill.prototype.eventHandlers.onLaunch = function(launchRequest, session, response){
  // This is when they launch the skill but don't specify what they want. Prompt
  // them for their bus stop
  var output = 'Welcome to the counting game. ' +
    'Which number do you want me to count to?';

  var reprompt = 'Which number do you want me to count to? ' +
      'You can also tell me how many to skip. For example, you could say ' +
      'Alexa, count to 100 by tens.';

  response.ask(output, reprompt);

  console.log("onLaunch requestId: " + launchRequest.requestId
      + ", sessionId: " + session.sessionId);
};

CountSkill.prototype.intentHandlers = {
  CountIntent: function(intent, session, response){
    handleCountRequest(intent, session, response);
  },

  HelpIntent: function(intent, session, response){
    var speechOutput = 'I can count to any number. But if its too high it may take a while.' +
      'Which number would you like to count to?';
    response.ask(speechOutput);
  }
};

exports.handler = function(event, context) {
  var skill = new CountSkill();
  skill.execute(event, context);
};

exports.CountSkill = CountSkill

// exports.handler = function(event, context) {
//     var skill = new BusSchedule();
//     skill.execute(event, context);
// };

// exports.BusSchedule = BusSchedule;
