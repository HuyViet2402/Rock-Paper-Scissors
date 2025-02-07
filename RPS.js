console.log("Hello world");
const moves = [
    "rock",
    "paper",
    "scissors"
];
function getComputerChoice() {
    let computerchoice = Math.floor(Math.random() * 3);
    return moves[computerchoice];
} 
let humanScores = 0;
let computerScores = 0;

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
    playGround(humanClick, getComputerChoice());
}

const rockButton = document.querySelector("#Rock");
rockButton.addEventListener('click', () => handleClick("rock"));

const paperButton = document.querySelector("#Paper");
paperButton.addEventListener('click', () => handleClick("paper"));

const scissorsButton = document.querySelector("#Scissors");
scissorsButton.addEventListener('click', () => handleClick("scissors"));