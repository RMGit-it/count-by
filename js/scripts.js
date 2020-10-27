//bussiness logic


//user interface logic

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const countTo = parseFloat($("#countTo").val());
    const countBy = parseFloat($("#countBy").val());
    
    let outputText = [];

    for (let num = 0; num <= countTo; num += countBy) {
      outputText.push(num);
     $(".output").text(outputText);
    }
 
    if (countBy > countTo) {
      alert("'Count By' can not be larger than 'Count To'")
      $(".output").hide();
    }  
    else if (countBy < 1 || countTo < 1) {
      alert("Values can not be less than 1")
      $(".output").hide();
    }
    else if (Number.isInteger(countTo) === false || Number.isInteger(countBy) === false) {
      $(".output").hide();
      alert("Values must be whole numbers")
    } 
    else ($(".output").show());
   
  });

});
