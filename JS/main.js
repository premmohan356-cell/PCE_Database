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
  // console.log(this.innerHTML);
  if (this.innerText == "Login") {
    this.innerText = "Signup";
  } else {
    this.innerText = "Login";
  }
});
// Email_input......................
$(document).ready(function () {
  $("#EmailInput").on("input", function () {
    $(".spiner-css").addClass("fa-cog fa-spin");
    $(".spiner-css").removeClass("d-none fa-circle-check fa-times text-danger");
  });
  // checkemail work.....................................................
  $("#EmailInput").on("change", function () {
    $.ajax({
      type: "POST",
      url: "PHP/checkemail.php",
      data: "email=" + $(this).val(),
      success: function (res) {
        // console.log("BYE");
        // console.log(res.trim());
        if (res.trim() == "Email Has Not Found") {
          $(".spiner-css").removeClass("d-none fa-spin fa-cog text-danger");
          $(".spiner-css").addClass("fa-circle-check");
          $("#subbtn").removeAttr("disabled");
          // $("button").hasClass("disabled").removeClass("disabled");
        } else if (res.trim() == "Email has Found") {
          $(".spiner-css").removeClass("d-none fa-spin fa-cog fa-circle-check");
          $(".spiner-css").addClass("fa-times text-danger");
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
      beforeSend: function () {
        $("#subbtn").text("Please Wait..............");
        $("#subbtn").attr("disabled", "disabled");
      },
      success: function (res) {
        console.log(res);
        if (res.trim() == "User Data Saved") {
          $("#SignForm").next().removeClass("d-none");
          $("#subbtn").attr("disabled", "disabled");
          window.setTimeout(function () {
            $("#SignForm").next().addClass("d-none");
            window.location.reload();
          }, 3000);
        } else if (res.trim() == "EmailId Is wrong") {
          $("#SignForm").next().next().removeClass("d-none");
          $("#subbtn").attr("disabled", "disabled");
          window.setTimeout(function () {
            window.location.reload();
          }, 3000);
        }
        // document.getElementById("SignForm").reset();
      },
    });
  });
});
