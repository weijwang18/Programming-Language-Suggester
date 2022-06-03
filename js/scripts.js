$(document).ready(function () {
  $("form#survey").submit(function (event) {
    event.preventDefault();
    const q1Input = $("input:radio[name=knowledge]:checked").val();
    const q1 = parseInt(q1Input);
    const q2Input = $("input:radio[name=platform]:checked").val();
    const q2 = parseInt(q2Input);
    const q3Input = $("input:radio[name=companySize]:checked").val();
    const q3 = parseInt(q3Input);
    const q4Input = $("input:radio[name=reason]:checked").val();
    const q4 = parseInt(q4Input);
    const q5Input = $("input:radio[name=difficulty]:checked").val();
    const q5 = parseInt(q5Input);
    let result = q1 + q2 + q3 + q4 + q5;
    console.log(result);

    if (result >= 5 && result < 10) {
      $("#javaScript").show();
    } else if (result >= 10 && result < 15) {
      $("#java").show();
    } else {
      $("#cPlus").show();
    }
  });
});
