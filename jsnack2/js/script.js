// Secondo snack
// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

const arrayVuoto = [];

for (let i=0; i < 6; i++) {
    let number = parseInt(prompt('inserisci un numero'));
    if (number % 2 === 1) {
        arrayVuoto.push(number);
    }
}

console.log(arrayVuoto);