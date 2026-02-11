/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.

function welcomeUser(user, time) {

    let hello;

    if (time >= 18) { // buonasera se è sera oltre le 17
        
        hello = 'Buonasera '

    } else if (time >= 13) { // buonpomeriggio se è pomeriggio fino alle 17

        hello = 'Buonpomeriggio '

    } else { // buongiorno se è mattina fino alle 13

        hello = 'Buongiorno '

    }

    const HelloUser = hello + user

    return HelloUser

}

// Invoca la funzione qui e stampa il risultato in console

let currentTime = new Date().getHours();

console.log(welcomeUser(name, currentTime))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.



// Arrow Functions Version

const welcomeUser_ = (user, time) => time >= 18 ? hello = 'Buonasera ' : time >= 13 ? hello = 'Buonpomeriggio ' : hello = 'Buongiorno ' + user;

console.log(welcomeUser_(name, currentTime))
