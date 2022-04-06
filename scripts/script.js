// JavaScript Document
console.log("howdy");

var valuesB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var valuesI = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var valuesN = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
var valuesG = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
var valuesO = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
var rollerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
var rowB = [];
var rowI = [];
var rowN = [];
var rowG = [];
var rowO = [];
var column1 = [];
var column2 = [];
var column3 = [];
var column4 = [];
var column5 = [];
var diagonal1 = [];
var diagonal2 = [];
var rolled = [];
var stepB = 0;
var valseBingo = [];

function start() {
    for (let i = 0; i < 5; i++) {
        const randomNummer = valuesB[Math.floor(Math.random() * valuesB.length)];
        element = document.querySelectorAll(".box");
        var index = valuesB.indexOf(randomNummer);
        valuesB.splice(index, 1);
        element[i].innerHTML = randomNummer;
        rowB.push(randomNummer);
        if (i == 0) {
            column1.push(randomNummer);
            diagonal1.push(randomNummer);
        }
        if (i == 1) {
            column2.push(randomNummer);
        }
        if (i == 2) {
            column3.push(randomNummer);
        }
        if (i == 3) {
            column4.push(randomNummer);
        }
        if (i == 4) {
            column5.push(randomNummer);
            diagonal2.push(randomNummer);
        }
    }
    for (let i = 5; i < 10; i++) {
        const randomNummer = valuesI[Math.floor(Math.random() * valuesI.length)];
        element = document.querySelectorAll(".box");
        var index = valuesI.indexOf(randomNummer);
        valuesI.splice(index, 1);
        element[i].innerHTML = randomNummer;
        rowI.push(randomNummer);
        if (i == 5) {
            column1.push(randomNummer);
        }
        if (i == 6) {
            column2.push(randomNummer);
            diagonal1.push(randomNummer);
        }
        if (i == 7) {
            column3.push(randomNummer);
        }
        if (i == 8) {
            column4.push(randomNummer);
            diagonal2.push(randomNummer);
        }
        if (i == 9) {
            column5.push(randomNummer);
        }
    }
    for (let i = 10; i < 15; i++) {
        const randomNummer = valuesN[Math.floor(Math.random() * valuesN.length)];
        element = document.querySelectorAll(".box");
        var index = valuesN.indexOf(randomNummer);
        valuesN.splice(index, 1);
        element[i].innerHTML = randomNummer;
        rowN.push(randomNummer);
        if (i == 10) {
            column1.push(randomNummer);
        }
        if (i == 11) {
            column2.push(randomNummer);
        }
        if (i == 12) {
            column3.push(randomNummer);
            diagonal1.push(randomNummer);
            diagonal2.push(randomNummer);
        }
        if (i == 13) {
            column4.push(randomNummer);
        }
        if (i == 14) {
            column5.push(randomNummer);
        }
    }
    for (let i = 15; i < 20; i++) {
        const randomNummer = valuesG[Math.floor(Math.random() * valuesG.length)];
        element = document.querySelectorAll(".box");
        var index = valuesG.indexOf(randomNummer);
        valuesG.splice(index, 1);
        element[i].innerHTML = randomNummer;
        rowG.push(randomNummer);
        if (i == 15) {
            column1.push(randomNummer);
        }
        if (i == 16) {
            column2.push(randomNummer);
            diagonal2.push(randomNummer);
        }
        if (i == 17) {
            column3.push(randomNummer);
        }
        if (i == 18) {
            column4.push(randomNummer);
            diagonal1.push(randomNummer);
        }
        if (i == 19) {
            column5.push(randomNummer);
        }
    }
    for (let i = 20; i < 25; i++) {
        const randomNummer = valuesO[Math.floor(Math.random() * valuesO.length)];
        element = document.querySelectorAll(".box");
        var index = valuesO.indexOf(randomNummer);
        valuesO.splice(index, 1);
        element[i].innerHTML = randomNummer;
        rowO.push(randomNummer);
        if (i == 20) {
            column1.push(randomNummer);
            diagonal2.push(randomNummer);
        }
        if (i == 21) {
            column2.push(randomNummer);
        }
        if (i == 22) {
            column3.push(randomNummer);
        }
        if (i == 23) {
            column4.push(randomNummer);
        }
        if (i == 24) {
            column5.push(randomNummer);
            diagonal1.push(randomNummer);
        }
    }
    document.getElementById("rollbutton").style.display = "inline-block";
    document.getElementById("bingobutton").style.display = "inline-block";
    console.log(column1);
    console.log(column2);
    console.log(column3);
    console.log(column4);
    console.log(column5);
    console.log(rowB);
    console.log(rowI);
    console.log(rowN);
    console.log(rowG);
    console.log(rowO);
    console.log(diagonal1);
    console.log(diagonal2);
    document.getElementsByClassName('stamp')[0].setAttribute('draggable', true);
}

function roll() {
    const randomNummer = rollerArray[Math.floor(Math.random() * rollerArray.length)];
    element = document.querySelectorAll(".container div");
    element2 = document.querySelector("#roller p");
    element2.innerHTML = randomNummer;
    element[randomNummer - 1].style.backgroundColor = "rgb(255, 228, 51)";
    element[randomNummer - 1].innerHTML = randomNummer;
    var index = rollerArray.indexOf(randomNummer);
    rollerArray.splice(index, 1);
    rolled.push(randomNummer);
    console.log(rolled);
    document.getElementById("nobingo").style.display = "none";
}

function bingoKnop() {
    console.log(valseBingo)
    const containsAllB = rowB.every(element => {
        return rolled.includes(element);
    });
    if (containsAllB == true) {
        valseBingo.push(containsAllB);
    }
    const containsAllI = rowI.every(element => {
        return rolled.includes(element);
    });
    if (containsAllI == true) {
        valseBingo.push(containsAllI);
    }
    const containsAllN = rowN.every(element => {
        return rolled.includes(element);
    });
    if (containsAllN == true) {
        valseBingo.push(containsAllN);
    }
    const containsAllG = rowG.every(element => {
        return rolled.includes(element);
    });
    if (containsAllG == true) {
        valseBingo.push(containsAllG);
    }
    const containsAllO = rowO.every(element => {
        return rolled.includes(element);
    });
    if (containsAllO == true) {
        valseBingo.push(containsAllO);

    }

    const containsAll1 = column1.every(element => {
        return rolled.includes(element);
    });
    if (containsAll1 == true) {
        valseBingo.push(containsAll1);
    }

    const containsAll2 = column2.every(element => {
        return rolled.includes(element);
    });
    if (containsAll2 == true) {
        valseBingo.push(containsAll2);
    }
    const containsAll3 = column3.every(element => {
        return rolled.includes(element);
    });
    if (containsAll3 == true) {
        valseBingo.push(containsAll3);
    }
    const containsAll4 = column4.every(element => {
        return rolled.includes(element);
    });
    if (containsAll4 == true) {
        valseBingo.push(containsAll4);
    }
    const containsAll5 = column5.every(element => {
        return rolled.includes(element);
    });
    if (containsAll5 == true) {
        valseBingo.push(containsAll5);
    }

    const containsAllD1 = diagonal1.every(element => {
        return rolled.includes(element);
    });
    if (containsAllD1 == true) {
        valseBingo.push(containsAllD1);
    }
    const containsAllD2 = diagonal2.every(element => {
        return rolled.includes(element);
    });
    if (containsAllD2 == true) {
        valseBingo.push(containsAllD2);
    }
    if (valseBingo.length == 0) {
        document.getElementById("nobingo").style.display = "inline-block";
        console.log("valsbingo1");
    }
    else {
        document.getElementById("welbingo").style.display = "inline-block";
    }
}

//drag and drop
const stamp = document.querySelector(".stamp");
stamp.addEventListener('dragstart', dragStart);
stamp.addEventListener('dragend', dragEnd);

//drag functions
function dragStart() {
    stamp.className += " hold";
    setTimeout(() => (stamp.className = 'invisible'), 0);

}



function dragEnd() {
    stamp.className = 'stamp'
}

function dragOver(e) {
    e.preventDefault();
    console.log("over")
    this.style.backgroundColor = "grey";
}

function dragEnter(e) {
    e.preventDefault();
    console.log("Enter")
}

function dragLeave() {
    console.log("Leave")
    this.style.backgroundColor = "rgb(237, 232, 140)";
}


function dragDrop() {
    console.log("Drop")
    stamp.className = 'stamp';
    this.classList.remove("box");
    this.classList.add("checkedBox");
    this.style.backgroundColor = "red";
}

var boxes = document.querySelectorAll(".box");

for (const box of boxes) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
}



var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

/* de commando's */
var commandos = [ 'Bingo', 'bingo'];
var grammar = '#JSGF V1.0; grammar commandos; public <commando> = ' + commandos.join(' | ') + ' ;'

/* het luisterobject */
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

/* als er een commando uitgesproken is */
function spraakAfhandelen(event) {
  let last = event.results.length - 1;
  let commando = event.results[last][0].transcript;
  console.log('Result received: ' + commando + '. ' + 'Confidence: ' + event.results[0][0].confidence);

  if ( commando.trim() == "bingo" || commando.trim() == "Bingo") {
    bingoKnop()
  }
}

function luisteren(){
   recognition.start();
   console.log('Ready to receive a command.');
}

/* het luisterobject de commando's leren */
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = 'nl';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

recognition.onresult = function(event) {
   spraakAfhandelen(event);
}

recognition.onend = function() {
   luisteren();
}

luisteren();