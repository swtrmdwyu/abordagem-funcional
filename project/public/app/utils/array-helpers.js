if(!Array.prototype.$flatMap) {
    Array.prototype.$flatMap = function(cb) {
        return this.map(cb).reduce((destArray, array) => 
            destArray.concat(array), []);
    }
}

// Adiciona a função ao array e transforma em um array de uma única dimensão.