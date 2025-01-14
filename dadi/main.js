// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let randomNumberPlayer = Math.floor(Math.random() * 7);
console.log(randomNumberPlayer);
let randomNumberComputer = Math.floor(Math.random() * 7);
console.log(randomNumberComputer);

if (randomNumberPlayer > randomNumberComputer) {
    console.log(`il Player vince con ${randomNumberPlayer}`);
} else if (randomNumberPlayer == randomNumberComputer) {
    console.log(`il Player e il Computer pareggiano con il numero ${randomNumberPlayer = randomNumberComputer}`);
} else {
    console.log(`il Computer vince con ${randomNumberComputer}`);
}




