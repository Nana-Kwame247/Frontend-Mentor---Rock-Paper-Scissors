const buttons = document.querySelectorAll(".btn-circle");
const scoreEl = document.getElementById("score");
const choices = ["paper", "rock", "scissors"];
let userChoice = undefined;
let score = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");

    checkWinner();
  });
});

//function to check winner

function checkWinner() {
  const computerChoice = pickRandomChoice();

  if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    //user won
    // console.log("you won");
    updateScore(1);
  } else if (userChoice === computerChoice) {
    //draw
    // console.log("draw");
  } else {
    // console.log("you lost");
    updateScore(-1);
  }
}

//function to increase score

function updateScore(value) {
  score += value;
  scoreEl.innerText = score;
}

function pickRandomChoice() {
  // return Math.floor(Math.random() * choices.length);
  let computerChoice = Math.random();
  if (computerChoice <= 0.33) {
    return "rock";
  } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
