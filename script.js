/*🏆 Snack 1
Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.*/

function somma(num1, num2) {
    return num1 + num2
}

const eseguisomma = somma(4, 5)

console.log(eseguisomma);

const sommaarrow = (num1, num2) => num1 + num2

console.log(sommaarrow(8, 4));

/*🏆 Snack 2
Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.*/

const quadrato = (num) => num * num
console.log(quadrato(12));

/*🏆 Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.*/
function somma(num1, num2) {
    return num1 + num2
}

const moltiplica = (num1, num2) => num1 * num2

/*function eseguiOperazione(num1, num2, callback) {
    return callback(num1,num2)
}*/

/*variante arrow*/
const eseguiOperazione = (num1, num2, callback) => callback(num1, num2)

console.log(eseguiOperazione(15, 18, somma));
console.log(eseguiOperazione(6, 7, moltiplica));

/*🏆 Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".*/

function creaTimer(tempo) {
    return function () {
        setTimeout(() => console.log('tempo scaduto'), tempo);
    }
}

const timer3secondi = creaTimer(3000)
timer3secondi()

const timer10secondi = creaTimer(10000)
timer10secondi()

/*🏆 Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.*/

function stampaOgniSecondo(messaggio) {
    //salvo intervallo in una variabile
    const intervalloId = setInterval(() => {
        console.log(messaggio)
    }, 1000);
    //restiuisco id per fermare la funzione
    return intervalloId
}

const mioTimer = stampaOgniSecondo('sto nuotando')

// Dopo 5 secondi, fermiamo tutto
setTimeout(() => {
    clearInterval(mioTimer);
    console.log("loop interrotto");
}, 5000);


/*🏆 Snack 6
Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.*/

function creaContatoreAutomatico(intervallo) {
    let contatore = 0;
    return () => {
        setInterval(() => {
            contatore++
            console.log(`incremento contatore ${contatore}`);

        }, intervallo)
    }

}

const contaOgniSecondo = creaContatoreAutomatico(1000)
//contaOgniSecondo()
const contaOgniCinqueSecondi = creaContatoreAutomatico(5000)
//contaOgniCinqueSecondi()

/*🏆 Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.*/

function eseguiFerma(messaggio, avvio, stop) {
    const id = setInterval(() => {
        console.log(messaggio)
    }, avvio)
    setTimeout(() => {
        //interrompo intervallo
        clearInterval(id)
     }, stop)


}

eseguiFerma('ehi sto eseguendo!!', 2000, 10000)