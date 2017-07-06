$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var diamond = $("input:radio[name=diamond]:checked").val();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var emailInput = $("input#email").val();
    var phoneInput = $("input#phone").val();

    $(".diamond").text(diamond);
    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".email").text(emailInput);
    $(".phone").text(phoneInput);

    $("#confirmation").show();
    event.preventDefault();
  });
});
