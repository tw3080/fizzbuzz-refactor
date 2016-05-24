function fizzBuzzRefactor(userInput) {
  userInput = prompt("Please enter a number greater than or equal to 1:");
  var number = parseInt(userInput);
  num = console.log(number);
  if (isNaN(number)) {
    $("body").append("Please enter a valid number.");
  }
  for (i = 1; i <= number; i++) {
    var result = "";
    if (i % 3 === 0) {
      result += "fizz";
    }
    if (i % 5 === 0) {
      result += "buzz";
    }
    $("body").append((result || i) + "<br>");
  }100
}

$(document).load(fizzBuzzRefactor());
