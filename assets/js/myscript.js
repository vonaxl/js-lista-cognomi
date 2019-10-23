// Chiedi all’utente il cognome,
var cognome = prompt("Inserisci il tuo cognome : ");
document.getElementById('cognomeOutput').innerHTML = cognome;
console.log("Il cognome inserito è : "+cognome);
var cognomeGroup = ["Novello", "Primerano", "Forghieri", "Gallici", "Siri", "Jolanda", "Provolo", "Rispoli"];
var inserito = false;
var i = 0, j=0, p, contenutoPrecendente;

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
  cognomeGroup.sort();
}
// e stampa la lista ordinata alfabeticamente.
console.log("Lista COGNOME ORDINATA");
while (j<cognomeGroup.length){
  console.log(cognomeGroup[j]);
  contenutoPrecedente = document.getElementById("cognomeGroupOutput").innerHTML;
  document.getElementById("cognomeGroupOutput").innerHTML = contenutoPrecedente + "<li>" + cognomeGroup[j] + "</li>";
  j++;
}

// Scrivi anche la posizione della lista in cui il nuovo utente si trova
p = 1+cognomeGroup.indexOf(cognome);
console.log("La posizione è = "+p);
document.getElementById('pos').innerHTML = p;
