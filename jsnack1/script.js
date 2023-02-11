/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
Javascript - JS*/

// input prompt 
let num1 = parseInt (prompt("Inserisci un numero!"));
let num2 = parseInt (prompt("Inserisci un'altro numero !"));
//
// i due numeri sono uguali o no ?
if ( num1 == num2 ){
    console.log("i due numeri sono uguali");

// se i due numero non sono uguali stampa il numero maggiore
}else if(num1 > num2){
    console.log("il numero più grande è : "+ num1);
}
else{
    console.log("il numero èiù grande è : "+ num2);
}

