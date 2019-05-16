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

function game() {
  let round = 0;
  let playerScore = 0;
  let computerScore = 0;
  let draws = 0;
  while (round < 5) {
    let playerMove = prompt('Tell me your pick ( rock / paper / scissors)');
    let result = singleRound(playerMove, computerPlay());
    if (result === 'win') {
      playerScore++;
      console.log('you win');
    } else if (result === 'lose') {
      console.log('you lose');
      computerScore++;
    } else {
      console.log('draw');
      draws++;
    }
    round++;
  }
  let winner = playerScore > computerScore ? 'player' : playerScore === computerScore ? 'no one' : 'computer';
  console.log('And the winner is... ', winner);
  return winner;
}

game();
