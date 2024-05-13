function updateTime() {
  var now = new Date();
  var timeString = now;
  document.getElementById('time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();