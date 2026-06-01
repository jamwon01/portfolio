$(
  (function ($) {
    const altools = {
      init() {
        this.header();
        this.slick();
        this.footer();
      },
      header() {
        // Header Scroll Event
        $(window).scroll(function () {
          let scrollTop = $(this).scrollTop();
          if (scrollTop >= 100) {
            $("header").addClass("active");
          } else {
            $("header").removeClass("active");
          }
        });
        // Header Nav Dropdown
        $(".nav-cs").mouseenter(function () {
          $(".cs-drop").show();
        });
        $(".nav-cs").mouseleave(function () {
          $(".cs-drop").hide();
        });
        $(".nav-dw").mouseenter(function () {
          $(".download-menu").addClass("active");
        });
        $(".download-menu").mouseleave(function () {
          $(this).removeClass("active");
        });
        // Mobile Menu Open
        $(".m-nav-open").click(function () {
          $(this).toggleClass("active");
        });
      },
      slick() {
        // Slick Slider
        $(".main-slide").slick({
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 4000,
        });
        $(".banner-slide").slick({
          arrows: true,
        });
      },
      footer() {
        // Footer FamilySite Open
        $(".fam-site-open").click(function () {
          $(".fam-list").toggle();
        });
      },
    };
    altools.init();
  })(jQuery)
);
