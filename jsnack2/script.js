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