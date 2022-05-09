// create a container
const div = document.createElement("div");
document.body.appendChild(div);
div.className = "container";

// create a header inside div container
let header = document.createElement("header");
div.appendChild(header);

// create a title inside header
let title = document.createElement("h1");
header.appendChild(title);
title.innerHTML = "Rock, Paper or Scissors";

// create p element showing the final & scores inside div container
let result = document.createElement("p");
let final1 = document.createElement("p");
div.appendChild(result);
div.appendChild(final1);
result.innerHTML = "Make your choice" + "&#9994;" + "&#9995;" + "&#9996;";
final1.innerHTML = "First to score 5 points wins the game";

// create a scoreboard inside div container
const scoreBoard = document.createElement("div");
scoreBoard.className = "scoreBoard";
div.appendChild(scoreBoard);

// create a scorebox inside scoreboard
const scoreBox = document.createElement("div");
scoreBox.className = "scoreBox";
scoreBoard.appendChild(scoreBox);

// create signs inside scorebox
const userSign = document.createElement("div");
const compSign = document.createElement("div");
const vs = document.createElement("p");
userSign.className = "userSign";
compSign.className = "compSign";
vs.className = "vs";
userSign.innerHTML = "&#10067;";
compSign.innerHTML = "&#10067;";
vs.innerHTML = "VS";
scoreBox.appendChild(userSign);
scoreBox.appendChild(vs);
scoreBox.appendChild(compSign);

// create a button container inside div container
const btnContainer = document.createElement("div");
div.appendChild(btnContainer);
btnContainer.className = "btnContainer";

// create selection buttons
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
btn1.className = "btn1";
btn2.className = "btn2";
btn3.className = "btn3";
btn1.innerHTML = "&#9994;";
btn2.innerHTML = "&#9995;";
btn3.innerHTML = "&#9996;";
btnContainer.appendChild(btn1);
btnContainer.appendChild(btn2);
btnContainer.appendChild(btn3);

// create a reset button
const resetBtn = document.createElement("button");
resetBtn.innerHTML = "Restart";

btnContainer.querySelector(".btn1").addEventListener("click", function () {
  btn1.classList.add("clicking");
  play("&#9994;");
});

btnContainer
  .querySelector(".btn1")
  .addEventListener("transitionend", function (e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("clicking");
  });

btnContainer.querySelector(".btn2").addEventListener("click", function () {
  btn2.classList.add("clicking");
  play("&#9995;");
});

btnContainer
  .querySelector(".btn2")
  .addEventListener("transitionend", function (e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("clicking");
  });

btnContainer.querySelector(".btn3").addEventListener("click", function () {
  btn3.classList.add("clicking");
  play("&#9996;");
});

btnContainer
  .querySelector(".btn3")
  .addEventListener("transitionend", function (e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("clicking");
  });

resetBtn.onclick = function () {
  userScore = 0;
  compScore = 0;
  round = 0;
  result.innerHTML = "Make your choice" + "&#9994;" + "&#9995;" + "&#9996;";
  final1.innerHTML = "First to score 5 points wins the game";
  userSign.innerHTML = "&#10067;";
  compSign.innerHTML = "&#10067;";
  btn1.setAttribute(
    "style",
    "background: rgba(12, 68, 15, 0.694); border: .4rem solid rgb(188, 210, 24);"
  );
  btn2.setAttribute(
    "style",
    "background: rgba(12, 68, 15, 0.694); border: .4rem solid rgb(188, 210, 24);"
  );
  btn3.setAttribute(
    "style",
    "background: rgba(12, 68, 15, 0.694); border: .4rem solid rgb(188, 210, 24);"
  );
  btn1.classList.add("clicking");
  btn2.classList.add("clicking");
  btn3.classList.add("clicking");
  div.removeChild(resetBtn);
};

let userScore = 0;
let compScore = 0;
let round = 0;

// Store values and functions for the game
function Game() {
  this.compArray = ["&#9994;", "&#9995;", "&#9996;"]; //Set array of selection choice

  // Create a random selection for computer
  this.computerPlay = () => {
    const ramdonValue = Math.floor(Math.random() * this.compArray.length);
    return this.compArray[ramdonValue];
  };

  // Main rule for Rock, Paper or Scissors Game and add 1 score for user if he wins
  this.playRound = (playerSelection, computerSelection) => {
    if (
      (playerSelection === "&#9994;" && computerSelection === "&#9996;") ||
      (playerSelection === "&#9996;" && computerSelection === "&#9995;") ||
      (playerSelection === "&#9995;" && computerSelection === "&#9994;")
    ) {
      userScore += 1;
      return `You Win This Round! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
      return `It's a tie ${computerSelection} ${playerSelection}`;
    } else {
      compScore += 1;
      return `You Lose This Round! ${computerSelection} beats ${playerSelection}`;
    }
  };
}

// Create play() Function to start the game
function play(x) {
  let myGame = new Game(); // Declare a object myGame to store the private values and functions of the game allocate the memory
  if (userScore >= 5 || compScore >= 5) {
    btn1.classList.remove("clicking");
    btn2.classList.remove("clicking");
    btn3.classList.remove("clicking");
  } else {
    round += 1;
    let p1 = x;
    while (myGame.compArray.indexOf(p1) == -1) {
      p1 = myGame.playerSelection();
    }
    let p2 = myGame.computerPlay();
    result.innerHTML = myGame.playRound(p1, p2);
    final1.innerHTML = `You: ${userScore} : Computer: ${compScore}`;
    userSign.innerHTML = p1;
    compSign.innerHTML = p2;
  }
  if (userScore >= 5) {
    result.innerHTML = "YOU WIN" + "&#127881;";
    div.appendChild(resetBtn);
    btn1.setAttribute(
      "style",
      "background: grey; border: .4rem solid black; cursor: default"
    );
    btn2.setAttribute(
      "style",
      "background: grey; border: .4rem solid black; cursor: default"
    );
    btn3.setAttribute(
      "style",
      "background: grey; border: .4rem solid black; cursor: default"
    );
  } else if (compScore >= 5) {
    result.innerHTML = "YOU LOSE" + "&#129302;";
    div.appendChild(resetBtn);
    btn1.setAttribute(
      "style",
      "background: grey; border: .4rem solid black; cursor: default"
    );
    btn2.setAttribute(
      "style",
      "background: grey; border: .4rem solid black; cursor: default"
    );
    btn3.setAttribute(
      "style",
      "background: grey; border: .4rem solid black; cursor: default"
    );
  }
}
