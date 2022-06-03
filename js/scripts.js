$(document).ready(function () {
  $("form#survey").submit(function (event) {
    event.preventDefault();
    const q1 = parseInt($("input:radio[name=knowledge]:checked").val());
    const q2 = parseInt($("input:radio[name=platform]:checked").val());
    const q3 = parseInt($("input:radio[name=companySize]:checked").val());
    const q4 = parseInt($("input:radio[name=reason]:checked").val());
    const q5 = parseInt($("input:radio[name=difficulty]:checked").val());
    let result = q1 + q2 + q3 + q4 + q5;
    console.log(result);
    if (result >= 5 && result < 10) {
      $(".outPut").text("JavaScript");
      $("#result").show();
    } else if (result >= 10 && result < 15) {
      $(".outPut").text("Java");
      $("#result").show();
    } else {
      $(".outPut").text("C++");
      $("#result").show();
    }
  });
});
