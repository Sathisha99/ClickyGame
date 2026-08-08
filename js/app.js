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



// HTML DOM
const button1 = document.getElementById("button1");
const scoreDisplay = document.getElementById("scoreDisplay");


// UI functions / events
button1.addEventListener("click", () => {
  increaseScore();
})



// Functions
function increaseScore() {
  score++;
  scoreDisplay.innerText = score;
}
