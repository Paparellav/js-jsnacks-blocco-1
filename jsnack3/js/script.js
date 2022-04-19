// Terzo Snack
// Calcola la somma e la media dei primi 10 numeri.


let sum = 0;
let media = 0;

for (let i=1; i <= 10; i++) {
    console.log(i);
    sum = sum + i;
}

console.log("Somma", sum);
media = sum / 10;
console.log("Media", media);