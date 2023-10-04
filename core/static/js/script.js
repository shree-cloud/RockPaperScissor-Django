const choices = ["rock", "paper", "scissor"];
let userScore = 0;
let compScore = 0;
let userPoints = 0;
let compPoints = 0;

const userChoiceImg = document.getElementById("user-choice");
const compChoiceImg = document.getElementById("comp-choice");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const message = document.getElementById("message");
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const userPointsSpan = document.getElementById("user-points");
const compPointsSpan = document.getElementById("comp-points");

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function updateChoices(userChoice, compChoice) {
    userChoiceImg.src = `/static/images/${userChoice}-user.png`;
    compChoiceImg.src = `/static/images/${compChoice}.png`;
}

function win(userChoice, compChoice) {
    userPoints++;
    userPointsSpan.textContent = userPoints;
    message.textContent = `You win! ${userChoice} beats ${compChoice}`;
    if (userPoints === 5) {
        userScore++;
        userPointsSpan.textContent = userPoints;
        userScoreSpan.textContent = userScore;
        // scoreboard.textContent = "User Wins!";
        alert("User wins the game!");
        resetGame();
    }
}

function lose(userChoice, compChoice) {
    compPoints++;
    compPointsSpan.textContent = compPoints;
    message.textContent = `You lose! ${compChoice} beats ${userChoice}`;
    if (compPoints === 5) {
        compScore++;
        compPointsSpan.textContent = compPoints;
        compScoreSpan.textContent = compScore;
        // scoreboard.textContent = "Computer Wins!";
        alert("Computer wins the game!");
        resetGame();
    }
}

function draw(userChoice) {
    message.textContent = `It's a draw! You both chose ${userChoice}`;
}


function resetGame() {
    userPoints = 0;
    compPoints = 0;
    userPointsSpan.textContent = userPoints;
    compPointsSpan.textContent = compPoints;
}


function game(userChoice) {
    const compChoice = getComputerChoice();
    updateChoices(userChoice, compChoice);

    switch (userChoice + compChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice);
            break;
    }
}

rockBtn.addEventListener("click", () => game("rock"));
paperBtn.addEventListener("click", () => game("paper"));
scissorBtn.addEventListener("click", () => game("scissor"));


document.getElementById("reset").addEventListener("click", function() {
    userPoints = 0;
    compPoints = 0;
    userPointsSpan.textContent = userPoints;
    compPointsSpan.textContent = compPoints;
    userScore = 0;
    compScore = 0;
    userScoreSpan.textContent = userScore;
    compScoreSpan.textContent = compScore;
});