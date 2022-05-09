// create a container
const div = document.createElement("div");
document.body.appendChild(div);
div.className = "container";

// create a title
let title = document.createElement("h1");
div.appendChild(title);
title.innerHTML = "Rock, Paper or Scissors";

// create a button container
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

// create p element showing the final & scores
let result = document.createElement("p");
let final1 = document.createElement("p");
div.appendChild(result);
div.appendChild(final1);

// create a reset button
const resetBtn = document.createElement("button");
resetBtn.innerHTML = "restart";

btnContainer.querySelector(".btn1").addEventListener("click", function () {
  if (userScore >= 5) {
    result.innerHTML = "YOU WIN";
    div.appendChild(resetBtn);
  } else if (compScore >= 5) {
    result.innerHTML = "YOU LOSE";
    div.appendChild(resetBtn);
  } else {
    btn1.classList.add("clicking");
    play("Rock");
  }
});

btnContainer
  .querySelector(".btn1")
  .addEventListener("transitionend", function (e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("clicking");
  });

btnContainer.querySelector(".btn2").addEventListener("click", function () {
  if (userScore >= 5) {
    result.innerHTML = "YOU WIN";
    div.appendChild(resetBtn);
  } else if (compScore >= 5) {
    result.innerHTML = "YOU LOSE";
    div.appendChild(resetBtn);
  } else {
    btn2.classList.add("clicking");
    play("Paper");
  }
});

btnContainer
  .querySelector(".btn2")
  .addEventListener("transitionend", function (e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("clicking");
  });

btnContainer.querySelector(".btn3").addEventListener("click", function () {
  if (userScore >= 5) {
    result.innerHTML = "YOU WIN";
    div.appendChild(resetBtn);
  } else if (compScore >= 5) {
    result.innerHTML = "YOU LOSE";
    div.appendChild(resetBtn);
  } else {
    btn3.classList.add("clicking");
    play("Scissors");
  }
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
  result.innerHTML = " ";
  final1.innerHTML = " ";
  div.removeChild(resetBtn);
};

let userScore = 0;
let compScore = 0;
let round = 0;

// Store values and functions for the game
function Game() {
  this.compArray = ["Rock", "Paper", "Scissors"]; //Set array of selection choice

  // Create a random selection for computer
  this.computerPlay = () => {
    const ramdonValue = Math.floor(Math.random() * this.compArray.length);
    return this.compArray[ramdonValue];
  };

  // Main rule for Rock, Paper or Scissors Game and add 1 score for user if he wins
  this.playRound = (playerSelection, computerSelection) => {
    if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Scissors" && computerSelection === "Paper") ||
      (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
      userScore += 1;
      return `You Win This Round! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === computerSelection) {
      return "Tie";
    } else {
      compScore += 1;
      return `You Lose This Round! ${computerSelection} beats ${playerSelection}.`;
    }
  };
}

// Create play() Function to start the game
function play(x) {
  let myGame = new Game(); // Declare a object myGame to store the private values and functions of the game allocate the memory
  // Loop 5 rounds of game
  round += 1;
  let p1 = x;
  while (myGame.compArray.indexOf(p1) == -1) {
    p1 = myGame.playerSelection();
  }
  let p2 = myGame.computerPlay();
  result.innerHTML = myGame.playRound(p1, p2);
  final1.innerHTML = `You: ${userScore} : Computer: ${compScore}`;
}
