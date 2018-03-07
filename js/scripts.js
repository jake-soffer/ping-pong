// BUSINESS LOGIC
var divide = function(number) {
  var resultArray = [];
  for (var i = 1; i <= number; i += 1)
    resultArray.push(i);
  if (i === 3) {
    resultArray.push("ping");
  }
  // } else if (i % 5 === 0 && i % 3 !== 0) {
  //   resultArray.push("pong");
  // } else if (i % 5 === 0 && i % 3 === 0) {
  //   resultArray.push("pingpong");
  // }
};

// UI LOGIC

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var resultArray = divide(number);

    $(".answer").text(resultArray)

  });
});
