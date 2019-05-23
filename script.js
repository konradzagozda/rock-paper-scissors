let possiblePlays = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return possiblePlays[Math.floor(Math.random()*possiblePlays.length)];
}

function singleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  switch(playerSelection) {
    case 'rock':
      return computerSelection === 'rock' ? 'draw' : computerSelection === 'paper' ?
      'lose' : 'win';
      break;
    case 'scissors':
      return computerSelection === 'scissors' ? 'draw' : computerSelection === 'rock' ?
      'lose' : 'win';
      break;
    case 'paper':
      return computerSelection === 'paper' ? 'draw' : computerSelection === 'scissors' ?
      'lose' : 'win';
      break;
  }
}

let imgs = document.querySelectorAll('img');
let player_move = null;
let playerScore = document.querySelector('#player');
let computerScore = document.querySelector('#computer');
let draws = document.querySelector('#draws')
let message = document.querySelector('#current-message');



function playRound(){
  player_move = this.alt;
  let result = singleRound(player_move, computerPlay());
  if (result === 'win') {
        playerScore.textContent++;
        message.textContent = "You Win!";
      } else if (result === 'lose') {
        message.textContent = "You Lose!";
        computerScore.textContent++;
      } else {
        message.textContent = "Tie!";
        draws.textContent++;
      }
}

imgs.forEach(x => x.addEventListener('click', playRound));


// @TODO: gradient changes depending on results. (the better result -> greener screen)
