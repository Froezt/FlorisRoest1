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
var dragging = false;

document.getElementById("startbutton").addEventListener("click", start);

function start() {
    document.getElementById('startbutton').style.display = "none";
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
    document.getElementById("rollhelp").style.display = "inline-block";
    document.getElementById("bingohelp").style.display = "inline-block";
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
    const stamp = document.querySelector(".list");
    const kaart = document.querySelector(".kaart");
    var sortable1 = new Sortable(stamp, {
        group: {
            name: 'bingokaart',
            pull: 'clone'
        },
        animation: 150,
        ghostClass: "sortable-ghost", // Class name for the drop placeholder
        chosenClass: "sortable-chosen", // Class name for the chosen item
        dragClass: "sortable-drag",
        forceFallback: true,
        onStart: function (evt) {
            document.querySelector(".kaart").classList.add("dragging");
            document.querySelector(".box").classList.add("dragging");
            document.body.classList.add("dragging");
            dragging = true;
        },
        onEnd: function (evt) {
            document.body.classList.remove("dragging");
            dragging = false;
            document.querySelector(".kaart").classList.remove("dragging");
            document.querySelector(".box").classList.remove("dragging");
        },
        scroll: false,
    });

    document.querySelector(".list li").style.display = "none";

    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            roll(); //whatever you want to do when space is pressed
        }
    }, {once: true})
}


const nummerBox = document.querySelectorAll(".box");

nummerBox.forEach(nummer => {
    nummer.addEventListener("mouseover", hoverGetal);
});

nummerBox.forEach(nummer => {
    nummer.addEventListener("mouseleave", unhoverGetal);
});

nummerBox.forEach(nummer => {
    nummer.addEventListener("mouseup", check);
});

function hoverGetal(e) {
    if (dragging && !this.classList.contains("hovered") && !this.classList.contains("checked")) {
        this.classList.add("hovered");
    }
    if (dragging == false && this.classList.contains("checked")) {
        nummerBox.forEach(nummer => {
            nummer.addEventListener("click", removeCheck);
        });
    }
}

function unhoverGetal(e) {
    if (dragging && !this.classList.contains("checked")) {
        this.classList.remove("hovered");
    }
}

function check() {
    if (dragging == true) {
        this.classList.add("checked");
        this.classList.remove("hovered");
        console.log("gelukt");
    }
}

function removeCheck() {
    this.classList.remove("checked");
}


function roll() {
    document.getElementById('rollbutton').removeAttribute("onclick");
    document.getElementById("nobingo").style.display = "none";
    const randomNummer = rollerArray[Math.floor(Math.random() * rollerArray.length)];
    element = document.querySelectorAll(".container div");
    element2 = document.querySelectorAll("#roller ul li");
    element3 = document.querySelector("#roller ul");
    element2[9].innerHTML = randomNummer;
    for (let i = 0; i < 9; i++) {
        const randomNummers = Math.floor(Math.random() * 75) + 1;
        element2[i].innerHTML = randomNummers;
    }
    element3.classList.remove("rollnumbers");
    element3.classList.add("rollanimation");
    element3.style.animation = 'none';
    element3.offsetHeight; /* trigger reflow */
    element3.style.animation = null;
    const myTimeout = setTimeout(revealNumber, 5000);

    function revealNumber() {
        element[randomNummer - 1].style.background = "linear-gradient(180deg, rgba(251,247,95,1) 49%, rgba(200,184,0,1) 100%)";
        element[randomNummer - 1].style.boxShadow = "0em -0.1em 0px 0px rgb(133, 133, 0)";
        element[randomNummer - 1].innerHTML = randomNummer;
        element4 = document.querySelectorAll("#roller .rollanimation");
        document.getElementById('rollbutton').setAttribute('onclick', 'roll()')
        document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
                roll(); //whatever you want to do when space is pressed
            }
        }, {once: true})
    }
    var index = rollerArray.indexOf(randomNummer);
    rollerArray.splice(index, 1);
    rolled.push(randomNummer);
    console.log(rolled);
    document.getElementById("rollhelp").style.display = "none";
    document.getElementById("bingohelp").style.display = "none";
}

document.getElementById("bingobutton").addEventListener("click", bingo);

function bingo() {
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
    } else {
        document.getElementById("welbingo").style.display = "inline-block";
    }
    document.getElementById("rollhelp").style.display = "none";
    document.getElementById("bingohelp").style.display = "none";
}

//drag and drop









/* stamp.addEventListener('dragstart', dragStart);
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
} */
