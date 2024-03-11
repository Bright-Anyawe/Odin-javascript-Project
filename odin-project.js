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
};
const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
const para = document.querySelector("p");
const scoreElement = document.querySelector('#scores')
const displayResult = document.querySelector("#displayResult");
let playerScore = 0;
let computerScore = 0;

buttons[0].addEventListener('click', function playRock() {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    para.textContent = `ComputerSelection: ${computerSelection}`;
    div.appendChild(para);
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++
    }
    else if (playerSelection === computerSelection);

    else {
        computerScore++
    };

    scoreElement.textContent = `PlayerScore: ${playerScore} -  ComputerScore: ${computerScore}`;

    if (playerScore === 5) {
        displayResult.textContent = "You Win!";
        div.appendChild(displayResult);
    }
    else if (computerScore === 5) {
        displayResult.textContent = "You Lose!";
        div.appendChild(displayResult);
    };

    disableButton = () => {
        if (playerScore === 5 || computerScore === 5) {
            buttons.forEach(button => {
                button.disabled = true;
            });
        }
    }
    disableButton();

});


buttons[1].addEventListener('click', function playPaper() {
    const playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    para.textContent = `ComputerSelection: ${computerSelection}`;
    div.appendChild(para);

    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++
    }
    else if (playerSelection === computerSelection) {

    }

    else {
        playerScore++
    }
    scoreElement.textContent = `PlayerScore: ${playerScore}  -  ComputerScore: ${computerScore}`;
    if (playerScore === 5) {
        displayResult.textContent = "You Win!";
        div.appendChild(displayResult);
    }
    else if (computerScore === 5) {
        displayResult.textContent = "You Lose!";
        div.appendChild(displayResult);
    };


    disableButton = () => {
        if (playerScore === 5 || computerScore === 5) {
            buttons.forEach(button => {
                button.disabled = true;
            });
        }
    }
    disableButton();
});

buttons[2].addEventListener('click', function playScissors() {
    const playerSelection = "Scissors";
    const computerSelection = getComputerChoice();
    para.textContent = `ComputerSelection: ${computerSelection}`;
    div.appendChild(para);
    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++
    }
    else if (playerSelection === computerSelection) {

    }

    else {
        playerScore++
    }
    scoreElement.textContent = `PlayerScore: ${playerScore}  -  ComputerScore: ${computerScore}`;

    if (playerScore === 5) {
        displayResult.textContent = "You Win!";
        div.appendChild(displayResult);
    }
    else if (computerScore === 5) {
        displayResult.textContent = "You Lose!";
        div.appendChild(displayResult);
    };

    disableButton = () => {
        if (playerScore === 5 || computerScore === 5) {
            buttons.forEach(button => {
                button.disabled = true;
            });
        }
    }
    disableButton();
});















