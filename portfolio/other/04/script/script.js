$(".content-slide").slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
      },
    },
  ],
});

// Section : FAQ Accordion
$(".question").click(function () {
  $(this).siblings(".question").removeClass("active");
  $(this).toggleClass("active");
  $(".answer").stop().slideUp();
  $(this).next().stop().slideToggle();
});
