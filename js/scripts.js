$(document).ready(function () {
  $("form#survey").submit(function (event) {
    event.preventDefault();
    const q1Input = $parseInt("input:radio[name=knowledge]:checked").val();
    const q2Input = $parseInt("input:radio[name=platform]:checked").val();
    const q3Input = $parseInt("input:radio[name=companySize]:checked").val();
    const q4Input = $parseInt("input:radio[name=reason]:checked").val();
    const q5Input = $parseInt("input:radio[name=difficulty]:checked").val();
    const result = q1Input + q2Input + q3Input + q4Input + q5Input;

  if ( result < 15 ) {
      $("#javascript").show();
    } else if (result ) {
      $("#java").show();
    } else if (result ) {
      $("#cSharp").show();
    } else {$("#cPlus").show();}
  
});
