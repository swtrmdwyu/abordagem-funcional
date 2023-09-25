import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/services/nota-services.js';

document
.querySelector('#myButton')
.onclick = () => service
        .sumItems('2143')
        .then(console.log) // Printa a resposta caso OK.
        .catch(console.log); // Printa um erro caso a Promise retorne REJECT.       