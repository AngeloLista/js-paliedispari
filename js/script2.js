/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// Random Number Function
function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randomNumber;
}

// Even or Odd Function

function isEven(number) {
    return number % 2 === 0 ? true : false;
}

// User inputs
let userChoice = prompt('Scegli "pari" o "dispari"', 'pari').toLowerCase().trim();
while(userChoice !== 'pari' && userChoice !== 'dispari');

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5', '3'));
while(isNaN(userNumber)  || userNumber < 1 || userNumber > 5);

// Cpu Inputs
const cpuNumber = getRandomNumber(1, 5);

let sum = userNumber + cpuNumber;

// Stabilire un vincitore

if (isEven(sum) && userChoice === 'pari') {
    console.log(`Hai vinto!!!. Hai scelto ${userChoice}, il tuo numero è ${userNumber} mentre quello del computer è ${cpuNumber}. La somma dei numeri è ${sum}.`);
} else {
    console.log(`Hai perso... Hai scelto ${userChoice}, il tuo numero è ${userNumber} mentre quello del computer è ${cpuNumber}. La somma dei numeri è ${sum}.`);
}