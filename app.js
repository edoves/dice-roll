'use strict';



let dice, randNum = 0;

// no dice at the start
document.querySelector('.dice').style.display = 'none';

// When the Roll Dice button click then roll the dice
document.querySelector('#roll').addEventListener('click', () => {

    // Get a random number from 0 6
    const diceRoll = Math.floor(Math.random() * 6) + 1;


    // Roll the dice
    dice = document.querySelector('.dice');
    dice.style.display = 'block';
    dice.style.margin = '0 auto';
    dice.src = `img/dice-${diceRoll}.png`;

    // update the numeric number of dice synchronize to the dice
    document.querySelector('.dice-rand-num').textContent = diceRoll;


});
