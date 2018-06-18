var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var myReq;

function startBounce() {
  myReq = requestAnimationFrame(moveBallToBottom);
  ableStopButton();
  disableStartButton();
};
 
function stopBounce() {
  cancelAnimationFrame(myReq);
  disableStopButton();
  ableStartButton();

};
 
function ableStopButton() {
  var stopButton = document.getElementById('stop');
  stopButton.disabled = false;
};
 
function disableStopButton() {
  var stopButton = document.getElementById('stop');
  stopButton.disabled = true;
};
 
function ableStartButton() {
  var startButton = document.getElementById('start');
  startButton.disabled = false;
};
 
function disableStartButton() {
  var startButton = document.getElementById('start');
  startButton.disabled = true;
};
 
function moveBallToTop() {
  var ball = document.getElementById('ball');
  var topBallSpace = parseFloat(getComputedStyle(ball).top);
  var movement = 5;
 
  if (topBallSpace > 0) {
    ball.style.top = (topBallSpace - movement) + 'px';  
    myReq = requestAnimationFrame(moveBallToTop);
  } else {
    cancelAnimationFrame(myReq);
    myReq = requestAnimationFrame(moveBallToBottom);
  }
};
 
function moveBallToBottom() {
  var ball = document.getElementById('ball');
  var topBallSpace = parseFloat(getComputedStyle(ball).top);
  var movement = 5;
 
  if (topBallSpace < 90) {
    ball.style.top = (topBallSpace + movement) + 'px';
    requestAnimationFrame(moveBallToBottom);
  } else {
    cancelAnimationFrame(myReq)
    myReq = requestAnimationFrame(moveBallToTop);
  }
};

