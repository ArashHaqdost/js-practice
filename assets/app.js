function  getName() {
   return prompt('Enter your Name :','');
    
}

function showName(){
    const userName = getName();
    console.log ('hoello :' + userName);
}
showName();

let hobbies=['footbal','runnig ',];
let newHobies=[...hobbies];
console.log(newHobies);

let peroson={
    name:"Max"
};
let newPerson= { ...peroson};
console.log(newPerson);