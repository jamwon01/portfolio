$(".resize-btn")
  .eq(0)
  .click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(".story-text").css("font-size", "1em");
  });
$(".resize-btn")
  .eq(1)
  .click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(".story-text").css("font-size", "1.2em");
  });
$(".resize-btn")
  .eq(2)
  .click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(".story-text").css("font-size", "1.4em");
  });
