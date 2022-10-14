/* 
Pari e Dispari
L’utente sceglie pari o dispari
e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.
*/

// chiedo all'utente di scegliere tra pari e dispari con un prompt()
const userChoice = prompt('Pari o Dispari?');
console.log(userChoice);

// chiedo all'utente di inserire un numero da 1 a 5 con un prompt()
const userNumber = Number(prompt('Scegli un numero da 1 a 5'));
console.log('Il tuo numero è: ', userNumber);

// genero i numeri random per il computer con una funzione
function randomNumbers (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// dichiaro una variabile per i numeri random del il pc
const pcNumber = randomNumbers (1, 5);
console.log('Il numero del pc è: ', pcNumber);

// sommo il numero dell'utente e quello del pc
let somma = userNumber + pcNumber;
console.log('Somma', somma);