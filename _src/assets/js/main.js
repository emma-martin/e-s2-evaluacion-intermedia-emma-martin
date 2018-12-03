'use strict';


const inputNumber = document.querySelector('.input');
const submitBtn = document.querySelector('.btn-send');
const triesCounter = document.querySelector('.meter-counter');
const answersBox = document.querySelector('.info');






function guessNumber(event){
    //random function and a const for me ==>> randomNum
    function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
    const randomNum = getRandomNumber(100);
    console.log(randomNum);
    event.preventDefault();

    if(inputNumber.innerHTML === randomNum){
        answersBox.innerHTML = `You made it! The number is ${randomNum}`;
    } 
    else if (inputNumber.innerHTML > randomNum){
        answersBox.innerHTML = `Too close but too high! The number is ${randomNum}`;
    }
    else if (inputNumber.innerHTML < randomNum){
        answersBox.innerHTML = `Too close but too low! The number is ${randomNum}`;
    }
    else {
        answersBox.innerHTML = `Better try another game`;
    }
}

submitBtn.addEventListener('click', guessNumber);
