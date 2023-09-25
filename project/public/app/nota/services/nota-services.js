import { handleStatus } from "../../utils/promise-helpers.js";
import { partialize, compose, pipe } from "../../utils/operators.js";

const API = `http://localhost:3000/notas`;


const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo === code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

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

        const sumItems = pipe(
            getItemsFromNotas,
            partialize(filterItemsByCode, code), 
            sumItemsValue, 
        );

        return this.listAll().then(sumItems);
    }
};