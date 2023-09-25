import { log, timeoutPromise, delay, retry  } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/services/nota-services.js';
import { takeUntil, debounceTime, pipe, partialize } from './utils/operators.js';7

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action = operations(() => 
    retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143'))) // faz uso do retry feito, passando a quantidade de vezes, o intervalo de tempo e a função a ser executada.
    .then(console.log)
    .catch(console.log)
);
document
.querySelector('#myButton')
.onclick = action;