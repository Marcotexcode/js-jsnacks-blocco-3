





// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
//  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri



// Creare un array con x numeri
var arrNumeri = [1,2,3,4,5,6,7,8,9];





// creare due numeri variabili che restituiscono numeri  a piu grande di b;
    var a = 2;
    var b = 5;

    var argomenti = arg(arrNumeri, a, b);

    console.log(argomenti);

// i e uguale ad a quindi parte dal numero scritto nella variabile a cioe 2 e si ferma al numero scritto 
// nella variabile b che sarebbe 5 (si mette l'uguale perche senno si ferma a 4) poi nell arrNum aggiungo tutti i numeri che
// partono dall indice a e arrivano funo al numero della variabile b; quindi scrivo arr[i] (che parte dall iundice)

// var arrNum  = [];

// for(var i = a; i <= b; i++){

//   arrNum.push(arr[i]);
  
// }

// console.log(arrNum);


//FUNZIONE

function arg(arr, var1, var2) {
    var arrNum  = [];

    for(var i = var1; i <= var2; i++){

    arrNum.push(arr[i]);
    
    }
    return arrNum
}





// for(var i = 0; i < arr.length; i++){

//     if( i >= a && i <= b )
//     {
//         arrNum.push(arr[i]); 
//     }

      
//   }

