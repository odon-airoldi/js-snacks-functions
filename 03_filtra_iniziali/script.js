/* Scrivi una funzione che accetti un'array di stringhe e una lettera
e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function get_words_same_initial(arr_words, letter) {

    const arr_words_same_initial = []

    for(i = 0; i < arr_words.length; i++) {

        const inits_words = arr_words[i][0]

        if (inits_words === letter) {

            arr_words_same_initial.push(arr_words[i])

        }

    }

    return arr_words_same_initial

}

// Invoca la funzione qui e stampa il risultato in console

console.log(get_words_same_initial(names, 'A'))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]