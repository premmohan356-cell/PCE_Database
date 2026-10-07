// alert("Heelo");

// Generated password to The Password Input..........................................
$(document).ready(function () {
  $("#passgenbtn").on("click", function () {
    // alert("Heelo");
    $.ajax({
      type: "post",
      url: "PHP/password.php",
      success: function (res) {
        $("#PassInput").val(res);
      },
    });
  });
});
