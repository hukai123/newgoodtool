'use strict';

// import { deepClone, indexOfArray } from "./array";
// import { parseTime, parseTime1, getEndWeek, getMonDate, getSunDate } from "./date-time";
var _array = require('./array')
var _timeTools = require('./date-time')


console.log(789)
console.log(_array)

var _nowTime = new Date().getTime()
var parseT = _timeTools.parseTime(_nowTime)
console.log(789)
console.log(parseT)



module.exports = { 
    // deepClone,
    // indexOfArray,
    // parseTime, 
    // parseTime1, 
    // getEndWeek, 
    // getMonDate, 
    // getSunDate,
    aa: 12,
}