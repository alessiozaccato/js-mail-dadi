// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota:
// Non è necessario provvedere alla validazione delle email

const mailList = ["pippo@mail.com", "paperino@mail.com", "topolino@mail.com"];
let isMailOnList = true; //boolean value set to false that will be changed in cases that i need

let userMail = prompt("inserisci la tua mail:", "pippo@mail.com");

for (i = 0; i < mailList.length; i++) {
    if (userMail == mailList[i]) {
        isMailOnList = false;

    }
}

if (isMailOnList == false) {
    console.log(`la tua ${userMail} è presente nella ${mailList}`);
} else {
    console.log(`la tua ${userMail} non è presente nella ${mailList}`);
}