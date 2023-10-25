// Commento JS

/* Commento
su più
right */

// alert("ciao"); //commento accanto al testo

// document.writeln('Hello World!');

// document.getElementById('titolo').innerHTML = 'Hello JS World!';

// let utente = "Luca";

// let eta = 33;
// let annoDiNascita = 2023 - eta;
// console.log(annoDiNascita);

const nomeUtente = prompt( "Inserisci il tuo nome", "Pippo");
const eta = prompt("Inserisci la tua età", "33");
const annoDiNascita = 2023 - eta;

document.getElementById("titolo").innerHTML = "Benvenuto, " + nomeUtente;
document.getElementById("eta").innerHTML = `Sei nato nel ${annoDiNascita}`;

