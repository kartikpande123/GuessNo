function resetGame() {
  attempts = 0;
  targetNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("message").innerText = "";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("checkButton").disabled = false;
}

function getHighScore() {
  return localStorage.getItem("highScore") || "-";
}

function setHighScore(score) {
  localStorage.setItem("highScore", score);
}

let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById("message").innerText =
      "Please enter a valid number between 1 and 100.";
  } else {
    attempts++;
    if (userGuess === targetNumber) {
      const highScore = getHighScore();
      if (highScore === "-" || attempts < highScore) {
        setHighScore(attempts);
      }

      document.getElementById(
        "message"
      ).innerText = `Congratulations! You guessed the correct number (${targetNumber}) in ${attempts} attempts.`;
      document.getElementById(
        "highScore"
      ).innerText = `High Score: ${getHighScore()}`;
      document.getElementById("guessInput").disabled = true;
      document.getElementById("checkButton").disabled = true;
    } else if (userGuess < targetNumber) {
      document.getElementById("message").innerText =
        "Try again! The number is higher.";
    } else {
      document.getElementById("message").innerText =
        "Try again! The number is lower.";
    }
  }
}

// Reset the game for a new attempt
function resetGame() {
  attempts = 0;
  targetNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("message").innerText = "";
  document.getElementById(
    "highScore"
  ).innerText = `High Score: ${getHighScore()}`;
  document.getElementById("guessInput").disabled = false;
  document.getElementById("checkButton").disabled = false;
}
