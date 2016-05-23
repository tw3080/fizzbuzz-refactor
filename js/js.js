function fizzBuzzRefactor(userInput) {
  userInput = prompt("Please enter a number greater than or equal to 1:");
  var number = parseInt(userInput);
  num = console.log(number);
  if (isNaN(number)) {
    $("body").append("Please enter a valid number.");
  }
  for (i = 1; i <= number; i++) {
    if ((i % 15 === 0)) {
      $("body").append("fizzbuzz<br>");
    } else if (i % 3 === 0) {
      $("body").append("fizz<br>");
    } else if (i % 5 === 0) {
      $("body").append("buzz<br>");
    } else {
      $("body").append(i + "<br>");
    }
  }
}

$(document).load(fizzBuzzRefactor());
