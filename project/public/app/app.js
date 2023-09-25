import { log, timeoutPromise, delay, retry  } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/services/nota-services.js';
import { takeUntil, debounceTime, pipe, partialize } from './utils/operators.js';
import { EventEmitter } from './utils/event-emitter.js';


const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action = operations(() => 
    retry(3, 3000, () => timeoutPromise(1000, service.sumItems('2143')))
    .then(total => EventEmitter.emit('itensTotalizados', total)) // uso do event emitter personalizado.
    .catch(console.log)
);

document
.querySelector('#myButton')
.onclick = action;
