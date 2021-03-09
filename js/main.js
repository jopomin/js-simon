// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

function genRand (min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

var simoNums = [];

for (i = 0; i < 5; i++) {
    do {
        var random = genRand(1, 10);
        console.log(random);
    } while (simoNums.includes(random) == true)
    simoNums[i] = random;
}

console.log(simoNums);

var userNums = [];

for (i = 0; i < 5; i++) {
    do {
        userNum = parseInt(prompt("Inserisci i cinque numeri (da 1 a 10"));
        console.log(userNum);
    } while ((isNaN(userNum) == true) || (userNum < 1) || (userNum > 10) || (userNums.includes(userNum) == true));
    userNums[i] = userNum;
    console.log(userNums);
}