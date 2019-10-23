// Chiedi all’utente il cognome,
var cognome = prompt("Inserisci il tuo cognome : ");
// inseriscilo in un array con altri cognomi
var cognomeGroup = ["Novello", "Primerano", "Forghieri", "Gallici", "Siri", "Jolanda", "Provolo", "Rispoli"];
// e stampa la lista ordinata alfabeticamente.
var inserito = false;
var i = 0;
var j = 0;

while (i<cognomeGroup.length && !inserito) {
  console.log(cognomeGroup[i]);
  if (cognome!=cognomeGroup[i]) {
    inserito == true;
  }
  i++;
}

if (inserito===true) {
  cognomeGroup.push(cognome);
}
while (j<cognomeGroup.length) {
  console.log(cognomeGroup[j]);
  j++
}


// Scrivi anche la posizione della lista in cui il nuovo utente si trova
