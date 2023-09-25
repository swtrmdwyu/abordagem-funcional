export const handleStatus = resposta => {
    return resposta.ok ? resposta.json() : Promise.reject(resposta.statusText) //faz a verificação da resposta e devolve ela dependendo do status.
}

// faz o console.log() rerecbendo um parametro
export const log = (param) => {
    console.log(param);
    return param;
};