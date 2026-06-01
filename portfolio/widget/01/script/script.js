$(".tab").click(function () {
  $(this).siblings(".tab").removeClass("active");
  $(this).addClass("active");

  let $position = $(this).position();
  $(".tab-bar").css("left", $position.left + "px");
});
