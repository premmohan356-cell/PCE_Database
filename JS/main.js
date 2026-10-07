// alert("Heelo");

$(document).ready(function () {
  // Generated password to The Password Input..........................................
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
  $("#checkpass").on("change", function () {
    let checkBox = document.querySelector("#checkpass");
    // console.log(checkBox.checked);
    // console.log($("#checkpass").val());
    // alert($("#checkpass").checked);
    // alert(checkBox.checked);
    if (!checkBox.checked) {
      //   alert("Heelo");
      $("#PassInput").attr("type", "password");
    } else {
      $("#PassInput").attr("type", "text");
      //   alert("byee");
    }
  });
});
