// Password Toggle
let inputPw = $(".userPw");
$(".pw-open").click(function () {
  $(this).toggleClass("xi-eye xi-eye-off");
  if (inputPw.attr("type") === "password") {
    inputPw.prop("type", "text");
  } else {
    inputPw.prop("type", "password");
  }
});

$(".signup-open").click(function () {
  $(".signup-form").fadeIn(600);
});
$(".signup-close").click(function () {
  $(".signup-form").fadeOut();
});
