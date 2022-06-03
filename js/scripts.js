$(document).ready(function () {
  $("form#survey").submit(function (event) {
    event.preventDefault();
    const q1Input = $("input:radio[name=knowledge]:checked").val();
    const q2Input = $("input:radio[name=platform]:checked").val();
    const q3Input = $("input:radio[name=companySize]:checked").val();
    const q4Input = $("input:radio[name=reason]:checked").val();
    const q5Input = $("input:radio[name=microsoft]:checked").val();

    if (q2Input === "Web") {
      $("#javaScript").show();
    }
  });
});
