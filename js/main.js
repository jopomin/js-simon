// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

var i = 0;
var dieciNum = [];

for (x = 0; x < 10; x++) {
    dieciNum[x] = parseInt(prompt("Inserisci un numero"));
}
console.log(dieciNum);
var somma = addiziona(dieciNum, i);
console.log(somma);
var media = average(somma, dieciNum.length)
console.log(media);

function addiziona(array, index) {
    var sum = 0;
    for (index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

function average(sum, length) {
    var average = sum / length;
    return average;
}