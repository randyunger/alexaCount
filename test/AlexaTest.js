/**
 * Created by randy on 5/7/16.
 */

var assert = require('chai').assert
var expect = require('chai').expect
var intent = require('../src/index.js')
var cmp = require("cmp")

describe('Array', function() {
    describe('intent', function () {

        it('should handle count request', function () {

            var alexaString = undefined

            var mockResponse = {
                tellWithCard: function(str){
                    console.log("Alexa will say: " + str)
                    alexaString = str
                }
            }

            const mockIntent =
            {slots:{
                num:{name:"num", value:"3"}
                ,inc:{name:"inc"}
            }}

            var skill = new intent.CountSkill()
            skill.intentHandlers.CountIntent(mockIntent, {}, mockResponse)

            assert.equal(alexaString, "one, two, three")

        })

        it('should handle count request with skipping', function () {

            var alexaString = undefined

            var mockResponse = {
                tellWithCard: function(str){
                    console.log("Alexa will say: " + str)
                    alexaString = str
                }
            }

            const mockIntent =
            {slots:{
                num:{name:"num", value:"10"}
                ,inc:{name:"inc", value:"2"}
            }}

            var skill = new intent.CountSkill()
            skill.intentHandlers.CountIntent(mockIntent, {}, mockResponse)

            assert.equal(alexaString, "two, four, six, eight, ten")

        })

        it('should gracefully handle a request for too many numbers', function () {

            var alexaString = undefined

            var mockResponse = {
                tellWithCard: function(str){
                    console.log("Alexa will say: " + str)
                    alexaString = str
                }
            }

            const mockIntent =
            {slots:{
                num:{name:"num", value:"100000"}
                ,inc:{name:"inc", value:"20"}
            }}

            var skill = new intent.CountSkill()
            skill.intentHandlers.CountIntent(mockIntent, {}, mockResponse)

            assert.equal(alexaString, "That's too many to count! Let's keep it to fifty or fewer numbers.")

        })
    })
})