function  getName() {
   return prompt('Enter your Name :','');
    
}

function showName(){
    const userName = getName();
    console.log ('hoello :' + userName);
}
showName();
