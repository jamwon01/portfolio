(function ($) {
  const bing = {
    init() {
      this.header();
      this.category();
      this.brand();
      this.etc();
    },
    header() {
      // Header Scroll Event
      function scrollInit() {
        if ($(window).scrollTop() > 50) {
          $("header").addClass("active");
        }
      }
      $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
          $("header").addClass("active");
        } else {
          $("header").removeClass("active");
        }
      });
      // Header Nav Mouseenter Function
      $(".header-nav").mouseenter(function () {
        $("header").addClass("active");
        $(".dropdown").slideDown(700);
        $(".dropdown ul li a").addClass("active");
        $(".header-bottom").addClass("active");
      });
      $("header").mouseleave(function () {
        if ($(window).scrollTop() < 50) {
          $(this).removeClass("active");
        }
        $(".dropdown").slideUp(0);
        $(".dropdown a").removeClass("active");
        $(".header-bottom").removeClass("active");
      });
      // Header Language Select Function
      $(".language > span").click(function () {
        $(".lang-select").slideToggle();
      });
      // Sitemap Open Click Function
      $(".sitemap-open").click(function () {
        $(this).toggleClass("active");
        $(".sitemap").toggleClass("active");
        $("body, .header-nav").toggleClass("sitemap-on");
      });
      scrollInit();
    },
    category() {
      // Section : Category Slide Function
      let categoryCnt = 0;

      function slideBtnState() {
        if (categoryCnt === 0) {
          $(".category-prev-btn").removeClass("active");
        } else {
          $(".category-prev-btn").addClass("active");
        }
        if (categoryCnt === 3) {
          $(".category-next-btn").removeClass("active");
        } else {
          $(".category-next-btn").addClass("active");
        }
      }

      function categorySlide() {
        let slideDistance = categoryCnt * -16.66; // 한 번에 -16.66% 이동
        $(".category-slide ul").css({
          transform: `translateX(${slideDistance}%)`,
        });
      }
      $(".category-next-btn").click(function () {
        if (categoryCnt < 3) {
          categoryCnt++;
        }
        categorySlide();
        slideBtnState();
      });
      $(".category-prev-btn").click(function () {
        if (categoryCnt >= 1 && categoryCnt <= 3) {
          categoryCnt--;
        }
        categorySlide();
        slideBtnState();
      });
    },
    brand() {
      // Brand Slide Function
      let brandCnt = 0;

      function brandBtnState() {
        if (brandCnt === 0) {
          $(".brand-next-btn").addClass("active");
          $(".brand-prev-btn").removeClass("active");
        } else {
          $(".brand-next-btn").removeClass("active");
          $(".brand-prev-btn").addClass("active");
        }
      }

      function brandSlide() {
        let brandSlideDistance = brandCnt * -16.66;
        $(".brand-slide ul").css({
          transform: `translateX(${brandSlideDistance}%)`,
        });
      }

      $(".brand-prev-btn").click(function () {
        if (brandCnt > 0) {
          brandCnt--;
        }
        brandSlide();
        brandBtnState();
      });
      $(".brand-next-btn").click(function () {
        if (brandCnt === 0) {
          brandCnt++;
        }
        brandSlide();
        brandBtnState();
      });
    },
    etc() {
      function scrollBtnState() {
        let scrollTop = $(window).scrollTop();

        if (scrollTop >= 300) {
          $(".scroll-arrow").removeClass("xi-long-arrow-down");
          $(".scroll-arrow").addClass("xi-long-arrow-up");
        } else {
          $(".scroll-arrow").addClass("xi-long-arrow-down");
          $(".scroll-arrow").removeClass("xi-long-arrow-up");
        }
      }
      $(window).scroll(function () {
        scrollBtnState();
      });
      $(".scroll-toggle-btn").click(function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop >= 300) {
          $("html, body").animate({ scrollTop: 0 }, "slow");
        } else {
          $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        }
      });
    },
  };
  bing.init();
})(jQuery);
