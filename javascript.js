//ROCK PAPER SCISSORS

//begin game
//generate prompt with 3 choices, rock paper or scissors
let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();

//rock assign (1), paper assign (2) or scissors assign (3)
let playerThrow 
if (playerSelection === 'rock') {
    playerThrow = 1;
} else if (playerSelection === 'paper') {
    playerThrow = 2;
} else { 
    playerThrow = 3;
}




//for computer;
//generate random whole number between 0-3;
let computerThrow = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

//assign number to rock (1), paper (2), or scissors (3);
let computerSelection
if (computerThrow === 1) {
    computerSelection = 'rock';
} else if (computerThrow ===2) {
    computerSelection = 'paper';
} else {
    computerSelection = 'scissors'
}
/*
console.log(playerThrow)
console.log(playerSelection)
console.log(computerThrow)
console.log(computerSelection)
*/

//for game;
//compare computer number against players;
function playRound (playerThrow, computerThrow) {
    if (computerThrow === 1 && playerThrow === 3) {
        prompt('You lose! Rock beats Scissors.');
    } else if (computerThrow === 2 && playerThrow === 1) {
        prompt('You lose! Paper beats Rock.')
    } else if (computerThrow === 3 && playerThrow === 2) {
        prompt('You Lose! Scissors beats Rock.')
    } else {
        prompt('You Win! ' + playerSelection + ' beats ' + computerSelection + '.')
    }
}
playRound()
//if computer number === player number: TIE play again;
//else if computer number = 1 && player number = 3 computer wins
//else if computer number = 2 && player number = 1 computer wins
//else if computer number = 3 && player number = 2 computer wins
//else player wins
//go to end game


//end game
//pull computer choice and players choice
//"you lose ____ beats ____"
//"you win -player choice- beats -computer choice-"
//reset game