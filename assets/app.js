const startGamebtn=document.getElementById('start-game-btn');

const ROCK='ROCK';
const PAPER='PAPER';
const SCISSOR='SCISSOR';
const DIFFULT_CHOSE_VLAUE=ROCK;

let gameIsRunnig=false;

const getPlayerChose = function(){
    const slection=prompt(`${ROCK},${PAPER}or ${SCISSOR} ?`,'').toLocaleUpperCase();

    if (
        slection !==ROCK&&
        slection !==PAPER&&
        slection !==SCISSOR
    ){
        alert(`invalid choise! we chose ${DIFFULT_CHOSE_VLAUE} for you!`);
        return DIFFULT_CHOSE_VLAUE;
    }
    return slection;


};

startGamebtn.addEventListener('click',function(){
    if (gameIsRunnig){
        return;
    }
    gameIsRunnig=true;
    console.log('Loding this Game...');
    const playerSeclition= getPlayerChose();
    console.log(playerSeclition);
});//call indirct functions
