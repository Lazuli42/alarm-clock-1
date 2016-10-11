(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Clock() {
  this.localTime = null;
  this.alarm = null;
}

var testTime = function(time) {
  $('#current_time').text(time);
};

Clock.prototype.showRealTime = function () {
  var seconds = setInterval(function() { testTime(moment().format('LTS')) }, 500);
};

Clock.prototype.setAlarm = function () {
  var alarm = $('#alarmInput').val();
  console.log(alarm);
  console.log(moment().format('HH:mm'));
  var checkAlarm = setInterval(function() {
  if (alarm === (moment().format('HH:mm'))) {
    alert("ALARM!");
    alarm = null;
  } }, 500);
};

exports.clockModule = Clock;

},{}],2:[function(require,module,exports){
var Clock = require('./../js/clock.js').clockModule;

var currentTime = $('#current_time');
var clock = new Clock();

$(document).ready(function() {
  clock.showRealTime();
  $("#setAlarm").submit(function(event){
    event.preventDefault();
    clock.setAlarm();
  });
});

},{"./../js/clock.js":1}]},{},[2]);
