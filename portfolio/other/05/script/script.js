// Header Mobile Menu tab Click Function
$(".mobile-nav-open").click(function () {
  $(this).toggleClass("active");
  $(".mobile-nav").slideToggle();
});
$(".mobile-header-links-open").click(function () {
  $(this).toggleClass("active");
  $(".mobile-header-links").slideToggle();
});
// Footer Link-item-title Click Function
$(".link-item-title").click(function () {
  $(this).toggleClass("active");
  $(this)
    .parent()
    .siblings("li")
    .children(".link-item-title")
    .removeClass("active");
  $(this).parent().siblings("li").children(".link-item").removeClass("active");
  $(this).siblings(".link-item").toggleClass("active");
});
