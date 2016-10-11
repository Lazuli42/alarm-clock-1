function Clock() {
  this.localTime = null;
  this.alarm = null;
}

var testTime = function(time) {
  $('#current_time').text(time);
};



Clock.prototype.showRealTime = function () {
  var seconds = setInterval(function() { testTime(moment().format('LTS')) }, 500);
  //ar setTime = setInterval(function() { setLocalTime }, 500);
  console.log(this.localTime);
};



Clock.prototype.setAlarm = function () {
  this.alarm = $('#alarmInput');
  console.log(this.alarm);
  if (this.alarm === this.localTime) {
    alert("ALARM!");
  }
};


exports.clockModule = Clock;
