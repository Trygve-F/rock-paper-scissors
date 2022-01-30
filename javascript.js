let playerWins = 0;
let computerWins = 0;

function playGame () {
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
//playerSelection is problematic. Any string can be entered, not just 'rock' 'paper' or 'scissors'
let computerSelection = computerPlay();
    switch (true) {
    case (computerSelection === playerSelection):
        alert('Its a Tie! Try again.');
        break;
    case (computerSelection === 'rock' && playerSelection === 'scissors'):
        alert('You lose! Rock beats Scissors.');
        computerWins = computerWins + 1;
        break;
    case (computerSelection === 'paper' && playerSelection === 'rock'):
        alert('You lose! Paper beats Rock.');
        computerWins = computerWins + 1;
        break;
    case (computerSelection === 'scissors' && playerSelection === 'paper'):
        alert('You Lose! Scissors beats Paper.');
        computerWins = computerWins + 1;
        break;
    default: 
        alert('You Win! ' + playerSelection + ' beats ' + computerSelection + '.')
        playerWins = playerWins + 1;
            }
    }
    

function computerPlay() {
let computerSelection;
let computerThrow = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
(computerThrow === 1) ? computerSelection = 'rock':
(computerThrow === 2) ? computerSelection = 'paper':
computerSelection = 'scissors';
return computerSelection;
}
playGame()

