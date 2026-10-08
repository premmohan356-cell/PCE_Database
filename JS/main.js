// alert("Heelo");
let checkBox = document.querySelector("#checkpass");

$(document).ready(function () {
  // Generated password to The Password Input..........................................
  $("#passgenbtn").on("click", function () {
    // alert("Heelo");
    $.ajax({
      type: "post",
      url: "PHP/password.php",
      success: function (res) {
        $("#PassInput").val(res);
        $("#PassInput").attr("type", "text");
        checkBox.setAttribute("checked", "true");
        checkBox.firstElementChild.classList.add("showing-fa");
        checkBox.firstElementChild.classList.remove("hiding-fa");
      },
    });
  });
  $("#checkpass").on("click", function () {
    if (checkBox.getAttribute("checked") == "false") {
      $("#PassInput").attr("type", "text");
      // alert(checkBox.getAttribute("checked"));
      checkBox.setAttribute("checked", "true");
      checkBox.firstElementChild.classList.add("showing-fa");
      checkBox.firstElementChild.classList.remove("hiding-fa");
    } else {
      $("#PassInput").attr("type", "password");
      checkBox.setAttribute("checked", "false");
      checkBox.firstElementChild.classList.add("hiding-fa");
      checkBox.firstElementChild.classList.remove("showing-fa");
    }
  });
});
