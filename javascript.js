let playerScore = 0;
let computerScore = 0;
let playerSelection

document.getElementById('rock').onclick = getButton
document.getElementById('paper').onclick = getButton
document.getElementById('scissors').onclick = getButton

function getButton() {
    playerSelection = this.id;
    playRound()
}

function updateScore(outcome) {
    document.getElementById("results").innerHTML = outcome;
    document.getElementById("score").innerHTML = `Player: ${playerScore} || Computer: ${computerScore}`;
    checkWin();
}

function resetScore() {
    computerScore = 0;
    playerScore = 0;
}

function checkWin() {
    if (playerScore == 5) {
        alert('You won the game! Your score: ' + playerScore + ' Computer score: ' + computerScore);   
        resetScore();
    } if (computerScore == 5) {
        alert('You lost the game! Your score: ' + playerScore + ' Computer score: ' + computerScore);
        resetScore();
        }
    }
    
function playRound () {
let computerSelection = computerPlay();
    switch (true) {
    case computerSelection === playerSelection:
        updateScore('Tie! You both chose ' + playerSelection + '.')
    break;
    case computerSelection === 'rock' && playerSelection === 'scissors':
    case computerSelection === 'paper' && playerSelection === 'rock':
    case computerSelection === 'scissors' && playerSelection === 'paper':
        computerScore++;
        updateScore('You lose the round! ' + computerSelection + ' beats ' + playerSelection + '.');
    break;
    default: playerScore++
        updateScore('You win the round! ' + playerSelection + ' beats ' + computerSelection + '.');
    }
}
        
function computerPlay() {
let computerRandom = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
(computerRandom === 1) ? computerSelection = 'rock':
(computerRandom === 2) ? computerSelection = 'paper':
computerSelection = 'scissors';
return computerSelection;
}
