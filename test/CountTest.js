var assert = require('chai').assert
var expect = require('chai').expect
var count = require('../src/count.js')
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

describe('Counter', function() {
    describe('should count', function (){
        it('should new', function() {
            console.log("new counter")
            const counter = new count.Counter()
            assert.ok(counter != undefined)
        })

        it('should count to three by ones', function() {
            console.log("new counter")
            const counter = new count.Counter()
            const out = counter.enumerate(1, 3)
            assert.ok(cmp.eq([1,2,3], out))
        })

        it('should count to one hundred by tens', function() {
            console.log("new counter")
            const counter = new count.Counter()
            const out = counter.enumerate(0, 100, 10)
            console.log(out)
            assert.ok(cmp.eq([10,20,30,40,50,60,70,80,90,100], out))
        })

        it('should count to one billion by one hundred millions', function() {
            console.log("new counter")
            const counter = new count.Counter()
            const out = counter.enumerate(0, 1000000000, 100000000)
            console.log(out)
            assert.ok(cmp.eq([ 100000000,
                200000000,
                300000000,
                400000000,
                500000000,
                600000000,
                700000000,
                800000000,
                900000000,
                1000000000 ], out))
        })


        it('should use words', function() {
            const counter = new count.Counter()
            const out = counter.count(0, 100, 10)
            console.log(out)
            assert.ok(cmp.eq([ 'ten',
                'twenty',
                'thirty',
                'forty',
                'fifty',
                'sixty',
                'seventy',
                'eighty',
                'ninety',
                'one hundred' ], out))
        })

        it('should use big words', function() {
            const counter = new count.Counter()
            const out = counter.count(0, 10000000, 1000000)
            console.log(out)
            assert.ok(cmp.eq([ 'one million',
                'two million',
                'three million',
                'four million',
                'five million',
                'six million',
                'seven million',
                'eight million',
                'nine million',
                'ten million' ], out))
        })

        it('should count to eleven', function() {
            console.log("new counter")
            const counter = new count.Counter()
            const out = counter.count(0, 11)
            console.log(out)
            assert.ok(cmp.eq([ 'one',
                'two',
                'three',
                'four',
                'five',
                'six',
                'seven',
                'eight',
                'nine',
                'ten',
                'eleven' ], out))
        })

    })
})