let rps = ['Rock', 'Paper', 'Scissors']

let playerChoice = prompt('Choose "Rock", "Paper", or "Scissors"');

function computerPlay() {
    return randomCompChoice = rps[Math.floor(Math.random() * rps.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return alert('Lose! Paper beats Rock');
    }
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return alert('Win! Rock beats Scissors');
    }
    if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        return alert('Tie! You both chose Rock')
    }
    if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return alert('Lose! Scissors beats Paper');
    }
    if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return alert('Win! Paper beats Rock');
    }
    if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        return alert('Tie! You both chose Paper')
    }
    if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return alert('Lose! Rock beats Scissors');
    }
    if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return alert('Win! Scissors beats Paper');
    }
    if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        return alert('Tie! You both chose Scissors');
    }
}

const playerSelection = playerChoice;
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
