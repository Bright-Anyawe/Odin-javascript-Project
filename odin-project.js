

function getComputerChoice() {
    let randomEnd = 3
    let randomChoice = Math.floor(Math.random() * randomEnd) + 1;

    if (randomChoice === 1) {
        return "Rock"
    }
    else if (randomChoice === 2) {
        return "Paper"
    }
    else if (randomChoice === 3) {
        return "Scissors"
    }
}


function playRound(playerSelection, computerSelection) {

    console.log(`playerSelection: ${playerSelection}`)
    console.log(`computerSelection: ${computerSelection}`)

    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        playerSelectionPoints++
        return "You Win!"
    }

    else if (playerSelection === "rock" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie"
    }

    else if (playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors") {
        computerSelectionPoints++
        return "Computer Wins!"
    }

    else if (playerSelection === "null" || playerSelection === "" ||
     playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors") {

        computerSelectionPoints++
        return "Canceled"

    }



    else {

        return "Incorrect value!, Try Again."
    }

    

}



let playerSelectionPoints = 0;
let computerSelectionPoints = 0;




function playGame() {



    for (i = 1; i <= 5; i++) {


        const playerSelection = prompt("Enter your values for the rock, paper , scissors.");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()))
        console.log(`PlayerScore: ${playerSelectionPoints}`)
        console.log(`ComputerScore: ${computerSelectionPoints}`)
    }

    console.log("Game Over!")




    if (playerSelectionPoints > computerSelectionPoints) {
        console.log("Congrat!, You Win The Game")
    }
    else if (playerSelectionPoints < computerSelectionPoints) {
        console.log("You Lose, cdgive it a try!")
    }
    else {
        console.log("You Tied!, you can do better.")
    }



}

playGame()








