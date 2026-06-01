$(
  (function ($) {
    const nhis = {
      init() {
        this.header();
        this.section1();
        this.section2();
        this.section4();
        this.footer();
      },
      header() {
        // Header Dropdown Navigation Function
        $(".header-nav ul li").mouseenter(function () {
          $(".dropdown").stop().slideDown();
        });
        $(".dropdown-container").mouseleave(function () {
          $(".dropdown").stop().slideUp();
        });
      },
      section1() {
        // Section1 Tab Button Click Function
        $(".service-tab-button span").click(function () {
          $(this).siblings().removeClass("active");
          $(this).addClass("active");

          let serviceTab = $(this).attr("data-alt");

          $("." + serviceTab)
            .siblings(".service-tab")
            .removeClass("active");
          $("." + serviceTab).addClass("active");
        });
      },
      section2() {
        // Section2 News Tab Button Function
        $(".news-tab-button div span").click(function () {
          $(this).siblings().removeClass("active");
          $(this).addClass("active");

          let newsTab = $(this).attr("data-alt");
          $("." + newsTab)
            .siblings(".news-tab")
            .removeClass("active");
          $("." + newsTab).addClass("active");
        });

        // Section2 Promo Slide Function
        let promoCount = 1;
        const totalSlides = $(".promo-slide ul li").length - 2;
        const slideTransition = 600;

        function slideIndexUpdate() {
          let currentSlide =
            promoCount > totalSlides
              ? 1
              : promoCount < 1
              ? totalSlides
              : promoCount;
          $(".total-index").text(totalSlides);
          $(".current-index").text(currentSlide);
        }
        // Slide Function
        function promoSlide() {
          let slideDistance = -100 * promoCount;

          $(".promo-slide ul").css({
            transform: `translateX(${slideDistance}%)`,
            transition: `transform ${slideTransition}ms ease-in-out`,
          });

          if (promoCount > totalSlides) {
            setTimeout(function () {
              $(".promo-slide ul").css({
                transform: `translateX(-100%)`,
                transition: "none",
              });
              promoCount = 1;
            }, slideTransition - 50);
          }

          if (promoCount < 1) {
            setTimeout(function () {
              $(".promo-slide ul").css({
                transform: `translateX(-${100 * totalSlides}%)`,
                transition: "none",
              });
              promoCount = totalSlides;
            }, slideTransition - 50);
          }
          slideIndexUpdate();
        }

        function promoPrevSlide() {
          promoCount--;
          promoSlide();
          timerReset();
        }

        function promoNextSlide() {
          promoCount++;
          promoSlide();
          timerReset();
        }

        $(".promo-prev-slide").click(function () {
          promoPrevSlide();
        });

        $(".promo-next-slide").click(function () {
          promoNextSlide();
        });

        $(".promo-pause-btn").click(function () {
          if ($(this).hasClass("active")) {
            promoAutoSlide();
            $(this).removeClass("active");
          } else {
            $(this).addClass("active");
            pauseSlide();
          }
        });

        // Auto Slide Function
        function promoAutoSlide() {
          slideTimer = setInterval(
            function () {
              promoCount++;
              promoSlide();
            },
            4000,
            "ease-in-out"
          );
        }
        promoAutoSlide();
        // AutoSlide Timer Reset Function
        function timerReset() {
          clearInterval(slideTimer);
          promoAutoSlide();
        }

        // Slide Pause
        function pauseSlide() {
          clearInterval(slideTimer);
        }

        slideIndexUpdate();
      },
      section4() {
        // Section4 Promo Slide Function

        let s4PromoCount = 1;
        let s4TotalSlides = $(".slide-container ul li").length - 2;
        let slideTransition = 600;
        let s4SlideTimer;

        function s4slideIndexUpdate() {
          let s4currentSlide =
            s4PromoCount > s4TotalSlides
              ? 1
              : s4PromoCount < 1
              ? s4TotalSlides
              : s4PromoCount;
          $(".s4-total-index").text(s4TotalSlides);
          $(".s4-current-index").text(s4currentSlide);
        }

        function s4PromoSlide() {
          s4slideIndexUpdate();
          let slideDistance = s4PromoCount * -100;

          $(".slide-container ul").css({
            transform: `translateX(${slideDistance}%)`,
            transition: `transform ${slideTransition}ms ease-in-out`,
          });

          if (s4PromoCount > s4TotalSlides) {
            setTimeout(function () {
              $(".slide-container ul").css({
                transform: `translateX(-100%)`,
                transition: "none",
              });
              s4PromoCount = 1;
            }, slideTransition - 50);
          }

          if (s4PromoCount < 1) {
            setTimeout(function () {
              $(".slide-container ul").css({
                transform: `translateX(-${100 * s4TotalSlides}%)`,
                transition: "none",
              });
              s4PromoCount = s4TotalSlides;
            }, slideTransition - 50);
          }
        }

        function s4NextSlide() {
          s4PromoCount++;
          s4PromoSlide();
          clearInterval(s4SlideTimer);
          s4PromoAutoSlide();
        }
        function s4PrevSlide() {
          s4PromoCount--;
          s4PromoSlide();
          clearInterval(s4SlideTimer);
          s4PromoAutoSlide();
        }

        $(".s4-prev-slide").click(function () {
          s4PrevSlide();
        });
        $(".s4-next-slide").click(function () {
          s4NextSlide();
        });
        $(".s4-pause-slide").click(function () {
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            s4PromoAutoSlide();
          } else {
            $(this).addClass("active");
            clearInterval(s4SlideTimer);
          }
        });

        function s4PromoAutoSlide() {
          s4SlideTimer = setInterval(function () {
            s4PromoCount++;
            s4PromoSlide();
          }, 4000);
        }
        s4PromoAutoSlide();
        s4slideIndexUpdate();
      },
      footer() {
        $(".family-site1").click(function () {
          $(".family-modal").removeClass("active");
          $(".family-modal1").addClass("active");
          $("body").addClass("modal-on");
        });
        $(".family-site2").click(function () {
          $(".family-modal").removeClass("active");
          $(".family-modal2").addClass("active");
          $("body").addClass("modal-on");
        });
        $(".search-box-open").click(function () {
          $(".search-modal").addClass("active");
          $("body").addClass("modal-on");
        });
        $(".family-modal i, .search-modal i").click(function () {
          $(this).parent().removeClass("active");
          $("body").removeClass("modal-on");
        });
      },
    };
    nhis.init();
  })(jQuery)
);
