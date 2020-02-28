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
  var initiationLine = document.getElementById('start-slider');
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


function coordinates(){
  $(document).ready(function() {
    $("img").on("click", function(event) {
      const x = event.pageX - this.offsetLeft;
      const y = event.pageY - this.offsetTop;
      document.getElementById('x').value = (x);
      document.getElementById('y').value = (y);
    });
});
}

function showPoints(){
  document.getElementById('scoring-auto').style.display = 'block';
}

function saveShotAuto(){
  let i;
  document.getElementById("scoring-auto").style.display='none';
  const x = document.getElementById("x").value;
  const y = document.getElementById("y").value;
  const inner = document.getElementById("inner-auto").value;
  const outer = document.getElementById("outer-auto").value;
  const lower = document.getElementById("lower-auto").value;
  const miss = document.getElementById("miss-auto").value;
  const time = document.getElementById("time").value;
  const currentWord = document.getElementById("shots").value;
  let assembledWord = "";
  for(i = 0; i<inner; i++){
    assembledWord = assembledWord + "{("+x+","+y+");INNER;"+time+"},";
  }
  for(i = 0; i<outer; i++){
    assembledWord = assembledWord + "{("+x+","+y+");OUTER;"+time+"},";
  }
  for(i = 0; i<lower; i++){
    assembledWord = assembledWord + "{("+x+","+y+");LOWER;"+time+"},";
  }
  for(i = 0; i<miss; i++){
    assembledWord = assembledWord + "{("+x+","+y+");MISS;"+time+"},";
  }
  document.getElementById("shots").value = currentWord+assembledWord;
}

function hidePoints(){
  document.getElementById('scoring-auto').style.display = 'none';
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

function showStagesAuto(){
  document.getElementById("stages-auto").style.display = 'block';
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
