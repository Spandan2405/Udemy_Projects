function randomNumber(){
    var x1 = Math.random();  // COULD HAVE USED FLOOR AND ADDED 1 
    x1 = x1 * 6  ;
    var y1 = Math.round(x1);
    return y1;
}

// GENERATE 2 RN AND ADD THEM TO THE IMG SRC LINK 

function d1(){
    var x = randomNumber();
    if(x == 1){
        document.querySelector(".img1").setAttribute("src","./images/dice1.png");
    }
    else if(x == 2){
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");
    }
    else if(x == 3){
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
    }
    else if(x == 4){
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    }
    else if(x == 5){
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    }
    else if(x == 6){
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    }
    // console.log(x); 
    return x;
}
function d2(){
    var y = randomNumber();
    if(y == 1){
        document.querySelector(".img2").setAttribute("src","./images/dice1.png");
    }
    else if(y == 2){
        document.querySelector(".img2").setAttribute("src","./images/dice2.png");
    }
    else if(y == 3){
        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
    }
    else if(y == 4){
        document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    }
    else if(y == 5){
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    }
    else if(y == 6){
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    }
    // console.log(y);
    return y;
    
}

function output(){
    var x = d1();
    var y = d2();
    console.log(x);
    console.log(y);

if(x > y){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(x < y){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
}   
output();