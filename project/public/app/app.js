import { log, timeoutPromise } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/services/nota-services.js';
import { takeUntil, debounceTime, pipe, partialize } from './utils/operators.js';7

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action = operations(() => 
    timeoutPromise(200, service.sumItems('2143')) // Se a requisição demorar demais não fara nada
    .then(console.log)
    .catch(console.log)
);

document
.querySelector('#myButton')
.onclick = action;