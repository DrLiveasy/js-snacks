
let arrayInvitati = ["Roberto","Christian","Francesco","Elena"];
let nomePresente = false;
let nomeInput = prompt ("inserisci il tuo nome! , (la prima lettera deve essere Maiuscola!)");

for (let i = 0; i < arrayInvitati.length; i++){
    let nomeLetto = arrayInvitati[i];
    
    if (nomeLetto == nomeInput){
        nomePresente = true;
    }
    
}
if(!nomePresente){
    console.log("Mi dispiace ma il tuo nome non è tra la lista!")
}else{
    console.log("Puoi Participare!")
}
