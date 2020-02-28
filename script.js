function hideEverything() {
    document.getElementById('game-page').style.display = 'none';
    document.getElementById('endgame-page').style.display = 'none';
    document.getElementById('stages').style.display = 'none';
    document.getElementById('note-page').style.display = 'none';
}

/*start button to switch to game page*/
function toGamePage() {
    document.getElementById('first-page').style.display = 'none';
    document.getElementById('game-page').style.display = 'inline-block';
    document.getElementById('start-time').value = Date.now();
    document.getElementById('off-line').style.display = 'none';
    document.getElementById('scoring').style.display = 'none';
    document.getElementById('fouls').style.display = 'none';
    document.getElementById('stages').style.display = 'none';

}

//rotates the slider to be upside down from already rotated position
function flipInitiationLine() {

    var initiationLine = document.getElementById('start-slide');
    var sector = document.getElementById('sp-sector');
    if (sector.innerHTML == ("Shield <br> Generator")) {
        initiationLine.style.transform = 'rotate(270deg)';
    } else if (sector.innerHTML == ("Sector")) {
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
    document.getElementById('game-page').style.display = 'none';
}


/*if this function is called and blue is on the right, something, else, something else*/
function flipField() {
    var flipped = document.getElementById('flip-button');
    var field = document.getElementById('field-image');
    if (field.style.transform == 'rotate(180deg)') {
        field.style.transform = null;
    } else {
        field.style.transform = 'rotate(180deg)';
    }
}

function movedOffLine() {
    if (document.getElementById('off-line').style.display === 'none') {
        document.getElementById('off-line').style.display = 'block';
    } else {
        document.getElementById('off-line').style.display = 'none';
    }
}

function closeOffLine() {
    document.getElementById('off-line').style.display = 'none';
}


function coordinates() {
    $(document).ready(function () {
        $("img").on("click", function (event) {
            const x = event.pageX - this.offsetLeft;
            const y = event.pageY - this.offsetTop;
            document.getElementById('x').value = (x);
            document.getElementById('y').value = (y);
        });
    });
    document.getElementById("time").value = Date.now();
}

function showPoints() {
    if (document.getElementById('scoring').style.display === 'none') {
        document.getElementById('scoring').style.display = 'block';
    } else {
        document.getElementById('scoring').style.display = 'none';
    }
}

function saveShot() {
    let i;
    document.getElementById("scoring").style.display = 'none';
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;
    const inner = document.getElementById("inner").value;
    const outer = document.getElementById("outer").value;
    const lower = document.getElementById("lower").value;
    const miss = document.getElementById("miss").value;
    const time = document.getElementById("time").value;
    const currentWord = document.getElementById("shots").value;
    let assembledWord = "";
    for (i = 0; i < inner; i++) {
        assembledWord = assembledWord + "{(" + x + "," + y + ");INNER;" + time + "};";
    }
    for (i = 0; i < outer; i++) {
        assembledWord = assembledWord + "{(" + x + "," + y + ");OUTER;" + time + "};";
    }
    for (i = 0; i < lower; i++) {
        assembledWord = assembledWord + "{(" + x + "," + y + ");LOWER;" + time + "};";
    }
    for (i = 0; i < miss; i++) {
        assembledWord = assembledWord + "{(" + x + "," + y + ");MISS;" + time + "};";
    }

    document.getElementById("x").value = 0;
    document.getElementById("y").value = 0;
    document.getElementById("inner").value = 0;
    document.getElementById("outer").value = 0;
    document.getElementById("lower").value = 0;
    document.getElementById("miss").value = 0;
    document.getElementById("time").value = 0;
    document.getElementById("shots").value = currentWord + assembledWord;
    document.getElementById("scoring").style.display = 'none';
}

function showFouls() {
    if (document.getElementById('fouls').style.display === 'none') {
        document.getElementById('fouls').style.display = 'block';
    } else {
        document.getElementById('fouls').style.display = 'none';
    }
}

function hideFouls() {
    document.getElementById('fouls').style.display = 'none';
}

function rotationTime() {
    document.getElementById('rotTime').value = Date.now();
    document.getElementById("rotation").innerHTML = "ROTATED";
}

function positionTime() {
    document.getElementById('posTime').value = Date.now();
    document.getElementById('position').innerHTML = "POSITIONED";
}

function showControl() {
    document.getElementById('control-panel').style.display = 'block';
}

function hideControl() {
    document.getElementById('control-panel').style.display = 'none';
}

/*function to go forward one page*/
function toEndgame() {
    document.getElementById('endgame-page').style.display = "inline-block";
    document.getElementById('game-page').style.display = "none";
}

function stageOneTime() {
    document.getElementById('cap1Time').value = Date.now();
    document.getElementById('stage-one').value = "FULL";
}

function stageTwoTime() {
    document.getElementById('cap2Time').value = Date.now();
    document.getElementById('stage-two').value = "FULL";
}

function stageThreeTime() {
    document.getElementById('cap3Time').value = Date.now();
    document.getElementById('stage-three').value = "FULL";
}

function showStages() {
    document.getElementById('stages').style.display = 'block';
}

function hideStages() {
    document.getElementById('stages').style.display = 'none';
}

function backToGamePage() {
    document.getElementById('game-page').style.display = 'inline-block';
    document.getElementById('endgame-page').style.display = 'none';
}

function toNotesPage() {
    document.getElementById('note-page').style.display = 'inline-block';
    document.getElementById('endgame-page').style.display = 'none';
}

function backToEndgame() {
    document.getElementById('endgame-page').style.display = 'inline-block';
    document.getElementById('note-page').style.display = 'none';
}

var driverSlider = document.getElementById("driver-rank");
var output = document.getElementById("display");
var infoBox = document.getElementById("info");

function getName(slideVal) {
    if (slideVal === "1") {
        var toReturn = "1 Does Not Meet Standards: ";
    } else if (slideVal === "2") {
        var toReturn = "2 Below average: ";
    } else if (slideVal === "3") {
        var toReturn = "3 Average: ";
    } else if (slideVal === "4") {
        var toReturn = "4 Above Average: ";
    } else if (slideVal === "5") {
        var toReturn = "5 Excellent: ";
    }
    return toReturn;
}

function getText(slideVal) {
    if (slideVal === "1") {
        var toReturn = "Drove poorly, hindered allies, looks lost, can't achieve objectives, start-and-stop motion, looses control.";
    } else if (slideVal === "2") {
        var toReturn = "Occasionally hinders allies, not efficient at all, trouble lining up.";
    } else if (slideVal === "3") {
        var toReturn = "Doesn't hinder allies, recovers from mistakes, mostly goes fast enough, may have trouble with defense.";
    } else if (slideVal === "4") {
        var toReturn = "Doesn't hinder allies, has clear objectives, recovers quickly, few mistakes, aware of other events on the field.";
    } else if (slideVal === "5") {
        var toReturn = "Doesn't hinder allies at all, very few mistakes, very aware of other robots, seamless recovery, moves to avoid defense, smooth motion.";
    }
    return toReturn;
}

// Update the current slider value (each time you drag the slider handle)
driverSlider.onchange = function () {
    output.innerHTML = getName(driverSlider.value);
    infoBox.innerHTML = getText(driverSlider.value);
};

function reset() {
    hideEverything();
    document.getElementById('first-page').style.display = 'block';
}

function startClimb() {
    document.getElementById('climb-start').value = Date.now();
    document.getElementById('begin-climb').innerHTML = "BEGUN";
}

function endClimb() {
    document.getElementById('climb-end').value = Date.now();
    document.getElementById('stop-climb').innerHTML = "COMPLETED";
}

function handleSubmit() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwRHIPRHp5KN5BAshpQJH4OF1tK960U10v0S5-z2555FLDJ9o8/exec';
    const form = document.forms['form'];
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));
    form.reset();
    hideEverything();
    document.getElementById('first-page').style.display = 'block';
}