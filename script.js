function game(userChoice) {
  let computerChoice = getComputerChoice();
  document.getElementById("user-choice").textContent = userChoice;
  document.getElementById("computer-choice").textContent = computerChoice;

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      setResult("You win!");
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      setResult("It's a draw!");
      break;
    default:
      setResult("Computer wins!");
      break;
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function setResult(message) {
  document.getElementById("result-message").textContent = message;
}
