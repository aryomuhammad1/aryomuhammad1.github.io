'use strict';

// Elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const allCurrent = document.querySelectorAll('.current-score');
const currentP0 = document.querySelector('#current--0');
const currentP1 = document.querySelector('#current--1');
const allScore = document.querySelectorAll('.score');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const allPlayer = document.querySelectorAll('.player');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Functions

let activePlayer = player0;

const switchPlayer = function(player, current) {
    allPlayer.forEach(p => p.classList.remove('player--active'));
    player.classList.add('player--active');
    activePlayer = player;
    current.textContent = '0';
};

const newGame = function() {
    allCurrent.forEach(c => (c.textContent = '0'));
    allScore.forEach(s => (s.textContent = '0'));
    dice.style.display = 'none';
    switchPlayer(player0, currentP1);
};

const generateDiceNumber = (min, max) => {
    return Math.floor(Math.random() * max + min);
};

const rollDice = function() {
    const showCurrent = function(player, current) {
        current.textContent = `${Number(current.textContent) + diceNumber}`;
    };

    let diceNumber = generateDiceNumber(1, 6);
    dice.src = `dice-${diceNumber}.png`;
    dice.style.display = 'block';
    if (activePlayer === player0) {
        if (diceNumber === 1) {
            switchPlayer(player1, currentP0);
        } else {
            showCurrent(player0, currentP0);
        }
    } else {
        if (diceNumber === 1) {
            switchPlayer(player0, currentP1);
        } else {
            showCurrent(player1, currentP1);
        }
    }
};

const holdScore = function() {
    if (activePlayer === player0) {
        showScore(player0, score0, currentP0);
        switchPlayer(player1, currentP0);
    } else {
        showScore(player1, score1, currentP1);
        switchPlayer(player0, currentP1);
    }
};

const showScore = function(player, score, current) {
    score.textContent = `${
    Number(score.textContent) + Number(current.textContent)
  }`;
};

// Event Handlers
btnNew.addEventListener('click', newGame);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);