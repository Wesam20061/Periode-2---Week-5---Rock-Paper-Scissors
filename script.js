
const computerChoice = document.getElementById('computerChoice');
const playerChoice = document.getElementById('playerChoice');
const resultOutput = document.getElementById('resultOutput');


let player, computer, result;


const possibleChoices = document.querySelectorAll('button');


possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.querySelector('span').innerHTML = player;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    computer = choices[randomNum];
    computerChoice.querySelector('span').innerHTML = computer;
}

function getResult() {
    if (player === computer) {
        result = 'Gelijkspel!';
    } else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        result = 'Je hebt gewonnen!';
    } else {
        result = 'Je hebt verloren!';
    }
    resultOutput.querySelector('span').innerHTML = result;
}