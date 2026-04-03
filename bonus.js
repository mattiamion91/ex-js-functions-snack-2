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

function sequenzaOperazioni([], intervallo) {
    
}