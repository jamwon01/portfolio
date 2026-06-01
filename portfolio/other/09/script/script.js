// Header Language Select
$(".language-selector").click(function () {
  $(".current-lang").toggleClass("active");
  $(".language-list").slideToggle();
});

// Header Hamburger Button Click Event
$(".hamburger").click(function () {
  $(this).toggleClass("active");
  $(".sitemap").slideToggle();
  $(".sitemap").addClass("active");
});

// GNB DropDown Navigation Function
$(".gnb li").mouseenter(function () {
  $(this).siblings("li").children(".dropdown").stop().slideUp();
  $(this).children(".dropdown").stop().slideDown();
});
$(".gnb li").mouseleave(function () {
  $(this).children(".dropdown").stop().slideUp();
});

// BEST PRODUCT TAB Click Function
$(".best-product .tab-menu span").click(function () {
  $(this).siblings().removeClass("active");
  $(this).addClass("active");

  let tab = $(this).attr("data-tab");

  $("." + tab)
    .siblings()
    .removeClass("active");
  $("." + tab).addClass("active");
});

// Family Site Click Function
$(".fam-title").click(function () {
  $(".fam-sub-navi").slideToggle();
  $(".fam-sub-navi").toggleClass("active");
  $(this).toggleClass("active");
});

$(".fam-sub-navi li").click(function () {
  $(this).parent().slideUp();
  $(this).parent().removeClass("active");
  $(".fam-title").removeClass("active");
  $(".fam-title").text($(this).text());
});
