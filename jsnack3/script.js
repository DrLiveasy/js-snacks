/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Javascript - JS
*/

let n, somma = 0;


for (let i = 0; i < 10; i++) {
  n = parseInt(prompt('Inserisci un numero'));
  somma += n;
}


console.log('la somma è ', somma);