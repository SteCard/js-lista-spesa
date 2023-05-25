"use strict";

// ARRAY LISTA SPESA
let listaSpesa = [
    "Pasta",
    "Patate",
    "Provola",
    "Zucchine",
    "Uova",
    "Birra",
    "Pane",
    "Latte",
]

// COSTANTE HTML
const listaSpesaContainer = document.getElementById('lista_spesa');

// DICHIARAZIONE VARIABILE CONTATORE PER CICLO
let i = 0;

// CICLO WHILE
while(i < listaSpesa.length){

    let listaSpesaElement = listaSpesa[i];

    let listaSpesaItem = document.createElement('li');

    listaSpesaItem.innerHTML = listaSpesaElement;

    listaSpesaContainer.append(listaSpesaItem);
    
    i++;
}