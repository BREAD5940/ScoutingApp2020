function hideEverything(){
  document.getElementById('auto-page').style.display = 'none';
  document.getElementById('teleop-page').style.display = 'none';
  document.getElementById('endgame-page').style.display = 'none';
  document.getElementById('stages').style.display = 'none';
  document.getElementById('note-page').style.display = 'none';
}

/*start button to switch to auto page*/
function toAutoPage() {
  document.getElementById('first-page').style.display = 'none';
  document.getElementById('auto-page').style.display = 'inline-block';
}

//rotates the slider to be upside down from already rotated position
function flipInitiationLine() {
  var initiationLine = document.getElementById('start-slide');
  var sector = document.getElementById('sp-sector');
  if (sector.innerHTML == ("Shield <br> Generator")) {
  initiationLine.style.transform = 'rotate(270deg)';
  } else if (sector.innerHTML == ("Sector")){
    initiationLine.style.transform = 'rotate(90deg)';
  }
}

//changes the text from "sector" to "shield generator"
function flipSectorGenerator() {
  var sector = document.getElementById('sp-sector');
  if (sector.innerHTML == ("Sector")) {
    sector.innerHTML = "Shield <br> Generator";
  } else {
    sector.innerHTML = "Sector";
  }
}

//changes the text from "shield generator" to "sector"
function flipGeneratorSector() {
  var generator = document.getElementById('sp-generator');
  if (generator.innerHTML == ("Shield <br> Generator")) {
    generator.innerHTML = "Sector";
  } else {
    generator.innerHTML = "Shield <br> Generator";
  }
}

//calls all the functions relating to switching the initiation line orientation
function flip() {
  flipGeneratorSector();
  flipSectorGenerator();
  flipInitiationLine();
  console.log("It worked!");
}




function toStartPage() {
  document.getElementById('first-page').style.display = 'inline-block';
  document.getElementById('auto-page').style.display = 'none';
}

function toTeleopPage() {
  document.getElementById('teleop-page').style.display = 'inline-block';
  document.getElementById('auto-page').style.display = 'none';
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

function increaseValue8() {
  var value = parseInt(document.getElementById('number8').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number8').value = value;
}

function decreaseValue8() {
  var value = parseInt(document.getElementById('number8').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number8').value = value;
}

function increaseValue9() {
  var value = parseInt(document.getElementById('number9').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number9').value = value;
}

function decreaseValue9() {
  var value = parseInt(document.getElementById('number9').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number9').value = value;
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

function showFouls(){
  document.getElementById('foul-types').style.display = 'block';
}

function hideFouls(){
  document.getElementById('foul-types').style.display = 'none';
}

function trackFouls(){

}

function rotationTime(){
  var date = new Date();
  document.getElementById('time-rot').innerHTML = date;
}

function positionTime(){
  var date = new Date();
  document.getElementById('time-pos').innerHTML = date;
}

function showControl(){
  document.getElementById('control-panel').style.display = 'flex';
}

function hideControl(){
  document.getElementById('control-panel').style.display = 'none';
}





/*function to go back one page*/
function backToAuto() {
  document.getElementById('teleop-page').style.display = "none";
  document.getElementById('auto-page').style.display = "inline-block";
}

/*function to go forward one page*/
function toEndgame() {
  document.getElementById('endgame-page').style.display = "inline-block";
  document.getElementById('teleop-page').style.display = "none";
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


function increaseValueT() {
  var value = parseInt(document.getElementById('numberT').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('numberT').value = value;
  var value = parseInt(document.getElementById('number2T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number2T').value = value;
}

function decreaseValueT() {
  var value = parseInt(document.getElementById('numberT').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('numberT').value = value;
  var value = parseInt(document.getElementById('number2T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number2T').value = value;
}

function increaseValue2T() {
  var value = parseInt(document.getElementById('number2T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number2T').value = value;
}

function decreaseValue2T() {
  var value = parseInt(document.getElementById('number2T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number2T').value = value;
}


function increaseValue3T() {
  var value = parseInt(document.getElementById('number3T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number3T').value = value;
  var value = parseInt(document.getElementById('number4T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number4T').value = value;
}

function decreaseValue3T() {
  var value = parseInt(document.getElementById('number3T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number3T').value = value;
  var value = parseInt(document.getElementById('number4T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number4T').value = value;
}

function increaseValue4T() {
  var value = parseInt(document.getElementById('number4T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number4T').value = value;
}

function decreaseValue4T() {
  var value = parseInt(document.getElementById('number4T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number4T').value = value;
}


function increaseValue5T() {
  var value = parseInt(document.getElementById('number5T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number5T').value = value;
  var value = parseInt(document.getElementById('number6T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number6T').value = value;
}

function decreaseValue5T() {
  var value = parseInt(document.getElementById('number5T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number5T').value = value;
  var value = parseInt(document.getElementById('number6T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number6T').value = value;
}

function increaseValue6T() {
  var value = parseInt(document.getElementById('number6T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number6T').value = value;
}

function decreaseValue6T() {
  var value = parseInt(document.getElementById('number6T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number6T').value = value;
}

function increaseValue8T() {
  var value = parseInt(document.getElementById('number8T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number8T').value = value;
}

function decreaseValue8T() {
  var value = parseInt(document.getElementById('number8T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number8T').value = value;
}

function increaseValue9T() {
  var value = parseInt(document.getElementById('number9T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number9T').value = value;
}

function decreaseValue9T() {
  var value = parseInt(document.getElementById('number9T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number9T').value = value;
}

function increaseValue13T() {
  var value = parseInt(document.getElementById('number13T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number13T').value = value;
}

function decreaseValue13T() {
  var value = parseInt(document.getElementById('number13T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number13T').value = value;
}

function increaseValue14T() {
  var value = parseInt(document.getElementById('number14T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number14T').value = value;
}

function decreaseValue14T() {
  var value = parseInt(document.getElementById('number14T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number14T').value = value;
}

function increaseValue15T() {
  var value = parseInt(document.getElementById('number15T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number15T').value = value;
}

function decreaseValue15T() {
  var value = parseInt(document.getElementById('number15T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number15T').value = value;
}

function increaseValue16T() {
  var value = parseInt(document.getElementById('number16T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number16T').value = value;
}

function decreaseValue16T() {
  var value = parseInt(document.getElementById('number16T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number16T').value = value;
}

function increaseValue17T() {
  var value = parseInt(document.getElementById('number17T').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number17T').value = value;
}

function decreaseValue17T() {
  var value = parseInt(document.getElementById('number17T').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number17T').value = value;
}

function coordinatesT(){
  $(document).ready(function() {
    $("img").on("click", function(event) {
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
        document.getElementById('x-coordT').innerHTML = (x);
        document.getElementById('y-coordT').innerHTML = (y);
    });
});
}

function showPointsT(){
  document.getElementById('pointsT').style.display = 'block';
}

function savePointsDataT(){
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

function hidePointsT(){
  document.getElementById('pointsT').style.display = 'none';
}

function cancelPointsT(){
  document.getElementById('number').value = (0);
  document.getElementById('number2').value = (0);
  document.getElementById('number3').value = (0);
  document.getElementById('number4').value = (0);
  document.getElementById('number5').value = (0);
  document.getElementById('number6').value = (0);
}

function showFoulsT(){
  document.getElementById('foul-types').style.display = 'block';
}

function hideFoulsT(){
  document.getElementById('foul-types').style.display = 'none';
}

function trackFoulsT(){

}

function rotationTime(){
  var date = new Date();
  document.getElementById('time-rot').innerHTML = date;
}

function positionTime(){
  var date = new Date();
  document.getElementById('time-pos').innerHTML = date;
}

function showControl(){
  document.getElementById('control-panel').style.display = 'flex';
}

function hideControl(){
  document.getElementById('control-panel').style.display = 'none';
}

function stageOneTime(){
  var d = new Date();
  console.log(d.getTime());
}

function stageTwoTime(){
  var d = new Date();
  console.log(d.getTime());
}

function stageThreeTime(){
  var d = new Date();
  console.log(d.getTime());
}

function showStages(){
  document.getElementById('stages').style.display = 'flex';
}

function hideStages(){
  document.getElementById('stages').style.display = 'none';
}





function backToTeleopPage() {
  document.getElementById('teleop-page').style.display = 'inline-block';
  document.getElementById('endgame-page').style.display = 'none';
}

function toNotesPage() {
  document.getElementById('note-page').style.display = 'inline-block';
  document.getElementById('endgame-page').style.display = 'none';
}




function backToEndgame(){
  document.getElementById('endgame-page').style.display = 'inline-block';
  document.getElementById('note-page').style.display = 'none';
}
