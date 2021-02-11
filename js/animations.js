
var firstFrame = "src/firstFrame.gif";
var lastFrame = "src/lastFrame.gif";
var forwardAnimation = "src/forwardAnimation.gif";
var backwardAnimation = "src/backwardAnimation.gif";

var animationLength = 115/24*1000;

function playForward() {
  $(".noise").attr("src", forwardAnimation);
  window.setTimeout(function () {
    playBackward()
  }, animationLength);

}

function playBackward() {
    $(".noise").attr("src", backwardAnimation);
    window.setTimeout(function () {
      playForward()
    }, animationLength);
}

$(document).ready(function() {
  playForward()
});
