// Store values and functions for the game
function Game() {
  this.score = 0; //Set default value as 0
  this.round = 0; //Set default value as 0
  this.compArray = ["rock", "paper", "scissors"]; //Set array of selection choice

  // Allow user to input a selection
  this.playerSelection = () => {
    return prompt(
      `Round ${this.round}, Please enter your selection (Rock, Paper or Scissors)`
    ).toLowerCase();
  };

  // Create a random selection for computer
  this.computerPlay = () => {
    const ramdonValue = Math.floor(Math.random() * this.compArray.length);
    return this.compArray[ramdonValue];
  };

  // Main rule for Rock, Paper or Scissors Game and add 1 score for user if he wins
  this.playRound = (playerSelection, computerSelection) => {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      this.score += 1;
      return `You Win This Round! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === computerSelection) {
      return "Tie";
    } else {
      return `You Lose This Round! ${computerSelection} beats ${playerSelection}.`;
    }
  };
}

// Create play() Function to start the game
function play() {
  let myGame = new Game(); // Declare a object myGame to store the private values and functions of the game allocate the memory
  console.log("game start!");
  for (let i = 0; i < 5; i++) {
    // Loop 5 rounds of game
    myGame.round += 1;
    let p1 = myGame.playerSelection();
    while (myGame.compArray.indexOf(p1) == -1) {
      p1 = myGame.playerSelection();
    }
    let p2 = myGame.computerPlay();
    let result = myGame.playRound(p1, p2);
    console.log(result);
  }
  console.log(`Score: ${myGame.score}/${myGame.round}`);
}
