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
  var flipped = document.getElementById('flip-button-auto');
  var field = document.getElementById('field-image-auto');
  if (field.style.transform == 'rotate(180deg)') {
    field.style.transform = null ;
  } else {
    field.style.transform = 'rotate(180deg)';
  }
}

function movedOffLine() {
  document.getElementById('off-line').style.display='block';
}

function closeOffLine() {
  document.getElementById('off-line').style.display='none';
}



function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
  var value = parseInt(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number2').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
  var value = parseInt(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number2').value = value;
}

function increaseValue2() {
  var value = parseInt(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number2').value = value;
}

function decreaseValue2() {
  var value = parseInt(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number2').value = value;
}


function increaseValue3() {
  var value = parseInt(document.getElementById('number3').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number3').value = value;
  var value = parseInt(document.getElementById('number4').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number4').value = value;
}

function decreaseValue3() {
  var value = parseInt(document.getElementById('number3').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number3').value = value;
  var value = parseInt(document.getElementById('number4').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number4').value = value;
}

function increaseValue4() {
  var value = parseInt(document.getElementById('number4').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number4').value = value;
}

function decreaseValue4() {
  var value = parseInt(document.getElementById('number4').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number4').value = value;
}


function increaseValue5() {
  var value = parseInt(document.getElementById('number5').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number5').value = value;
  var value = parseInt(document.getElementById('number6').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number6').value = value;
}

function decreaseValue5() {
  var value = parseInt(document.getElementById('number5').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number5').value = value;
  var value = parseInt(document.getElementById('number6').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number6').value = value;
}

function increaseValue6() {
  var value = parseInt(document.getElementById('number6').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number6').value = value;
}

function decreaseValue6() {
  var value = parseInt(document.getElementById('number6').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number6').value = value;
}


function coordinates(){
  $(document).ready(function() {
    $("img").on("click", function(event) {
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
        document.getElementById('x-coord').innerHTML = (x);
        document.getElementById('y-coord').innerHTML = (y);
    });
});
}

function showPoints(){
  document.getElementById('points').style.display = 'block';
}

function savePointsData(){
  console.log("save points");
  var innerScored = document.getElementById('number').value;
  var innerAttempted = document.getElementById('number2').value;
  var outerScored = document.getElementById('number3').value;
  var outerAttempted = document.getElementById('number4').value;
  var lowScored = document.getElementById('number5').value;
  var lowAttempted = document.getElementById('number6').value;
  var innerScoredTotal = innerScoredTotal + innerScored;
  var innerAttemptedTotal = innerAttemptedTotal + innerAttempted;
  var outerScoredTotal = outerScoredTotal + outerScored;
  var outerAttemptedTotal = outerAttemptedTotal + outerAttempted;
  var lowScoredTotal = lowScoredTotal + lowScored;
  var lowAttemptedTotal = lowAttemptedTotal + lowAttempted;
  console.log("Inner scored total: " + innerScoredTotal);
  console.log("Inner attempted total: " + innerAttemptedTotal);
  console.log("Outer scored total: " + outerScoredTotal);
  console.log("Outer attempted total: " + outerAttemptedTotal);
  console.log("Low scored total: " + lowScoredTotal);
  console.log("Low attempted total: " + lowAttemptedTotal);
}

function hidePoints(){
  document.getElementById('points').style.display = 'none';
}

function cancelPoints(){
  document.getElementById('number').value = (0);
  document.getElementById('number2').value = (0);
  document.getElementById('number3').value = (0);
  document.getElementById('number4').value = (0);
  document.getElementById('number5').value = (0);
  document.getElementById('number6').value = (0);
}
