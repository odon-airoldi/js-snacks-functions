/* Scrivi una funzione che accetti un array di nomi
e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function get_inits_words(arr_words) {

    const arr_inits_words = []

    for(i = 0; i < arr_words.length; i++) {

        const inits_words = arr_words[i].substring(0, 1)

        arr_inits_words.push(inits_words)

    }

    return arr_inits_words

}

// Invoca la funzione qui e stampa il risultato in console

console.log(get_inits_words(names))

// Risultato atteso: ["A", "L", "M", "A", "G", "A"]