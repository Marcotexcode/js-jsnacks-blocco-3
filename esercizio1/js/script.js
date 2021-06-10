


// Dare la possibilità di inserire due parole. 
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.    
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


// Inserire due parole



var parola1 = prompt('Inserisci la prima parola');

var parola2 = prompt('Inserisci la seconda parola');

verLung(parola1, parola2);

// Verificare che le due parole abbiano la stessa lumghezza

// if ( parola1 === parola2) { // Se hanno la stessa lunghezza

//     console.log(parola1 + ' ' + parola2); // Stampare entrambe

// } else if (parola1 > parola2) { // Se la prima e piu lunga, stamparla

//     console.log(parola1); //Stampare la prima

// } else { // Oppure stampare la seconda
//     console.log(parola2);
// }

// Trasformarlo in funzione


function verLung(var1,var2){
    if ( var1 === var2) { // Se hanno la stessa lunghezza

        console.log(var1 + ' ' + var2); // Stampare entrambe
    
    } else if (var1 > var2) { // Se la prima e piu lunga, stamparla
    
        console.log(var1); //Stampare la prima
    
    } else { // Oppure stampare la seconda
        console.log(var2);
    }
}