import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/services/nota-services.js';
import { takeUntil, debounceTime } from './utils/operators.js';

const action = debounceTime(500, takeUntil(3, () => //chama o take until se o debounce time tiver sido executado.
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log)
));

document
.querySelector('#myButton')
.onclick = action;