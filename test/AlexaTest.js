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

            var skill = new intent.CountSkill()
            skill.intentHandlers.CountIntent({slots:{num:{name:"num", value:"3"}}}, {}, mockResponse)

            assert.equal(alexaString, "one,two,three")

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

            assert.equal(alexaString, "two,four,six,eight,ten")

        })
    })
})