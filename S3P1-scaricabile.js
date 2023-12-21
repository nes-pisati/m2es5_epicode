/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum (number1, number2) {
    let sum = number1 + number2;
    if (number1===number2) {
        sum = sum*3;
    }

    return sum
}

let sum = crazySum(10,10)
console.log("Il risultato è: " + sum)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary (number) {
if ((number>=20 && number<=100)||(number===400)) {
    result = true;
} else {
    result = false;
}
return result
}

let resultNumber = boundary(15);
console.log("Il risultato è: " + resultNumber)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString (string) {

if(string.lenght===0) {
    console.log("Per favore inserisci una stringa valida")
}else{
    let stringReverse = string.split("").reverse().join("");

    return stringReverse;
}}

let string = reverseString("Vanessa")
console.log("La tua stringa al contrario è: " + string)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst (string) {

    if (string.lenght === 0) {
        console.log("Per favore inserisci una stringa valida")
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    //let stringUp = string[0].toUpperCase();

    //return stringUp + string.slice[1]
}

let originalString = "vanessa"
let stringUpper = upperFirst(originalString) 
console.log(stringUpper)

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom (n) {
    let random = [];
    for(let i=0; i<n; i++) {
        let randomNumbers = Math.floor(Math.random()*11);
        random.push(randomNumbers)
    };
    return random
}

let randomArray = giveMeRandom(7);
console.log("I tuoi numeri casuali sono: " + randomArray);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (l1,l2) {
    let area = l1*l2;
    return area
}

let areaTot = area(3,3)
console.log("L'area del tuo quadrato è di: " + areaTot)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff (number) {
    let sottrazione = number - 19;
    if (sottrazione>19) {
        sottrazione=sottrazione*3;
    } else {
        sottrazione=sottrazione;
    }

    return sottrazione
}

let crazyResult = crazyDiff(79)
console.log(crazyResult)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify (string) {
    if (string.startsWith("code")) {
        return string
    } else {
        return "code" + string
    }
}

let codString = "ciao"
let resultString = codify(codString)
console.log(resultString)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7 (number) {
        if (number%3===0 || number%7===0) {
            result=true
        } else {
            result = false
        }
        return result
}

let checkNumber = check3and7(28)

if (checkNumber>0) {
    console.log("Il numero che hai inserito è multiplo di 3 o di 7? " + checkNumber)
} else {
    console.log("Per favore inserisci un numero positivo")
}


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString (string) {
    if (string.lenght>2) {
        return string.slice(1,-1);
    } else {
        console.log("Per favore inserisci una parola che abbia più di due lettere")
    }
}

let stringCut = "tavolo"
let newString = cutString(stringCut)
console.log(newString)
