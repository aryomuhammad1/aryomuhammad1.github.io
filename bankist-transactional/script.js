'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-07-26T17:01:17.194Z',
        '2020-07-28T23:36:17.929Z',
        '2020-08-01T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-07-26T17:01:17.194Z',
        '2020-07-28T23:36:17.929Z',
        '2020-08-01T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-07-26T17:01:17.194Z',
        '2020-07-28T23:36:17.929Z',
        '2020-08-01T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Functions

let currAccount;
let sorted = false;

const displayMovements = function(acc, sort = false) {
    containerMovements.innerHTML = '';
    console.log(acc.movements);
    let movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
    movs.forEach(function(mov, i) {
        let now = new Date(acc.movementsDates[i]);
        let date = now.getDate();
        let month = now.getMonth();
        let year = now.getFullYear();
        let movsDate = `${date}/${month}/${year}`;
        let type = mov > 0 ? 'deposit' : 'withdrawal';
        let html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${movsDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
        </div>`;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = function(acc) {
    const balance = acc.movements.reduce((acc, cur) => acc + cur);
    acc.balance = balance;
    labelBalance.textContent = `${balance.toFixed(2)}€`;
};

const calcDisplaySummary = function(acc) {
    // const eurToUsd = 1.1;
    const income = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${income.toFixed(2)}€`;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(depo => (depo * acc.interestRate) / 100)
        .filter(int => int >= 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsername = function(accs) {
    accs.forEach(function(acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            // .map(n => n.slice(0, 1))
            .map(n => n[0])
            .join('');
    });
};
createUsername(accounts);

const displayDate = function(e) {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const hour = now.getHours().toString().padStart(2, 0);
    const minute = now.getMinutes().toString().padStart(2, 0);
    labelDate.textContent = `${date}/${month}/${year}, ${hour}:${minute} `;
};

const updatePage = function() {
    displayMovements(currAccount);
    calcDisplayBalance(currAccount);
    calcDisplaySummary(currAccount);
    displayDate();
};

let timer;

const logoutTimer = function() {
    if (timer) {
        clearInterval(timer);
    }
    let time = 300;
    timer = setInterval(() => {
        let min = String(Math.trunc(time / 60)).padStart(2, 0);
        let sec = String(time % 60).padStart(2, 0);
        console.log(`${min}:${sec}, time=>${time}`);
        labelTimer.textContent = `${min}:${sec}`;
        if (time === 0) {
            clearInterval(timer);
            console.log('clear');
            currAccount = '';
            containerApp.style.opacity = '0';
            labelWelcome.textContent = 'Log in to get started';
        }
        time--;
    }, 1000);
};

// Event Listeners

const login = function(e) {
    e.preventDefault();
    currAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    if (currAccount === undefined) return;
    if (currAccount.pin === Number(inputLoginPin.value)) {
        labelWelcome.textContent = `Welcome back, ${
      currAccount.owner.split(' ')[0]
    }`;
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        updatePage();
        containerApp.style.opacity = '100';
        logoutTimer();
        document.addEventListener('click', logoutTimer);
    }
};
btnLogin.addEventListener('click', login);

const logout = function(e) {
    e.preventDefault();
    const accountLogout = inputCloseUsername.value;
    const pinLogout = Number(inputClosePin.value);
    if (!accountLogout && !accountLogout === currAccount.username) return;
    if (pinLogout === currAccount.pin) {
        currAccount = '';
        containerApp.style.opacity = '0';
        labelWelcome.textContent = 'Log in to get started';
        clearInterval(timer);
        document.removeEventListener('click', logoutTimer);
    }
};
btnClose.addEventListener('click', logout);

const transfer = function(e) {
    e.preventDefault();
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    const amount = Number(inputTransferAmount.value);
    // Prettier tidak mendukung optional chaining, cari solusinya!
    if (!receiverAcc) return;
    if (
        amount > 0 &&
        currAccount.balance >= amount &&
        receiverAcc.username !== currAccount.username
    ) {
        const now = new Date().toISOString();
        currAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        currAccount.movementsDates.push(now);
        receiverAcc.movementsDates.push(now);
        inputTransferTo.value = inputTransferAmount.value = '';
        inputTransferAmount.blur();
        updatePage();
    }
};

btnTransfer.addEventListener('click', transfer);

const loanRequest = function(e) {
    e.preventDefault();
    const amount = Math.floor(inputLoanAmount.value);
    if (amount > 0 && currAccount.movements.some(mov => mov >= amount * 0.1)) {
        const now = new Date().toISOString();
        currAccount.movements.push(amount);
        currAccount.movementsDates.push(now);
        inputLoanAmount.value = '';
        inputLoanAmount.blur();
        updatePage();
    }
};
btnLoan.addEventListener('click', loanRequest);

btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayMovements(currAccount, !sorted);
    sorted = !sorted;
});