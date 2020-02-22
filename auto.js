/*function to go back one page*/
function toStartPage() {
  location.replace("index.html");
}

/*function to go forward one page*/
function toTeleopPage() {
  location.replace("teleop.html");
}

/*if this function is called and blue is on the right, something, else, something else*/
function flipField() {
//   var flipped = document.getElementById('flip-button-auto');
//   var field = document.getElementById('field-image-auto');
//   if (flipped.onclick) {
//     field.style.transform = 'rotate(180deg)';
//   } else if (flipField() == true){
//     field.style.transform = 'rotate(180deg)';
//   }
  
  var el = document.getElementById("field-image-auto");
var st = window.getComputedStyle(el, null);
var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform") ||
         "FAIL";

// With rotate(30deg)...
// matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
console.log('Matrix: ' + tr);

// rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix

var values = tr.split('(')[1].split(')')[0].split(',');
var a = values[0];
var b = values[1];
var c = values[2];
var d = values[3];

var scale = Math.sqrt(a*a + b*b);

console.log('Scale: ' + scale);

// arc sin, convert from radians to degrees, round
var sin = b/scale;
// next line works for 30deg but not 130deg (returns 50);
// var angle = Math.round(Math.asin(sin) * (180/Math.PI));
var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));

console.log('Rotate: ' + angle + 'deg');
  
  if(angle==180){
    field.style.transform = 'rotate(0deg)';
  }else{
    field.style.transform = 'rotate(180deg)';

}

/*finds the coordinates of each click the user makes on the map (will have to create another function to specify if the click was valid - was the scoring inputed - else, it is not a valid click)*/

$(document).ready(function() {
    $("img").on("click", function(event) {
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
        alert("X Coordinate: " + x + " Y Coordinate: " + y);
    });
});

function movedOffLine() {
  var promt = prompt("Did robot move off line:",);
}
