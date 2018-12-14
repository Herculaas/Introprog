// Put a 2‐pixel‐wide, solid black border around his body.
var body = document.getElementById("body").style.border = "2px Black solid"
// Round the corners of his mouth.
var mouth = document.getElementById("mouth").style.borderRadius = "4px";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border ="4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor ="#FF00FF";
// Change the text color.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop ="5px black solid";

var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");
var rightArm = document.getElementById("rightarm");
var head = document.getElementById("head").style.transform = "rotate(15deg)";



rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
rightArm.addEventListener("click", moveUpDown)


function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;

  var id = setInterval(frame, 10) // draw every 10ms

  function frame() {
    robotPart.style.top = top + '%';    
    top++;
    if (top === 36){
      clearInterval(id);
    }
  }
  
}
function moveUpDownEyes(e) {
    var robotPart = e.target;
    var top = 0;
  
    var id = setInterval(frame, 10) // draw every 10ms
  
    function frame() {
      robotPart.style.top = top + '%';    
      top++;
      if (top === 20){
        clearInterval(id);
      }
    }
    
  }


function moveRightLeft(e) {
  var robotPart = e.target;
  var left = 0;
  var id = setInterval(frame, 10) // draw every 10ms
  function frame() {
    robotPart.style.left = left + '%';
    left++;
    if (left === 71){
      clearInterval(id);
    }
  }
}
