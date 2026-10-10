let playerScore = 0;
let computerScore = 0;

function playGame(playerMove) {
    const moves = ["Rock", "Paper", "Scissors"];
    const computerMove = moves[Math.floor(Math.random() * moves.length)];
    let roundResult;

    if (playerMove === computerMove) {
        roundResult = "It's a tie!";
    } else if (
        (playerMove === "Rock" && computerMove === "Scissors") ||
        (playerMove === "Paper" && computerMove === "Rock") ||
        (playerMove === "Scissors" && computerMove === "Paper")
    ) {
        playerScore += 1;
        roundResult = "You win this round!";
    } else {
        computerScore += 1;
        roundResult = "Computer wins this round!";
    }

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("result").textContent =
        `You chose ${playerMove}. Computer chose ${computerMove}. ${roundResult}`;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("result").textContent = "Game reset. Choose your move!";
}