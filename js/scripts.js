// BUSINESS LOGIC
var divide = function(number) {
  if (number % 3 === 0) {
    return ("ping")
  } else if (number % 5 === 0) {
    return ("pong")
  } else if (number % 15 === 0) {
    return ("pingpong")
  }
};

// UI LOGIC

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = divide(number);
  }
});
