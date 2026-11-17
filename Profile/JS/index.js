// const autoprefixer = require("autoprefixer");

// module.exports = {
//   plugins: [autoprefixer],
// };
$(document).ready(function () {
  $(".Aside-button").click(function () {
    // alert("heelo");
    $("#Aside-box").toggleClass("d-none");
  });
});
