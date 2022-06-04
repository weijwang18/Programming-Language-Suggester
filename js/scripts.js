$(document).ready(function () {
  const name = prompt("Welcome! What's your name?");
  $(".name").text(name);

  $("form#survey").submit(function (event) {
    event.preventDefault();
    const q1 = parseInt($("input:radio[name=knowledge]:checked").val());
    const q2 = parseInt($("input:radio[name=platform]:checked").val());
    const q3 = parseInt($("input:radio[name=companySize]:checked").val());
    const q4 = parseInt($("input:radio[name=reason]:checked").val());
    const q5 = parseInt($("input:radio[name=difficulty]:checked").val());
    let result = q1 + q2 + q3 + q4 + q5;
    if (result >= 5 && result <= 8) {
      $("#result").fadeIn("slow");
      $(".outPut").text("JavaScript");
    } else if (result >= 9 && result <= 12) {
      $("#result").fadeIn("slow");
      $(".outPut").text("Java");
    } else {
      $("#result").fadeIn("slow");
      $(".outPut").text("C++");
    }
  });
});
