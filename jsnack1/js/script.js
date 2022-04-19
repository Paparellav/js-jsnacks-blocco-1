//Primo snack
// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


const firstWord = prompt ("Inserisci una parola");
const secondtWord = prompt ("Inserisci un'altra parola");

let result;

if (firstWord.length > secondtWord.length) {
    result = `${secondtWord} ${firstWord}`;
} else if (secondtWord.length > firstWord.length) {
    result = `${firstWord} ${secondtWord}`;
} else {
    result = `Le due parole sono uguali ${firstWord} ${secondtWord}`;
}

console.log(result);