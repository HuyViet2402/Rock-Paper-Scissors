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
function getHumanChoice() {
    let humanChoice = window.prompt("Enter your choice ?");
    while(!moves.includes(humanChoice.toLowerCase())) {
        humanChoice = window.prompt("Invalid choice! Try again");
    }
    return humanChoice.toLowerCase();
}
let humanScores = 0;
let computerScore = 0;

function playground(humanChoice, computerChoice) {
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
                console.log("Computer score: " + computerScore);
            }
            else {
                console.log("You loose.");
                computerScore++;
                console.log("Your score: " + humanScores);
                console.log("Computer score: " + computerScore);
            }
        }
        if(humanChoice == "paper") {
            if(computerChoice == "rock") {
                console.log("You win.");
                humanScores++;
                console.log("Your score: " + humanScores);
                console.log("Computer score: " + computerScore);
            }
            else {
                console.log("You loose.");
                computerScore++;
                console.log("Your score: " + humanScores);
                console.log("Computer score: " + computerScore);
            }
        }
        if(humanChoice == "scissors") {
            if(computerChoice == "paper") {
                console.log("You win.");
                humanScores++;
                console.log("Your score: " + humanScores);
                console.log("Computer score: " + computerScore);
            }
            else {
                console.log("You loose.");
                computerScore++;
                console.log("Your score: " + humanScores);
                console.log("Computer score: " + computerScore);
            }
        }
    }
}
// console.log(getHumanChoice());
// console.log(getComputerChoice());
function playRPS() {
    let humanChoice = null;
    let computerChoice = null;
    while(true) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playground(humanChoice, computerChoice);
    }
}
playRPS();