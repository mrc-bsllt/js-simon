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
