/*🎯 Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.*/

function contoAllaRovescia(n) {

    let contatore = n;

    const id = setInterval(() => {
        if (contatore > 0) {
            console.log(contatore);
            contatore--;
        } else {
            console.log('tempo scaduto!!');
            clearInterval(id)
        }

    }, 1000)
}

contoAllaRovescia(10)

/*
🎯 Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.*/

function sequenzaOperazioni(operazioni, intervallo) {

    //per ogni operazione viene eseguita con un ritardo regolare
    operazioni.forEach((operazione, index) => {
        setTimeout(() => { operazione() },
            intervallo * index)
    });

}

sequenzaOperazioni([
    () => console.log('operazione 1'),
    () => console.log('operazione 2'),
    () => console.log('operazione 3')
], 2000);

/*Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.*/

function creaThrottler(callback, limite) {

    let ultimaEsecuzione = 0

    return function(...args) {

        const adesso = Date.now()

        if(adesso - ultimaEsecuzione >= limite) {
            ultimaEsecuzione = adesso
            callback(...args)
        }else{
            console.log("non posso eseguire");
            
        }
    }

}

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)

