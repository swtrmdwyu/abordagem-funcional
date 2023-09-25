export const partialize = (fn, ...params) => 
    fn.bind(null, ...params);

export const compose = (...fns) => value =>
    fns.reduceRight((previousValue, fn) =>
        fn(previousValue), value);    

export const pipe = (...fns) => value => 
    fns.reduce((previousValue, fn) => 
        fn(previousValue), value);

export const takeUntil = (times, fn) => () => times-- > 0 && fn(); // escrevendo desta maneira a função será executada a partir do momento em que a primeira verificação der true
