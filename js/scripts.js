// BUSINESS LOGIC
var divide = function(number) {
var resultArray = [];
for (var i = 1; i <= number; i += 1)

if ((i % 3 === 0) && (i % 5 !== 0)) {
resultArray.push("ping");
} else if ((i % 3 !== 0) && (i % 5 === 0)) {
resultArray.push("pong");
} else if (i % 15 === 0) {
resultArray.push("pingpong");
} else {
resultArray.push(i);
}

return resultArray;
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
