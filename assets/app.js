const startGamebtn=document.getElementById('start-game-btn');

function startGame(){
    console.log('Loding Game....');
}

// startGame();//dirctly call function

let greet={
    subject:function since(){
        let first='dary';
        let second='compiut';
        return first+second;

    }
}

startGamebtn.addEventListener('click',function(){
    console.log('Loding this Game...');
});//call indirct functions
