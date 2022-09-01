"use strict"

let startBtn = document.querySelector("button");
let horse1 = document.querySelector("#horse-1");
let horse2 = document.querySelector("#horse-2");
let horse3 = document.querySelector("#horse-3");
let line = document.querySelector("hr");
let winnerWrapper = document.querySelector("#winner")


let one = 10;
let two = 10;
let three = 10;

let winner = "";


startBtn.addEventListener("click", function(){
    const int = setInterval(function(){
        if(one >= 1720){
            if(winner === ""){
                winner = "One";
                winnerWrapper.innerText = "Horse 1 won!";
            }

        }else{
            one += Math.random()*100 + 10;
            horse1.style.left = `${one}px`;

        }
        if(two >= 1720){
            if(winner === ""){
                winner = "Two"
                winnerWrapper.innerText = "Horse 2 won!";

            }
            
        }else{
            two += Math.random()*100 + 10;
            horse2.style.left = `${two}px`;

        }
        if(three >= 1720){
            if(winner === ""){
                winner = "Three"
                winnerWrapper.innerText = "Horse 3 won!";

            }
        }else{
            three += Math.random()*100 + 10;
            horse3.style.left = `${three}px`;

        }
        if(one >= 1700 && two>= 1700 && three>=1700){
            clearInterval(int);
        }
        
    },500);
})