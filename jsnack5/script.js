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

