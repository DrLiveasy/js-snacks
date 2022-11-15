/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
Javascript - JS*/



let parola1 = prompt("inserisci una parola");
let parola2 = prompt("inserisci un'altra parola!");


if (parola1.length > parola2.length){
    console.log("la prola più corta è " + parola2);
    console.log("la parola più grande è "+ parola1);
}else if(parola2.length > parola1.length){
    console.log("la prola più corta è " + parola1);
    console.log("la parola più grande è "+ parola2);
}else{
    console.log("le 2 parole sono alla stessa lunghezza ! ");
}