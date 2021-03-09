// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


$(document).ready(function() {

    var simoNums = [];
    for (i = 0; i < 5; i++) {
        do {
            var random = genRand(1, 10);
            console.log(random);
        } while (simoNums.includes(random) == true)
        simoNums[i] = random;
    }
    console.log(simoNums);
    alert('I numeri da memorizzare sono: '+simoNums);

    var userNums = [];  
    var sameNums = [];

    setTimeout(function() {
 
        for (i = 0; i < 5; i++) {
            do {
                userNum = parseInt(prompt("Inserisci i cinque numeri (da 1 a 10"));
                console.log(userNum);
            } while ((isNaN(userNum) == true) || (userNum < 1) || (userNum > 10) || (userNums.includes(userNum) == true));
            userNums[i] = userNum;
        }
        console.log(userNums);

        for (i = 0; i < userNums.length; i++) {
            for (a = 0; a < simoNums.length; a++) {
                if (userNums[i] == simoNums[a]) {
                    sameNums.push(userNums[i])
                }
            }
        }
            
        switch (sameNums.length) {
            case 5:
                alert("Complimenti, hai indovinato tutti i numeri! "+sameNums);
                break;
            case 4:
                alert("C'eri quasi! Hai indovinato 4 numeri. Ecco quali: "+sameNums);
                break;
            case (0 < sameNums.length < 4):
                alert("Non male, ma non hai vinto. Hai indovinato "+sameNums.length+" numeri");
                break;
            case 0:
                alert("Non sei andato nemmeno vicino...Nessun numero indovinato!");
                break;
            default:
                alert("C'è stato un problema");
        }

    }, 5000);

})

function genRand (min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}