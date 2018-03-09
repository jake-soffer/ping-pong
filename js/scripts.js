// BUSINESS LOGIC
var pongMachine = function(number) {

  var resultArray = [];
  for (var i = 1; i <= number; i += 1) {
    if ((i % 3 === 0) && (i % 5 !== 0)) {
      resultArray.push("ping");
    } else if ((i % 3 !== 0) && (i % 5 === 0)) {
      resultArray.push("pong");
    } else if (i % 15 === 0) {
      resultArray.push("pingpong");
    } else {
      resultArray.push(i);
    }
  } return resultArray;
};

var makeUL = function(resultArray) {
  var list = document.createElement("ul");

    for(var i = 0; i < resultArray.length; i+=1) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(resultArray[i]));
        list.appendChild(item);
    } return list;
};

// UI LOGIC

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var resultArray = pongMachine(number);
    var list = makeUL(resultArray)

    $("button#submit").hide();
    $(".answer").prepend(list);
    $("button#startover").show();
    $(".answer").show();
  });
  $("button#startover").click(function() {
    location.reload();
  });
});
