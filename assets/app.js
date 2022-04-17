const startGamebtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DIFFULT_CHOSE_VLAUE = ROCK;
const DRAW = 'DRAW';
const RESULT_COMPUTER_WIN = 'COMPUTER WIN';
const RESULT_PLAYER_WIN = 'PLAYER WIN';

let gameIsRunnig = false;

const getPlayerChose = () => {
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
const getComputerChoise = () => {
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
const getWinner = (cChoise, pChoise) => {
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
startGamebtn.addEventListener('click', () => {
  if (gameIsRunnig) {
    return;
  }
  gameIsRunnig = true;
  console.log('Loding this Game...');
  const playerChoise = getPlayerChose();
  const ComputerChoise = getComputerChoise();
  const winner = getWinner(
    ComputerChoise,
    playerChoise === DIFFULT_CHOSE_VLAUE
  );
  let winer;
  if (playerChoise) {
    winer = getWinner(ComputerChoise, playerChoise);
  } else {
    winer = getWinner(ComputerChoise, playerChoise);
  }

  let messange = `you picked ${
    playerChoise || DIFFULT_CHOSE_VLAUE
  } and the computer picked ${ComputerChoise || DIFFULT_CHOSE_VLAUE} `;

  if (winner === DRAW) {
    messange = messange + 'case of that you had a draw';
  } else if (winner === RESULT_PLAYER_WIN) {
    messange = messange + 'player Win';
  } else {
    messange = messange + 'Lost';
  }
  alert(messange);
  gameIsRunnig = false;
});
//cnot  realetee the game
//Reset Parameter

const suUp = (b, c, ...numBers) => {
  let sum = 0;
  for (const numb of numBers) {
    sum += numb;
  }
  return sum;
};

console.log(suUp(1, 2, 10, 20));
//
// fuctions Practice
//
//
function squre(number) {
  return number * number;
}

function addintion(num1, num2) {
  return (result = num1 + num2);
}

function myFunc(theObject) {
  theObject.make = 'WMW';
}
let myCar = { make: 'RolseRoys', model: 'yowlon', year: '2022' };
let x, y;
x = myCar.make;
myFunc(myCar);
y = myFunc.make;

const squred = function (number) {
  return number * number;
};
let k = squred(9);

const add = function (num3, num4) {
  return num3 + num4;
};
let h = add(40, 30);
alert(h);

function map(f, a) {
  let resutl = [];
  let i;
  for (i = 0; i != a.length; i++) resutl[i] = f(a[i]);
  return resutl;
}
const f = function (x) {
  return x * x * x;
};
let numbers = [1, 3, 5, 10];
let cup = map(f, numbers);
console.log(cup);

let fuck;
if (k === 0) {
  fuck = function (thobj) {
    thobj.make = 'BMW';
  };
}

//factorial

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// let i=0;

// while(i<10){
//   console.log(`tis is the Number : ${i}`);
//   i++;
// }

function foo(i){
  if (i<0){
    return;
    console.log('Being :'+i);
    foo(i+1);
    console.log('End :'+i);
  };
}
foo(3);

function addSquir(a,b){
  function squre(x){
    return x*x;
  }
  return squre(a)+squre(b);
}
a=addSquir(2,3);
b=addSquir(4,6);

function outerside(x){
  function innerside(y){
    return x+y;
  }
  return innerside;
}

fn_inneSide=outerside(3)

console.log(result = fn_inneSide(5));
console.log(result = outerside(5)(3));

function A(a){
  function b(b){
    function c(c){
      console.log(a+b+c);
    }
    c(3);
  }
  b(2);
}
A(1);
//
function outSidee(){
  let x=7;
  function inSide(x){
    return x*5;
  }
  return inSide;
}
outSidee()(10);
