


// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// Scrivere i due array
var lettere = ['a','b','c'];

var numeri = [1,2,3];


var fusione = fusionArray(lettere, numeri);


console.log(fusione);



//  // Creare un array dove fondere i due array
// var fondArr = [];


// // Creare un ciclo
// for(var i = 0; i < lettere.length; i++){

// // Aggiungere nell' array che fonde prima un elemento del primo e poi del secondo array a ciclo
//     fondArr.push(lettere[i], numeri[i]);
    
// }
// console.log(fondArr);


// Creare una funzione

function fusionArray(arr1, arr2) {

    // Creare un array dove fondere i due array
    var fondArr = [];

    // Creare un ciclo
    for(var i = 0; i < arr1.length; i++){
        // Aggiungere nell' array che fonde prima un elemento del primo e poi del secondo array a ciclo
        fondArr.push(arr1[i], arr2[i]);   
    }
    return fondArr; //Restituire l'array
}

