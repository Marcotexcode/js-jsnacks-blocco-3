



//  Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.

// Far scrivere una parola 
var parola = prompt('Inserisci una parola');

var cap = capitalize(parola);


console.log(cap);

// // Far diventare grande la psima lettera
// var maiuscolo = parola.charAt(0).toUpperCase();
// //Far diventare piccolo il resto (da 1 in poi)
// var minuscolo = parola.slice(1).toLowerCase();
// // unire la prima lettera grande con le altre lettere piccole
// var capital = maiuscolo + minuscolo;

// console.log(capital);



// FUNZIONE

function capitalize(str) {
    // Far diventare grande la prima lettera
    var maiuscolo = str.charAt(0).toUpperCase();
    //Far diventare piccolo il resto (da 1 in poi)
    var minuscolo = str.slice(1).toLowerCase();
    // unire la prima lettera grande con le altre lettere piccole
    var capital = maiuscolo + minuscolo;

return capital;
}