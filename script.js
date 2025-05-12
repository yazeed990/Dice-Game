'use strict';
const diceBtn = document.querySelector('.btn--roll');
const collect = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
let toBeCollected1 = 0;
let toBeCollected2 = 0;

let score1 = 0;
let score2 = 0;
const scorePlayer1 = document.getElementById('score--0');
const scorePlayer2 = document.getElementById('score--1');
scorePlayer1.textContent = score1;
scorePlayer2.textContent = score2;

const diceImg = document.querySelector('.dice');

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const name1 = document.getElementById('name--0');
const name2 = document.getElementById('name--1');

const reStart = function () {
  toBeCollected1 = 0;
  toBeCollected2 = 0;
  score1 = 0;
  score2 = 0;
  current1.textContent = toBeCollected1;
  current2.textContent = toBeCollected2;
  scorePlayer1.textContent = score1;
  scorePlayer2.textContent = score2;
  name1.textContent = 'اللاعب 1';
  name2.textContent = 'اللاعب 2';
  if (player2.classList.contains('player--active')) {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
};

diceBtn.addEventListener('click', function () {
  let diceNumber = Number(Math.trunc(Math.random() * 6) + 1);
  diceImg.src = `public/dice-${diceNumber}.png`;

  const playerActive = document.querySelector('.player--active');

  if (playerActive.classList.contains('player--0')) {
    if (diceNumber == 1) {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      toBeCollected1 = 0;
      current1.textContent = toBeCollected1;
      console.log('Next turn');
    } else {
      toBeCollected1 = toBeCollected1 + diceNumber;
      current1.textContent = toBeCollected1;
    }
  } else if (playerActive.classList.contains('player--1')) {
    if (diceNumber == 1) {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      toBeCollected2 = 0;
      current2.textContent = toBeCollected2;
      console.log('Next turn');
    } else {
      toBeCollected2 = toBeCollected2 + diceNumber;
      current2.textContent = toBeCollected2;
    }
  }
});

collect.addEventListener('click', function () {
  const playerActive = document.querySelector('.player--active');

  if (playerActive.classList.contains('player--0')) {
    score1 = score1 + toBeCollected1;
    scorePlayer1.textContent = score1;
    toBeCollected1 = 0;
    current1.textContent = toBeCollected1;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');

    if (score1 >= 10) {
      name1.textContent = '🏆الاعب الاول فاز';
    }
  } else {
    score2 = score2 + toBeCollected2;
    scorePlayer2.textContent = score2;
    toBeCollected2 = 0;
    current2.textContent = toBeCollected2;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');

    if (score2 >= 10) {
      name2.textContent = '🏆الاعب الثاني فاز';
    }
  }
});

newGame.addEventListener('click', reStart);
