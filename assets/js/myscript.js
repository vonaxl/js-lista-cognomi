// Chiedi all’utente il cognome,
var cognome = prompt("Inserisci il tuo cognome : ");
console.log("Il cognome inserito è : "+cognome);
var cognomeGroup = ["Novello", "Primerano", "Forghieri", "Gallici", "Siri", "Jolanda", "Provolo", "Rispoli"];
var inserito = false;
var i = 0,j=0;

while (i<cognomeGroup.length) {
  if (cognome==cognomeGroup[i]) {
    inserito = true;
    console.log("Il cognome è gia presente nella lista");
  }
  i++;
}

// inseriscilo in un array con altri cognomi
if (inserito===false) {
  cognomeGroup.push(cognome);
}
// e stampa la lista ordinata alfabeticamente.

while (j<cognomeGroup.length){
  console.log(cognomeGroup[j]);
  j++;
}


// Scrivi anche la posizione della lista in cui il nuovo utente si trova
