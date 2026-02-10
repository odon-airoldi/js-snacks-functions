/* Scrivi una funzione che accetti un array di nomi
e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function get_inits_words(arr_words) {

    const arr_inits_words = []

    for(i = 0; i < arr_words.length; i++) {

        //[i] arr_words value index [0] single value index
        const inits_words = arr_words[i][0]

        arr_inits_words.push(inits_words)

    }

    return arr_inits_words

}

// Invoca la funzione qui e stampa il risultato in console

console.log(get_inits_words(names))

// Risultato atteso: ["A", "L", "M", "A", "G", "A"]



// Arrow Functions Version

const get_inits_words_ = (arr_words) => {

    const arr_inits_words = []

    for(i = 0; i < arr_words.length; i++) {

        const inits_words = arr_words[i][0]

        arr_inits_words.push(inits_words)

    }

    return arr_inits_words

}

console.log(get_inits_words_(names))