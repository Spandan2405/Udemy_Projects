function randomNumber(){
    return Math.ceil(Math.random() * 6);
}

// GENERATE 2 RN AND ADD THEM TO THE IMG SRC LINK 
function diceImage(diceImage, diceNumber){
    document.querySelector(`.img${diceImage}`).setAttribute("src",`./images/dice${diceNumber}.png`);
}

function output(){
    var dice1 = randomNumber();
    var dice2 = randomNumber();
    diceImage(1,dice1);
    diceImage(2,dice2);
    console.log(dice1);
    console.log(dice2);

if(dice1 > dice2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(dice1 < dice2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
}   
output();
