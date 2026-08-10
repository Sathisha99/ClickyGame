//Click a button or object to earn points so that I can increase my score.
//See my current score during the game so that I know how well I am doing.
//See a countdown timer so that I know how much time is left.
//Have the game end automatically when the time is over (60s) so that the rules are clear and fair.
//See my final score when the game ends so that I know my result.
//Enter my name so that my result can be connected to me
//Submit my score so that it can be saved to the shared scoreboard.
//Get a message that tells me if my score was saved successfully or not so that I understand what happened.

// Variables
let score = 0;
let timeLeft = 5;
let gameStarted = false;
let gameEnded = false;
let interval = null;

const postUrl = "https://hooks.zapier.com/hooks/catch/8338993/ujs9jj9/";



// HTML DOM
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const scoreDisplay = document.getElementById("scoreDisplay");
const timerDisplay = document.getElementById("timerDisplay");
const label1 = document.getElementById("label1");
const input1 = document.getElementById("name");
const messageDisplay = document.getElementById("messageDisplay");

// UI functions / events
button1.addEventListener("click", () => {
  if (!gameEnded) {
    increaseScore();
  }

  if (!gameStarted) {
    startGame();
  }
})

button2.addEventListener("click", () => {
  submitHighScore();
})

input1.style.display = "none";
label1.style.display = "none";
button2.style.display = "none";

// Functions
function increaseScore() {
  score++;
  scoreDisplay.innerText = score;
}

function countdown() {
  timeLeft--;
  timerDisplay.innerText = timeLeft;

  if (timeLeft <= 0) {
    timerDisplay.innerText = 0;
    endGame();
  }
}

function startGame() {
  setInterval(countdown, 1000);
  gameStarted = true;
}

function endGame() {
  gameEnded = true;
  clearInterval(interval);
  button1.style.display = "none";
  button2.style.display = "block";
  input1.style.display = "block";
  label1.style.display = "block";
}

async function submitHighScore() {
  let currentScore = score;
  let playerName = input1.value;

// Stop the button from being clicked again
  button2.disabled = true;

  const response = await fetch(postUrl, {
    method: "POST",
    body: JSON.stringify({
      name: playerName,
      score: currentScore
    })
  });

  console.log(response);

  if (response.ok) {
    messageDisplay.innerText = "Score submitted successfully.";
  } else {
    messageDisplay.innerText = "Score could not be submitted.";
  }
}
