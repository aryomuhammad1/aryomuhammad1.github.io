'use strict';
// What i learned?
// Penggunaaan metode matematika untuk men-generate angka asal
// event handlers
// manipulasi css menggunakan javascript
// manipulasi dom sederhana

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const displayMessage = message => {
    document.querySelector('.message').textContent = message;
};
const displayNumber = number => {
    document.querySelector('.number').textContent = number;
};
const displayScore = score => {
    document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    } else {
        if (guess === secretNumber) {
            displayNumber(secretNumber);
            displayMessage(': D Correct number!');
            displayNumber(secretNumber);
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (score > document.querySelector('.highscore').textContent) {
                document.querySelector('.highscore').textContent = score;
            }
        } else if (guess < secretNumber) {
            if (score > 1) {
                displayMessage(':( Too low!');
                score--;
                displayScore(score);
            } else {
                document.querySelector('.score').textContent = 0;
                displayMessage('X( You lost the game!');
            }
        } else if (guess > secretNumber) {
            if (score > 1) {
                displayMessage(':( Too high!');
                score--;
                displayScore(score);
            } else {
                document.querySelector('.score').textContent = 0;
                displayMessage('X( You lost the game!');
            }
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem';
    displayNumber('?');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = 20;
    displayMessage('Start guessing...');
});