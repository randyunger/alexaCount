/**
 * Created by randy on 5/7/16.
 */

var assert = require('chai').assert
var expect = require('chai').expect
var intent = require('../src/index.js')
var cmp = require("cmp")

describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5))
            // assert.equal(, )
            expect([1,2,3].indexOf(0)).to.equal(-1)
        })
    })
})