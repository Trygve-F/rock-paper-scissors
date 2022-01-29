//ROCK PAPER SCISSORS

//begin game
//generate prompt with 3 choices, rock paper or scissors
let makePrompt = prompt('Rock, Paper, or Scissors?').toLowerCase();

//rock assign (0), paper assign (1) or scissors assign (2)
let playerSelection 
if (makePrompt === 'rock') {
    playerSelection = 0;
} else if (makePrompt === 'paper') {
    playerSelection = 1
} else { 
    playerSelection = 2
}




//for computer;
//generate random whole number between 0-3;
//assign number to rock (0), paper (1), or scissors (2);

//for game;
//compare computer number against players;
//if computer number === player number: TIE play again;
//else if computer number = 0 && player number = 2 computer wins
//else if computer number = 1 && player number = 0 computer wins
//else if computer number = 2 && player number = 1 computer wins
//else player wins
//go to end game

//end game
//pull computer choice and players choice
//"you lose ____ beats ____"
//"you win -player choice- beats -computer choice-"
//reset game