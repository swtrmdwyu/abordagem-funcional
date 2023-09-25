import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/services/nota-services.js';
import { takeUntil, debounceTime, pipe, partialize } from './utils/operators.js';7


// Para caso a promisse demore muito, este é um jeito de fazer com que a execução pare e um erro seja retornado para ser possivel o uso de "TimeOut" ou "try e catch" em promisses.
const promise1 = new Promise((resolve, reject) => 
    setTimeout(() => resolve('promise 1 resolvida'), 3000));

const promise2 = new Promise((resolve, reject) => 
    setTimeout(() => reject('promise 2 resolvida'), 1000));

// Exibirá no console a primeira promisse a ser resolvida.
Promise.race([ // Recebe as promisses a serem obeservadas.
    promise1, 
    promise2 
])
.then(console.log) // Mostra a primeira a ser terminada de executar.
.catch(console.log);

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action = operations(() => 
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log)
);

document
.querySelector('#myButton')
.onclick = action;