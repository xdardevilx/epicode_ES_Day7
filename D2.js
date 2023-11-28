/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let int1 = 20;
let int2 = 30;
if (int1 >= 30) {
  console.log("il numero intero più grande è " + int1);
} else {
  console.log("il numero intero più grande è " + int2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (int1 === 5) {
  console.log("il numero è uguale");
} else {
  console.log("the number is not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if (int1 % 5 === 0) {
  console.log(int1 + " " + "è divisibile per 5");
} else {
  console.log("non è divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
int1 = 8;
int2 = 0;
if (int1 === 8 || int2 === 8 || int1 - int2 === 8 || int1 + int2 === 8) {
  console.log("condizione verificata");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 50;
let result;
if (totalShoppingCart <= 50) {
  result = totalShoppingCart + 10;
  console.log("Non hai diritto alla spedizione gratuita il totale è: ", result);
} else {
  result = totalShoppingCart;
  console.log("ha diritto alla spedizione gratuita il totale è: ", result);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let sconto = totalShoppingCart * 0.2;
let totalsconto = totalShoppingCart - sconto;

if (totalsconto < 50) {
  result = totalsconto + 10;
  console.log("totale ", result);
} else {
  console.log("ha diritto alla spedizione gratuita");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let num1 = 1;
let num2 = 2;
let num3 = 3;

if (num1 <= num2 && num1 <= num3 && num2 <= num3) {
  console.log(num3, num2, num1);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let myName = "Valerio";
if (typeof myName === "number") {
  console.log("il valore nella variabile myName è di tipo number");
} else {
  console.log("il valore della varibile myName è di tipo stringa");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (int1 % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
let val = 1;
if (val < 10 && val >= 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const number = [];

number.splice(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(number);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

number.splice(9, 1, 100);
console.log(number);
