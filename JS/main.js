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
  $("#EmailInput").on("blur", function () {
    $(".spiner-css").addClass("d-none");
    // console.log(/\s/);
    this.value = this.value.replace(/\s+/g, " ");
    if (this.value != " ") {
      checkEmails();
      // console.log(this);
    }
    console.log("blur");
  });
  // checkemail work.....................................................
  $("#EmailInput").on("change", checkEmails);
  function checkEmails() {
    console.log("change");
    console.log(this);
    $.ajax({
      type: "POST",
      url: "PHP/checkemail.php",
      data: "email=" + $("#EmailInput").val(),
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
  }
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
          $("#sucess-msg").removeClass("d-none");
          $("#sucess-msg").text("Registered Successfully");

          $("#subbtn").attr("disabled", "disabled");
          window.setTimeout(function () {
            $("#sucess-msg").addClass("d-none");
            $("#veri-form").removeClass("d-none");
            $("#SignForm").addClass("d-none");
          }, 3000);
        } else if (res.trim() == "EmailId Is wrong") {
          $("#failure-msg").removeClass("d-none");
          $("#failure-msg").text("Please Enter Valid Email Id..");

          $("#subbtn").attr("disabled", "disabled");
          window.setTimeout(function () {
            $("#failure-msg").addClass("d-none");
            window.location.reload();
          }, 3000);
        }
        // document.getElementById("SignForm").reset();
      },
    });
  });

  // Verification code Matching work....................(ajax start)
  $("#veri-form").on("submit", function (e) {
    e.preventDefault();
    $("#veri-sub-btn").attr("disabled", "disabled");
    $("veri-sub-btn").css("cursor", "not-allowed");
    $.ajax({
      url: "./PHP/verifycode.php",
      method: "POST",
      beforeSend: function () {
        console.log("Verification of User...................");
      },
      data: {
        email: $("#EmailInput").val(),
        v_code: $("#activationInput").val(),
      },
      success: function (res) {
        if (res.trim() == "Verified User") {
          console.log("User Verification Complete");
          $("#activationInput").css("border", "4px solid green");
          $("#sucess-msg").removeClass("d-none");
          $("#sucess-msg").text("User Verified..");
          window.setTimeout(function () {
            console.log("Go To Your Login page...");
            $("#veri-form")[0].reset();
            $("#veri-form").addClass("d-none");
            $("#SignForm").removeClass("d-none");
            $("#veri-sub-btn").attr("disabled", false);
            $("veri-sub-btn").css("cursor", "pointer");
            SignLogTog.click();
          }, 3000);
        } else {
          console.log("User Not Verified");
          $("#activationInput").css("border", "5px solid red");
          $("#failure-msg").removeClass("d-none");
          $("#failure-msg").text("Verification Code is Wrong.........");
          window.setTimeout(function () {
            $("#activationInput").css("border", "none");
            $("#failure-msg").addClass("d-none");
            $("#veri-sub-btn").attr("disabled", false);
            $("veri-sub-btn").css("cursor", "pointer");
          }, 3000);
        }
      },
    });
  });

  // Login Work.................................
  $("#login-form").on("submit", function (e) {
    e.preventDefault();
    // console.log($("#LoginEInput"), $("#LoginPInput"));
    $.ajax({
      url: "./PHP/loginAjax.php",
      method: "POST",
      data: {
        email: $("#LoginEInput").val(),
        pass: $("#LoginPInput").val(),
      },
      beforeSend: function () {
        console.log("Sending Login data");
      },
      success: function (res) {
        console.log(res);
        if (res.trim() == "Login Successfully") {
          console.log("User Login Successfully");
          $("#Login-msg").removeClass("d-none alert-danger");
          $("#Login-msg").addClass("alert-success");
          $("#Login-msg").text("User Login Successfully");
          $("#Login-btn").attr("disabled", true);
          window.setTimeout(function () {
            // console.log(this);
            $("#Login-msg").addClass("d-none");
            $("#Login-btn").attr("disabled", false);
            $("#login-form")[0].reset();
          }, 3000);
        } else if (res.trim() == "Password is Wrong") {
          console.log("Please Enter Correct Password");
          $("#Login-msg").removeClass("d-none alert-success");
          $("#Login-msg").addClass("alert-danger");
          $("#Login-msg").text("Your Password is Incorrect");
          $("#Login-btn").attr("disabled", true);
          window.setTimeout(function () {
            // console.log(this);
            $("#Login-msg").addClass("d-none");
            $("#Login-btn").attr("disabled", false);
            $("#login-form")[0].reset();
          }, 3000);
        } else {
          console.log("Please SignUp First");
          $("#Login-msg").removeClass("d-none");
          $("#Login-msg").addClass("alert-danger");
          $("#Login-msg").text("Your Email Is Not Found");
          $("#Login-btn").attr("disabled", true);

          window.setTimeout(function () {
            // console.log(this);
            $("#Login-msg").addClass("d-none");
            $("#Login-btn").attr("disabled", false);
            $("#login-form")[0].reset();
          }, 3000);
        }
      },
    });
  });
});
