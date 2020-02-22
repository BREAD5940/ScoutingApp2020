/*start button countdown function*/
function startCountdown() {
  
}

/*start button to switch to auto page*/
function toAutoPage() {
  location.replace("auto.html")
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

function countdown() {
  var now = new Date().getTime();
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var twoMinutes = minutes * 2;
  var thirtySeconds = seconds * 30;
  var countdownTo = now + twoMinutes + thirtySeconds;
  var distance = countdownTo - now;
  document.getElementById("demo").innerHTML = distance;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}

//changes color of absent buttons when clicked
/*function changeColorYes() {
  document.getElementById("absent-yes").style.backgroundColor = "red";
}

function changeColorNo() {
  document.getElementById("absent-no").style.backgroundColor = "blue";
}*/
