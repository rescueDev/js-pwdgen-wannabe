//variabili utente

var askName = prompt("Inserisci il tuo nome qui");
var askSurname = prompt(" Ora inserisci il tuo cognome");
var askColour = prompt("Infine il tuo colore preferito");

//console di partenza
console.log(askName, askSurname, askColour);

//stampo testo finale
document.getElementById('password_generata').innerHTML = askName + askSurname + askColour + "19"; 


