/* Scrivi una funzione che accetti una stringa
e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

function get_count_vowels(str) {

    // array vowels
    const vowels = ['a', 'e', 'i', 'o', 'u']

    // array container
    const arr_count = []


    // loop for str
    for(i = 0; i < str.length; i++) {

        // loop for vowels
        for(j = 0; j < vowels.length; j++) {

            if (str[i] === vowels[j]) {

                arr_count.push(str[i])

            }
    
        }

    }
    
    const result = `${arr_count.length} (${arr_count.join(', ')})`

    return result

}

// Invoca la funzione qui e stampa il risultato in console

console.log(get_count_vowels(word))

// Risultato atteso se si passa 'javascript': 3 (a, a, i)