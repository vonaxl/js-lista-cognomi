// Chiedi all’utente il cognome,
var cognome = prompt("Inserisci il tuo cognome : ");
document.getElementById('cognomeOutput').innerHTML = cognome;
console.log("Il cognome inserito è : "+cognome);
var cognomeGroup = ["Novello", "Primerano", "Forghieri", "Gallici", "Siri", "Jolanda", "Provolo", "Rispoli"];
var inserito = false;
var i = 0, j=0,n=0, p, contenutoPrecendente;

while (i<cognomeGroup.length) {
  if (cognome==cognomeGroup[i]) {
    inserito = true;
    console.log("Il cognome è gia presente nella lista");
    alert("Il tuo cognome era gia presente nella lista")
  }
  i++;
}

// inseriscilo in un array con altri cognomi
if (inserito===false) {
  cognomeGroup.push(cognome);
}
// output prima di essere ordinato
console.log("Lista COGNOME INORDINATA");
while (n<cognomeGroup.length){
  console.log(cognomeGroup[n]);
  contenutoPrecedente = document.getElementById("cognomeGroupOutputNotOrdered").innerHTML;
  document.getElementById("cognomeGroupOutputNotOrdered").innerHTML = contenutoPrecedente + "<li>" + cognomeGroup[n] + "</li>";
  n++;
}
var listaCopy=cognomeGroup.slice();
// e stampa la lista ordinata alfabeticamente..

listaCopy.sort();
console.log("Lista COGNOME ORDINATA");
while (j<listaCopy.length){
  console.log(listaCopy[j]);
  contenutoPrecedente = document.getElementById("cognomeGroupOutputOrdered").innerHTML;
  document.getElementById("cognomeGroupOutputOrdered").innerHTML = contenutoPrecedente + "<li>" + listaCopy[j] + "</li>";
  j++;
}

// Scrivi anche la posizione della lista in cui il nuovo utente si trova
p = 1+cognomeGroup.indexOf(cognome);
console.log("La posizione è = "+p);
document.getElementById('pos').innerHTML = p;
