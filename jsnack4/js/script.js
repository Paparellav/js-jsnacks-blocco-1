// Snack 4 
// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

//chiedere all'utente di inserire un numero di 4 cifre

// for (let i = 0; i <= 1; i++) {
//     let userNumber = prompt('Inserisci un numero di 4 cifre');
    
//     if (userNumber > 999 && userNumber < 10000) {
//         console.log(userNumber, typeof(userNumber));
//     } else {
//         alert('Il numero inserito non ha 4 caratteri. Tentativi rimasti: 1');
//     }
// }

let userNumber = parseInt(prompt('Inserisci un numero di 4 cifre'));
console.log(userNumber, typeof (userNumber));

let sumOfNumber = 0;

while (userNumber) {
    sumOfNumber += userNumber % 10;
    userNumber = Math.floor(userNumber / 10);
}

console.log(sumOfNumber);
