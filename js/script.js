'use strict';
/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const containerNumeri = document.getElementById('container-numeri');

let listaNumeri = [];
const numeriRandom = 5;


//ciclo while per generare 5 numeri random da inserire in array
 function generaNumeri(){
    while(listaNumeri.length < numeriRandom){
    const generato = randomNumber(1, 100);
    if(!listaNumeri.includes(generato)){
        listaNumeri.push(generato);   
    }
}
    console.log(listaNumeri);
    stampaNumeri();

}
generaNumeri()

//funzione per inserire i numeri nella window
function stampaNumeri(){
    containerNumeri.innerHTML = `Numeri casuali : ${listaNumeri}`;
}

// inserisco una funzione con setTimeout per far scomparire i numeri dopo 3 secondi
const secondi = 3;
const milliSecondi = 1000; 
function rimuoviLista(){
        setTimeout(function(){
        let vuoto = containerNumeri.innerHTML = '';
        console.log(vuoto);
    }, secondi * milliSecondi);
}
rimuoviLista();













