// Business logic:


// User interface logic:
$(document).ready(function(){
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    var name1 = $("#name1").val();
    var description1 = $("#description1").val();
    var date1 = $("#date1").val();
    var startEndTime1 = $("#startEndTime1").val();
    console.log(name1 + description1 + date1 + startEndTime1);
    window.location.href = "file:///Users/Guest/desktop/appointments/success.html";
  });
});
