let randomNumber = (parseInt(Math.random() * 100 + 1));

const input = document.querySelector('#input');
const submit = document.querySelector('#btn');
const previous_guesses = document.querySelector('#guesses');
const remaining = document.querySelector('#Remaining');
const lowOrHigh = document.querySelector('#lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let guesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more then 0')
    } else if (guess > 100) {
        alert('Please enter a number less then 100')
    } else {
        if (numGuesses === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Your Random Number is ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You gussed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Number is too low');
    } else if (guess > randomNumber) {
        displayMessage('Number is too high')
    }
}

function displayGuess(guess) {
    input.value = '';
    previous_guesses.innerHTML += `${guess}, `;
    numGuesses++;
    remaining.innerHTML = `${12 - numGuesses}`

}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    input.value = '';
    input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    startGame();

}

function startGame() {
    const startGame_btn = document.querySelector('#newGame');
    startGame_btn.addEventListener('click', function (e) {
        console.log(e.target);

        randomNumber = (parseInt(Math.random() * 100 + 1));
        guesses = [];
        numGuesses = 1;
        previous_guesses.innerHTML = '';
        remaining.innerHTML = `${12 - numGuesses}`
        lowOrHigh.innerHTML = '';
        input.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}



