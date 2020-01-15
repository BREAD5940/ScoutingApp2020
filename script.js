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
  if (sector.innerHTML == ("Shield Generator")) {
  initiationLine.style.transform = 'rotate(270deg)';
  } else if (sector.innerHTML == ("Sector")){
    initiationLine.style.transform = 'rotate(90deg)';
  }
}

//changes the text from "sector" to "shield generator"
function flipSectorGenerator() {
  var sector = document.getElementById('sp-sector');
  if (sector.innerHTML == ("Sector")) {
    sector.innerHTML = "Shield Generator";
  } else {
    sector.innerHTML = "Sector";
  }
}

//changes the text from "shield generator" to "sector"
function flipGeneratorSector() {
  var generator = document.getElementById('sp-generator');
  if (generator.innerHTML == ("Shield Generator")) {
    generator.innerHTML = "Sector";
  } else {
    generator.innerHTML = "Shield Generator";
  }
}

//calls all the functions relating to switching the initiation line orientation
function flip() {
  flipGeneratorSector();
  flipSectorGenerator();
  flipInitiationLine();
}
