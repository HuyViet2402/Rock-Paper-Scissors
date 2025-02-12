console.log("Hello world");
const moves = [
    "rock",
    "paper",
    "scissors"
];
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return moves[computerChoice];
} 
let humanScores = 0;
let computerScores = 0;
let winner = "winner";

function playGround(humanChoice, computerChoice) {
    console.log("You choose: " + humanChoice);
    console.log("Computer choose: " + computerChoice);
    if(humanChoice == computerChoice) {
        console.log("Draw");
    }
    else {
        if(humanChoice == "rock") {
            if(computerChoice == "scissors") {
                console.log("You win.");
                humanScores++;
                console.log("Your score: " + humanScores);
                console.log("Computer score: " + computerScores);
            }
            else {
                console.log("You loose.");
                computerScores++;
                console.log("Your score: " + humanScores);
                console.log("Computer score: " + computerScores);
            }
        }
        if(humanChoice == "paper") {
            if(computerChoice == "rock") {
                console.log("You win.");
                humanScores++;
                console.log("Your score: " + humanScores);
                console.log("Computer score: " + computerScores);
            }
            else {
                console.log("You loose.");
                computerScores++;
                console.log("Your score: " + humanScores);
                console.log("Computer score: " + computerScores);
            }
        }
        if(humanChoice == "scissors") {
            if(computerChoice == "paper") {
                console.log("You win.");
                humanScores++;
                console.log("Your score: " + humanScores);
                console.log("Computer score: " + computerScores);
            }
            else {
                console.log("You loose.");
                computerScores++;
                console.log("Your score: " + humanScores);
                console.log("Computer score: " + computerScores);
            }
        }
    }
}
// console.log(getHumanChoice());
// console.log(getComputerChoice());
function handleClick(humanClick) {
    let computerChoice = getComputerChoice();
    playGround(humanClick, computerChoice);
    updateAfterMove(humanClick, computerChoice);
    
    if (humanScores == 5 || computerScores == 5) {
        if(humanScores == 5) {
            winner = "Human";
        }
        else {
            winner = "Computer";
        }

        if(window.confirm(winner + " win. Retry ?")) {
            restartGame();
        }
        else {
            
        }
    }
}


function restartGame() {
    playerMoveImg.src = "./hello.png"
    computerMoveImg.src = "./hello.png";
    humanScores = 0;
    computerScores = 0;
    playerPointsText.textContent = "Player's point: " + humanScores.toString();
    computerPointsText.textContent = "Computer's point: " + computerScores.toString();
}
function updateAfterMove(humanClick, computerChoice) {
    if(humanClick == "rock") {
        playerMoveImg.src = "./Rock.png";
    }
    else if(humanClick == "scissors") {
        playerMoveImg.src = "./Scissors.png"
    }
    else {
        playerMoveImg.src = "./paper.png"
    }

    if(computerChoice == "rock") {
        computerMoveImg.src = "./Rock.png";
    }
    else if(computerChoice == "scissors") {
        computerMoveImg.src = "./Scissors.png"
    }
    else {
        computerMoveImg.src = "./paper.png"
    }

    playerPointsText.textContent = "Player's point: " + humanScores.toString();
    computerPointsText.textContent = "Computer's point: " + computerScores.toString();
}

const rockButton = document.querySelector("#Rock");
rockButton.addEventListener('click', () => handleClick("rock"));

const paperButton = document.querySelector("#Paper");
paperButton.addEventListener('click', () => handleClick("paper"));

const scissorsButton = document.querySelector("#Scissors");
scissorsButton.addEventListener('click', () => handleClick("scissors"));

const playerPointsText = document.querySelector(".header .RHS #pPoints");
const computerPointsText = document.querySelector(".header .RHS #cPoints");

const playerMoveImg = document.querySelector(".moveDisplay .Down #pMove");
const computerMoveImg = document.querySelector(".moveDisplay .Down #cMove");

