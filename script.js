let possiblePlays = ['rock', 'paper', 'scissors'];
let currentPlayerPick = null;
let currentComputerPick = null;


function computerPlay() {
  return possiblePlays[Math.floor(Math.random()*possiblePlays.length)];
}

function singleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  currentPlayerPick = playerSelection;
  currentComputerPick = computerSelection;
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

let imgs = document.querySelectorAll('#main img');
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
imgs.forEach(x => x.addEventListener('click', changePicture));
imgs.forEach(x => x.addEventListener('click', checkForWinner));



function changePicture(e) {
  let dict = {
    rock: "media/rock.png",
    scissors: "media/scissors.png",
    paper: "media/paper.png"
  };
  let computer = document.querySelector('#computer-pick img');
  let player = document.querySelector('#player-pick img');
  computer.setAttribute("src", dict[`${currentComputerPick}`]);
  console.log(currentComputerPick, currentPlayerPick);
  player.setAttribute("src", dict[`${currentPlayerPick}`]);
}


function checkForWinner(e) {
  let announce = false;
  let tryAgain = document.createElement('button');
  if (+playerScore.textContent >= 5 || +computerScore.textContent >= 5) {
    announce = document.createElement('div');
    announce.classList.add('announce');
    tryAgain.textContent = 'Try again?';
    if (+playerScore.textContent > +computerScore.textContent) {
      announce.classList.add('winner');
      announce.innerHTML = '<p>Congratulations! You\'ve won!!!</p>';
    } else {
      announce.classList.add('loser');
      announce.innerHTML= '<p>Unfortunately! Computer turned out smarter this time!</p>';
    }
  }
  if (announce) {
    let body = document.querySelector('body');
    imgs.forEach(x => x.removeEventListener('click', playRound));
    imgs.forEach(x => x.removeEventListener('click', changePicture));
    imgs.forEach(x => x.removeEventListener('click', checkForWinner));
    body.appendChild(announce);
    announce.appendChild(tryAgain);
    tryAgain.addEventListener('click', reset);
  }
}

function reset(){
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  draws.textContent = 0;
  imgs.forEach(x => x.addEventListener('click', playRound));
  imgs.forEach(x => x.addEventListener('click', changePicture));
  imgs.forEach(x => x.addEventListener('click', checkForWinner));
  document.querySelector('.announce').outerHTML = '';
}
