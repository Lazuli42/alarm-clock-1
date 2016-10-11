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
