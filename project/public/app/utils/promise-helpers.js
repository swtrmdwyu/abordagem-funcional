export const handleStatus = resposta => {
    return resposta.ok ? resposta.json() : Promise.reject(resposta.statusText) //faz a verificação da resposta e devolve ela dependendo do status.
}

// faz o console.log() rerecbendo um parametro
export const log = (param) => {
    console.log(param);
    return param;
};

//retorna a promisse que for resolvida ou rejeitada primeiro.
export const timeoutPromise = (milliseconds, promise) => {

    const timeout =  new Promise((resolve, reject) =>
        setTimeout(() => 
            reject(`Limite da operação excedido (limite: ${milliseconds} ms)`), 
                milliseconds));

    return Promise.race([
        timeout, 
        promise
    ]);
};

// para dar tempo entre as execuções do then de foma que armazene os resultados.
export const delay = milliseconds => data =>
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(data), milliseconds)
);