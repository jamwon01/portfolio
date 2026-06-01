(function ($) {
  const yes24 = {
    init() {
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section5();
      this.section7();
      this.section8();
    },
    header() {
      // Header Search Field Function
      $(".search-input").focus(function () {
        $(".header-search-box").addClass("active");
      });
      $(".search-box-close-btn,  .category-section, .today-book-section").click(
        function () {
          $(".header-search-box").removeClass("active");
        }
      );
      // AD Box Slide Function
      let count = 0;
      function headerSlide() {
        $(".header-mid-right-box ul").css({
          transform: `translateX(${-100 * count}%)`,
        });
      }
      function headerPrevBtnClick() {
        count--;
        if (count < 0) {
          count = 2;
        }
        headerSlide();
      }
      function headerNextBtnClick() {
        count++;
        if (count > 2) {
          count = 0;
        }
        headerSlide();
      }
      $(".prev-slide-btn").click(function () {
        headerPrevBtnClick();
      });
      $(".next-slide-btn").click(function () {
        headerNextBtnClick();
      });
    },
    section1() {
      let category1Tab;

      // Section1 Left Category Mouseenter Function
      $(".category-list ul li").mouseenter(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        let category = $(this).attr("data-alt");

        $("." + category).addClass("active");
        $("." + category)
          .siblings()
          .removeClass("active");
      });

      // Section1 Tab Bottom Mouseenter Function
      $(".category1-tab-item ul li, .tab-item ul li ").mouseenter(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        let categoryTab = $(this).attr("data-alt");

        $("." + categoryTab).addClass("active");
        $("." + categoryTab)
          .siblings()
          .removeClass("active");
      });
    },
    section2() {
      let count = 0;
      const maxCount = 4;
      const slideWidth = 200;

      function mainSlide() {
        $(".today-book-section .slide img").css({
          marginLeft: `${-slideWidth * count}px`,
        });
        updateTitle();
      }

      $(".s2-left-slide-next-btn").click(function () {
        if (count < maxCount) {
          count++;
        } else {
          count = 0;
        }
        mainSlide();
      });

      $(".s2-left-slide-prev-btn").click(function () {
        if (count > 0) {
          count--;
        } else {
          count = maxCount;
        }
        mainSlide();
      });

      function updateTitle() {
        if (count === 0) {
          $(".s2-slide-book-title").text("김사원세끼의 노포 투어");
        }
        if (count === 1) {
          $(".s2-slide-book-title").text("포슬포슬 알밤 운동회");
        }
        if (count === 2) {
          $(".s2-slide-book-title").text("오즈의 위대한 마법사");
        }
        if (count === 3) {
          $(".s2-slide-book-title").text("그 사람은 말을 참 예쁘게 해");
        }
        if (count === 4) {
          $(".s2-slide-book-title").text("느린 아이 어떻게 키울까?");
        }
      }
      updateTitle();

      // Today Books Function
      $(".book-list li").mouseenter(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        let todayBookTab = $(this).attr("data-alt");
        console.log(todayBookTab);

        $("." + todayBookTab)
          .siblings()
          .removeClass("active");
        $("." + todayBookTab).addClass("active");
      });

      $(".s2-center-slide-next-btn").click(function () {
        let currentBook = $(".book-list li.active");
        let next = currentBook.next("li");

        if (next.length === 0) {
          next = $(".book-list li.first");
        }

        currentBook.removeClass("active");
        next.addClass("active");

        let nextBook = next.attr("data-alt");

        $(".today-book-tab").removeClass("active");
        $("." + nextBook).addClass("active");
      });

      $(".s2-center-slide-prev-btn").click(function () {
        let currentBook = $(".book-list li.active");
        let prev = currentBook.prev("li");

        if (prev.length === 0) {
          prev = $(".book-list li.last");
        }

        currentBook.removeClass("active");
        prev.addClass("active");

        let prevBook = prev.attr("data-alt");

        $(".today-book-tab").removeClass("active");
        $("." + prevBook).addClass("active");
      });

      // BestSeller & Hot Search Function
      $(".tab-button-box span").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        let tab = $(this).attr("data-alt");

        $("." + tab)
          .siblings(".topic-tab")
          .removeClass("active");
        $("." + tab).addClass("active");
      });
      $(".topic").click(function () {
        $(this).children("ul").slideToggle();
      });
      $(".topic ul li a").click(function (e) {
        e.preventDefault();
        $(this).parent().parent().siblings(".topic-title").text($(this).text());
      });

      $(".ranking-tab span").click(function () {
        $(this).siblings("span").removeClass("active");
        $(this).addClass("active");

        let bsRankingTab = $(this).attr("data-alt");

        $("." + bsRankingTab)
          .siblings(".bs-ranking")
          .removeClass("active");
        $("." + bsRankingTab).addClass("active");
      });
    },
    section3() {
      let count = 0;

      function s3BtnClickEvent() {
        $(".now-books .slide-container ul").css({
          transform: `translateX(${-100 * count}%)`,
        });
      }
      $(".s3-slide-next-btn").click(function () {
        count++;
        if (count > 2) {
          count = 0;
        }
        s3BtnClickEvent();
      });

      $(".s3-slide-prev-btn").click(function () {
        count--;
        if (count < 0) {
          count = 2;
        }
        s3BtnClickEvent();
      });
    },
    section5() {
      // Hot Books Function
      let leftCount = 0;

      function s5BtnClickEvent() {
        $(".hot-book-box .slide-container ul").css({
          transform: `translateX(${-100 * leftCount}%)`,
        });
      }
      $(".s5-slide-next-btn").click(function () {
        leftCount++;

        if (leftCount > 2) {
          leftCount = 0;
        }

        s5BtnClickEvent();
      });
      $(".s5-slide-prev-btn").click(function () {
        leftCount--;

        if (leftCount < 0) {
          leftCount = 2;
        }
        s5BtnClickEvent();
      });
      // CremaShop Function
      let rightCount = 0;

      function cremaBtnClickEvent() {
        $(".crema-club ul").css({
          transform: `translateX(${-100 * rightCount}%)`,
        });
      }
      function cremaPrevBtnClick() {
        rightCount--;

        if (rightCount < 0) {
          rightCount = 2;
        }
        cremaBtnClickEvent();
      }
      function cremaNextBtnClick() {
        rightCount++;

        if (rightCount > 2) {
          rightCount = 0;
        }
        cremaBtnClickEvent();
      }
      $(".s5-slide-right-prev-btn").click(function () {
        cremaPrevBtnClick();
      });
      $(".s5-slide-right-next-btn").click(function () {
        cremaNextBtnClick();
      });
    },
    section7() {
      // Change Youtuve Video Function
      $(".video-list li").mouseenter(function () {
        let youtubeTab = $(this).attr("data-alt");

        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");

        $(".youtube-tab").removeClass("active");
        $("." + youtubeTab).addClass("active");
      });
    },
    section8() {
      // CardNews Book Slide Function
      let cardNewsCount = 0;
      function cardNewsSlide() {
        $(".card-news-box .slide-container > ul").css({
          transform: `translateX(${-100 * cardNewsCount}%)`,
        });
      }

      function cardNewsPrevClick() {
        cardNewsCount--;

        if (cardNewsCount < 0) {
          cardNewsCount = 2;
        }

        cardNewsSlide();
      }
      function cardNewsNextClick() {
        cardNewsCount++;

        if (cardNewsCount > 2) {
          cardNewsCount = 0;
        }

        cardNewsSlide();
      }
      $(".s8-card-news-prev-btn").click(function () {
        cardNewsPrevClick();
      });
      $(".s8-card-news-next-btn").click(function () {
        cardNewsNextClick();
      });

      // CardNews Book Detail Function
      function initCardNewsSlider(tabClass) {
        let cardNewsDetailCount = 0;
        let $slider = $(tabClass).find(".detail");
        let liCount = $slider.find("li").length;

        function cardNewsDetailSlide() {
          $slider.css({
            transform: `translateX(${-100 * cardNewsDetailCount}%)`,
          });
          updateButtons();
        }
        function cardNewsDetailPrevClick() {
          if (cardNewsDetailCount > 0) {
            cardNewsDetailCount--;
            cardNewsDetailSlide();
          }
        }
        function cardNewsDetailNextClick() {
          if (cardNewsDetailCount < liCount - 1) {
            cardNewsDetailCount++;
            cardNewsDetailSlide();
          }
        }
        function updateButtons() {
          let $prevButton = $(tabClass).find(".s8-detail-prev-btn");
          let $nextButton = $(tabClass).find(".s8-detail-next-btn");

          if (cardNewsDetailCount === 0) {
            $prevButton.addClass("disabled");
          } else {
            $prevButton.removeClass("disabled");
          }
          if (cardNewsDetailCount === liCount - 1) {
            $nextButton.addClass("disabled");
          } else {
            $nextButton.removeClass("disabled");
          }
        }
        $(tabClass)
          .find(".s8-detail-prev-btn")
          .click(function () {
            cardNewsDetailPrevClick();
          });
        $(tabClass)
          .find(".s8-detail-next-btn")
          .click(function () {
            cardNewsDetailNextClick();
          });
        updateButtons();
      }
      initCardNewsSlider(".card-tab-1");
      initCardNewsSlider(".card-tab-2");
      initCardNewsSlider(".card-tab-3");

      // Channel Yes Slide Function
      let chanCount = 0;

      function chanSlide() {
        $(".channel-yes-box .top .slide-container ul").css({
          transform: `translateX(${-100 * chanCount}%)`,
        });
      }

      function chanPrevClick() {
        chanCount--;

        if (chanCount < 0) {
          chanCount = 1;
        }

        chanSlide();
      }
      function chanNextClick() {
        chanCount++;

        if (chanCount > 1) {
          chanCount = 0;
        }

        chanSlide();
      }
      $(".s8-chan-prev-btn").click(function () {
        chanPrevClick();
      });
      $(".s8-chan-next-btn").click(function () {
        chanNextClick();
      });

      // Sarak Slide Function

      let sarakCount = 0;

      function sarakSlide() {
        $(".sarak-box .top .slide-container ul").css({
          transform: `translateX(${-100 * sarakCount}%)`,
        });
      }

      function sarakPrevClick() {
        sarakCount--;

        if (sarakCount < 0) {
          sarakCount = 1;
        }

        sarakSlide();
      }
      function sarakNextClick() {
        sarakCount++;

        if (sarakCount > 1) {
          sarakCount = 0;
        }

        sarakSlide();
      }
      $(".s8-sarak-prev-btn").click(function () {
        sarakPrevClick();
      });
      $(".s8-sarak-next-btn").click(function () {
        sarakNextClick();
      });
    },
  };
  yes24.init();
})(jQuery);
