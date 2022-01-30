
function computerPlay() {
let computerSelection;
let computerThrow = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
if (computerThrow === 1) {
    computerSelection = 'rock';
} else if (computerThrow ===2) {
    computerSelection = 'paper';
} else {
    computerSelection = 'scissors'
}
return computerSelection
}

let playerWins = 0;
let computerWins = 0;


function game () {
do { playRound();
    } while (playerWins < 5 && computerWins <5) ;

if (playerWins === 5) {
    alert('You win! ' + 'Your score: ' + playerWins + ' Computer score: ' + computerWins)
}
else if (computerWins === 5) {
    alert('You lose! ' + 'Your score: ' + playerWins + ' Computer score: ' + computerWins)
    }
}


function playRound () {
    let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    let computerSelection = computerPlay();
    if (computerSelection === playerSelection) {
        alert('Its a Tie! Try again.');
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        alert('You lose! Rock beats Scissors.');
        computerWins = computerWins + 1;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        alert('You lose! Paper beats Rock.');
        computerWins = computerWins + 1;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        alert('You Lose! Scissors beats Paper.');
        computerWins = computerWins + 1;
    } else {
        alert('You Win! ' + playerSelection + ' beats ' + computerSelection + '.');
        playerWins = playerWins + 1;
   }
}
game()