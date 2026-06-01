// Section Slick Slider
$(".magazine-slide, .rec-slide, .today-slide").slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      },
    },
  ],
});
// Mobile Header Hamburger Btn Click Function
$(".hamburger-menu").click(function () {
  $(".left-side-bar, body").addClass("active");
});
$(".close-menu-btn").click(function () {
  $(".left-side-bar, body").removeClass("active");
});

