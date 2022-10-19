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
        listaNumeri.push(parseInt(generato));   
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

//creo funzione per creare input per far inserire all'utente i numeri

let listaNumeriUtente = [];

function creaInputUtente(){
    
        const inputUtente = document.createElement('input');
        containerNumeri.append(inputUtente);
        const buttonUtente = document.createElement('button');
        buttonUtente.innerHTML = 'INVIA';
        containerNumeri.append(buttonUtente);
        

        buttonUtente.addEventListener('click', inviaNumeroUtente);
        inputUtente.innerHTML = '';  
        function inviaNumeroUtente(){
          
          let utente = parseInt(inputUtente.value);  
           
            if(listaNumeriUtente.length < numeriRandom){
                listaNumeriUtente.push(utente);
                console.log(listaNumeriUtente);
            }
        }   
}
        
        if(listaNumeriUtente.length === listaNumeri.length){
           checkNumbers(); 
        }  

setTimeout(creaInputUtente, secondi * milliSecondi);

// funzione per controllare se i numeri inseriti dall'utente e quelli generali corrispondono


let listaNumeriUguali = [];
function checkNumbers(){
    for(let i = 0; i < listaNumeriUtente.length; i++){
        if(listaNumeri[i] == listaNumeriUtente[i]){
            console.log(listaNumeriUtente);
            listaNumeriUguali.push(listaNumeriUtente.value);
            
        } else{
            console.log('Non hai beccato nemmeno un numero!');
         }
    } 
}












