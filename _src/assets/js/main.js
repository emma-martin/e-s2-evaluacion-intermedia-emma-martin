'use strict';
const inputNumber = document.querySelector('.input');
const submitBtn = document.querySelector('.btn-send');
const triesCounter = document.querySelector('.meter-counter');
const answersBox = document.querySelector('.info');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
const randomNum = getRandomNumber(100);
    console.log(randomNum);
let tries = 0; 
function guessNumber(event){
    event.preventDefault();
    let numberEntered = parseInt(inputNumber.value);
    console.log(numberEntered);
    tries ++;
    triesCounter.innerHTML = `You've tried ${tries} times`;
    if(numberEntered === randomNum){
        answersBox.innerHTML = `You made it! The number is ${randomNum} and it only took you ${tries} attempts`;
    } 
    else if (numberEntered > randomNum){
        answersBox.innerHTML = `Too close but too high!`;
    }
    else if (numberEntered < randomNum){
        answersBox.innerHTML = `Too close but too low!`;
    }
    else {
        answersBox.innerHTML = `Better try another game`;
    }
}



submitBtn.addEventListener('click', guessNumber);