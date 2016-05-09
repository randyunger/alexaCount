var assert = require('chai').assert
var count = require('../src/count.js')
var cmp = require("cmp")

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

        it('should count to three, string arg', function() {
            console.log("new counter")
            const counter = new count.Counter()
            const out = counter.count(0, "3", 1)
            console.log(out)
            assert.ok(cmp.eq([ 'one',
                'two',
                'three'], out))
        })

        it('should support skipping', function() {
            const counter = new count.Counter()
            const out = counter.count(0, "100", "10")
            console.log(out)
            assert.ok(cmp.eq(
                [ 'ten',
                    'twenty',
                    'thirty',
                    'forty',
                    'fifty',
                    'sixty',
                    'seventy',
                    'eighty',
                    'ninety',
                    'one hundred' ]
                , out))
        })

    })
})