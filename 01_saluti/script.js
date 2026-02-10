/* Scrivi una funzione che accetti una stringa contenente un nome
e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.

function welcomeUser(Name) {

    const HelloName = 'ciao ' + Name
    return HelloName

}

// Invoca la funzione qui e stampa il risultato in console

console.log(welcomeUser(userName))

// Risultato atteso se si passa 'Mario': // ciao Mario



// Arrow Functions Version

const welcomeUser_ = (Name) => 'ciao ' + Name;

console.log(welcomeUser_(userName))