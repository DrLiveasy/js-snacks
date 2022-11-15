/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine.
Javascript - JS*/


let arrayNumeriDispari = [""];
let pari = 0;
let dispari = 0;

for (let i = 0; i < 6; i++) {
    let n = parseInt(prompt("inserisci un numero!"));

    if (n % 2 == 0) {
        pari++;
    } else {
        arrayNumeriDispari += n + (",") ;
    }
}

console.log(arrayNumeriDispari);

