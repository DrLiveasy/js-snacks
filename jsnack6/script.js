/*Fate generare un numero random da 0 a 10 al computer, e chiedete
all'utente di inserire un suo numero. Se il numero scelto dall'utente è
uguale al numero del computer informate l'utente che ha vinto, altrimenti
ha perso.
Javascript - JS*/

let numeroUtente = prompt("inserire un numero da 0 a 10");

//faccio generare un numero casuale da 0 a 10 

let numeroRandom = Math.random() * 11;
let numeroRandomIntero = Math.floor(numeroRandom);

// identificare se il numero scelto ugualo o no , poi stampare il risultato !
if(numeroRandomIntero == numeroUtente){
    console.log("hai vinto !");
} else {
    console.log("hai perso!")
}
