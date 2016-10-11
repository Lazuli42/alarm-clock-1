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
