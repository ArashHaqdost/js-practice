const startGamebtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DIFFULT_CHOSE_VLAUE = ROCK;
const DRAW = 'DRAW';
const RESULT_COMPUTER_WIN = 'COMPUTER WIN';
const RESULT_PLAYER_WIN = 'PLAYER WIN';

let gameIsRunnig = false;

const getPlayerChose =  () => {
  const slection = prompt(
    `${ROCK},${PAPER}or ${SCISSOR} ?`,
    ''
  ).toLocaleUpperCase();

  if (slection !== ROCK && slection !== PAPER && slection !== SCISSOR) {
    alert(`invalid choise! we chose ${DIFFULT_CHOSE_VLAUE} for you!`);
    return DIFFULT_CHOSE_VLAUE;
  }
  return slection;
};
//start the random functions
const getComputerChoise =  ()=> {
  const randoValue = Math.random();
  if (randoValue < 0.34) {
    return ROCK;
  } else if (randoValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};
//start the  Get winner functions
const getWinner =  (cChoise, pChoise) => {
  if (cChoise === pChoise) {
    return DRAW;
  } else if (
    (cChoise === ROCK && pChoise === SCISSOR) ||
    (cChoise === PAPER && pChoise === ROCK) ||
    (cChoise === SCISSOR && pChoise === PAPER)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  } 
};
//start the eventListner
startGamebtn.addEventListener('click',  () => {
  if (gameIsRunnig) {
    return;
  }
  gameIsRunnig = true;
  console.log('Loding this Game...');
  const playerChoise = getPlayerChose();
  const ComputerChoise = getComputerChoise();
  const winner = getWinner(ComputerChoise, playerChoise);
  console.log(winner); 
});
//call indirct functions
