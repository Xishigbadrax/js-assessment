function playRound(playerSelection, computerSelection) {
  if (!["rock", "paper", "scissors"].includes(playerSelection)) {
    return "Invalid input. Please choose 'rock', 'paper', or 'scissors'.";
  }

  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playGame() {
  let yourScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Enter your choice (rock, paper, or scissors):"
    );
    playerSelection = playerSelection.toLowerCase();

    while (!["rock", "paper", "scissors"].includes(playerSelection)) {
      alert("Invalid input. Please choose 'rock', 'paper', or 'scissors'.");
      playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
      playerSelection = playerSelection.toLowerCase();
    }

    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    console.log(`Your choice: ${playerSelection}`);
    console.log(`Computer choice: ${computerSelection}`);
    console.log(`Round ${i + 1}: ${roundResult}`);

    if (roundResult === "You win!") {
      yourScore++;
    } else if (roundResult === "You lose!") {
      computerScore++;
    }
  }

  console.log(`Your final score: ${yourScore}`);
  console.log(`Computer's final score: ${computerScore}`);
}

playGame();
