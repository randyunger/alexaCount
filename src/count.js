'use strict'

var
    range = require('range')
    ,nums = require('number-to-words')

var Counter = function() {
}

Counter.prototype.constructor = Counter

Counter.prototype.count = function(start, end, step){
    const count = this.enumerate(start, end, step)
    const words = count.map(function(num, ix){
        return nums.toWords(num, false)
    })
    return words
}


function dropInitialZero(arr) {
    if(arr[0] === 0) {
        arr.shift()
        return arr
    }
    else return arr
}

function libStepF(step) {
    if(step == undefined) {
        return 1
    } else {
        return parseInt(step)
    }
}

Counter.prototype.enumerate = function(start, end, step){

    const libStep = libStepF(step)

    //range lib requires us to add one
    const libEnd = parseInt(end) + 1

    console.log("counting from "+ start + " to " + libEnd + " by " + libStep)

    const numArray = range.range(start, libEnd, libStep)

    const withoutInitialZero = dropInitialZero(numArray)

    return withoutInitialZero
}

exports.Counter = Counter