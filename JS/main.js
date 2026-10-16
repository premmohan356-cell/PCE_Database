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
  // Showing and hiding the Password ..............................................................
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
// Email_input......................
$(document).ready(function () {
  $("#EmailInput").on("input", function () {
    $(".spiner-css").removeClass("d-none");
  });
  // checkemail work.....................................................
  $("#EmailInput").on("change", function () {
    $.ajax({
      type: "POST",
      url: "PHP/checkemail.php",
      data: "email=" + $(this).val(),
      success: function (res) {
        if (res.trim() == "Email Has Not Found") {
          $(".spiner-css").removeClass("d-none fa-spin fa-cog");
          $(".spiner-css").addClass("fa-circle-check");
          $("#subbtn").removeAttr("disabled");
          // $("button").hasClass("disabled").removeClass("disabled");
        } else if (res.trim() == "Email has Found") {
          $(".spiner-css").removeClass("d-none fa-spin fa-cog");
          $(".spiner-css").addClass("fa-times");
          $("#subbtn").attr("disabled", "disabled");
        }
        if ($("#EmailInput").val() == "") {
          $(".spiner-css").addClass("d-none");
          $("#subbtn").attr("disabled", "disabled");
        }
      },
    });
  });
  // SignUp Form Submission.............................................
  $("#SignForm").on("submit", function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "PHP/Sign.php",
      data: {
        username: $("#UserInput").val(),
        email: $("#EmailInput").val(),
        password: $("#PassInput").val(),
      },
      success: function (res) {
        console.log(res);
        document.getElementById("SignForm").reset();
      },
    });
  });
});
