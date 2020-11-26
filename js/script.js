$(document).ready(
  function() {

    // creo un Array con 5 numeri casuali diversi da inserire nel Prompt
    var prova = [];
    for (var i = 0; i < 5; i++) {
      var element = randomNumber(1, 100);
      if (isInArray(prova, element)) {
        i--;
      } else {
        prova.push(element);
      }
    }

    // creo un alert che mi dica i 5 numeri casuali dentro l'array prova, e quando lo tolgo devo visualizzare la schermata del timer
    alert(prova.join(" - "));
    $("#timer").addClass("active");

    // creo un timer di 30 secondi e lo scrivo a video
    var validNumber = [];
    var timerTime = 30;
    $("#timer .text").children("span").text(timerTime);

    // ad ogni secondo devo diminuire il valore di timerTime
    var count = setInterval(function() {
      timerTime--;
      $(".text").children("span").text(timerTime);

      // quando arrivo a zero devo bloccare il timer
      if(timerTime <= -1) {
        clearInterval(count);
        $("#timer").removeClass("active");

        setTimeout(function() {
          // creo 5 prompt per far inserire all'utente i numeri che si ricorda
          for (var i = 0; i < 5; i++) {
            var userNumber = parseInt(prompt("inserisci un numero"));

            // se il numero che inserisce e presente nell'array dei numeri casuali lo inserisco nell'array dei numeri validi
            if (isInArray(prova, userNumber)) {
              validNumber.push(userNumber);
            }
          }
          // alla fine comunico quanti numeri ha indovinato e scrivo video i numeri che ha ricordato

          alert("Hai indovinato " + validNumber.length + " numeri!");
          $("#result_number").addClass("active");
          $("#result_number .text").children("span").html(validNumber.join(" - "));
        }, 0)
      }
    }, 1000);
  }
);

// FUNZIONI---------------------------------------------------
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isInArray(array, number) {
  var found = false;
  for (var i = 0; i < array.length; i++) {
    if (number == array[i]) {
      return found = true;
    }
  }
  return found;
}
