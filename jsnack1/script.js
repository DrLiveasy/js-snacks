// input prompt 
let num1 = prompt("Inserisci un numero!");
let num2 = prompt("Inserisci un'altro numero !");

// output del numero maggiore 

// prima idetificare se è stato inserito un numero
if (isNaN(num1) || isNaN (num2)){
    console.log("Perfavore inserisci un numero !!");

// i due numeri sono uguali o no ?
}else if ( num1 == num2 ){
    console.log("i due numeri sono uguali");

// se i due numero non sono uguali stampa il numero maggiore
}else{
    if(num1>num2){
        console.log("il numero più grande è : "+ num1);

    }else{
        console.log("il numero èiù grande è : "+num2);
    }
}
