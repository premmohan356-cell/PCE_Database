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
// Login and SignUp toggle..........................................
let SignLogTog = document.querySelector("#log-sign-Tog-btn");
SignLogTog.addEventListener("click", function () {
  let SignPage = document.getElementById("SignUpPage");
  let LogPage = document.getElementById("LoginPage");
  SignPage.classList.toggle("d-none");
  LogPage.classList.toggle("d-none");
  console.log(this.innerHTML);
  if (this.innerText == "Login") {
    this.innerText = "Signup";
  } else {
    this.innerText = "Login";
  }
});

$(document).ready(function () {
  $("#EmailInput").on("input", function () {
    $(".spiner-css").removeClass("d-none");
    // checkemail work.....................................................
    $.ajax({
      type: "POST",
      url: "PHP/checkemail.php",
      data: "email=" + $(this).val(),
      success: function (res) {
        console.log(res);
      },
    });
  });
});
