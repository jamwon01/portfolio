$(function ($) {
  const oliveYoung = {
    init() {
      this.header();
      this.platform();
      this.footer();
    },
    header() {
      // Family Site Open
      $(".fam-site-open").click(function () {
        $(".family-site").toggle();
      });
      // SiteMap Open
      $(".sitemap-open").click(function () {
        $(".sitemap").addClass("active");
        $("body").addClass("sitemap-is-on");
      });
      $(".sitemap-close").click(function () {
        $(".sitemap").removeClass("active");
        $("body").removeClass("sitemap-is-on");
      });
      // Mobile Sitemap Nav Click Function
      $(".sitemap-nav li").click(function () {
        $(this).siblings("li").children("div").removeClass("active");
        $(this).children("div").toggleClass("active");
      });
    },
    platform() {
      // Platform Section Scroll Function
      $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        let platforms = [
          $("#platform1"),
          $("#platform2"),
          $("#platform3"),
          $("#platform4"),
        ];

        platforms.forEach((platform, index) => {
          if (scrollTop >= platform.offset().top - 150) {
            $(".platform").removeClass("active");
            platform.addClass("active");
            $(".pa").removeClass("active");
            $(".pa-" + (index + 1)).addClass("active");
          }
        });
      });
    },
    footer() {
      // Group Link Open
      $(".group-link-open").click(function () {
        $(".cj-group").toggle();
      });
    },
  };
  oliveYoung.init();
}, jQuery);
