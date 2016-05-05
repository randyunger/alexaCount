var assert = require('chai').assert
var bus = require('../src/index.js')

describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5))
            assert.equal(-1, [1,2,3].indexOf(0))
        })
    })
})

describe('Bus Sched', function() {
    describe('something', function () {
        it('should new', function () {
            console.log("a test")
            const newBus = new bus.BusSchedule()
            assert(newBus != undefined)
        })
    })
})

