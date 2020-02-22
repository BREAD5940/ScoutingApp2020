/*function to go back one page*/
function toStartPage() {
  location.replace("index.html");
}

/*function to go forward one page*/
function toTeleopPage() {
  location.replace("teleop.html");
}

/*if this function is called and blue is on the right, something, else, something else*/
/*function flipField() {
  var flipped = document.getElementById('flip-button-auto');
  var field = document.getElementById('field-image-auto');
  if (flipped.onclick) {
    field.style.transform = 'rotate(180deg)';
  } else if (flipField() == true){
    field.style.transform = 'rotate(180deg)';
  }
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
