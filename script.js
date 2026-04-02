/*🏆 Snack 1
Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.*/

function somma (num1, num2) {
    return num1 + num2
}

const eseguisomma = somma(4,5)

console.log(eseguisomma);

const sommaarrow = (num1, num2) => num1 + num2

console.log(sommaarrow(8,4));

/*🏆 Snack 2
Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.*/

const alQuadrato = (num) => num * num
console.log(alQuadrato(12));

/*🏆 Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.*/
function somma(num1,num2) {
    return num1 + num2
}

const moltiplica = (num1, num2) => num1 * num2

/*function eseguiOperazione(num1, num2, callback) {
    return callback(num1,num2)
}*/

/*variante arrow*/
const eseguiOperazione = (num1,num2,callback) => callback(num1,num2)

console.log(eseguiOperazione(15,18,somma));
console.log(eseguiOperazione(6,7,moltiplica));

