import { handleStatus } from "../../utils/promise-helpers.js";
import { partialize } from '../utils/operators.js';

const API = `http://localhost:3000/notas`;


// não existe mais a função `sumItems`. Ela foi substituída por três funções
const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo === code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);
// código posterior omitido

// REMOVIDO
// const sumItems = code => notas => // recebe um codigo em code e dai envia para notas também.
//     notas.$flatMap(nota => nota.itens)
//     .filter(item => item.codigo == code) // Percore o array filtrando pelo código.
//     .reduce((total, item) => total + item.valor, 0) // Retorna a soma dos valores dos itens retornados.


export const notasService = {
    listAll() {
        return fetch(API) // lida com o status da requisição
        .then(handleStatus)
        .catch(err => { // a responsável pelo log é do serviço
            console.log(err); // retorna uma mensagem de alto nível
            return Promise.reject('Não foi possível obter as notas fiscais');
        });
    },

    sumItems(code) {
        const filterItems = partialize(filterItemsByCode, code);
        
        return this.listAll()
            .then(sumItems(code));
    }
};