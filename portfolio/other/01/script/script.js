(function ($) {
  const otoki = {
    initSwiper(selector, options) {
      return new Swiper(selector, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        ...options,
      });
    },
    init() {
      this.include();
      this.mainslide();
      this.newProducts();
      this.bannerSlide();
      this.todayDeal();
      this.recProducts();
      this.otokiPick();
      this.otokiGoods();
      this.otokiNoodles();
      this.otokiRecipe();
      this.signin();
      this.cart();
      this.signup();
      this.faq();
      this.otokiDaily();
      this.productDetails();
      this.modal();
    },
    include() {
      /* Header Include */
      $(".header-include").load("include/header.html", function () {
        /* Header Category Mouseenter & Mouseleave */
        $(".header-category-container, .header-category").mouseenter(
          function () {
            $(".header-category").stop().slideDown();
          },
        );
        $(".header-category-container, .header-category").mouseleave(
          function () {
            $(".header-category").stop().slideUp();
          },
        );
        $(".header-category-main li").mouseenter(function () {
          if ($(this).children(".header-category-sub").length > 0) {
            $(this).siblings("li").children(".header-category-sub").hide();
            $(this).children(".header-category-sub").show();
          } else {
            $(".header-category-sub").hide();
          }
        });
      });
      /* Footer Include */
      $(".footer-include").load("../include/footer.html", function () {
        /* Mobile Company Info Open */
        $(".m-info-open").click(function () {
          $(this).toggleClass("active");
          $(this).next().slideToggle();
        });
      });
      /* Floating Menu Include */
      $(".floating-menu-include").load(
        "../include/floating-menu.html",
        function () {
          /* Go Top */
          $(".go-top-btn").click(function () {
            $("html,body").animate({ scrollTop: 0 }, 600);
          });

          /* Support Modal Open */
          $(".support-modal-open").click(function () {
            $(this).toggleClass("active");
            $(this).children(".bi").toggleClass("bi-chat-dots, bi-x-lg");
            $(".support-modal").fadeToggle();
          });
        },
      );
      /* Mobile Bottom Navigation Include */
      $(".mo-bottom-nav-include").load("../include/mo-bottom-nav.html");
    },
    mainslide() {
      this.initSwiper(".main-slide", {
        slidesPerView: 1,
        navigation: false,
        pagination: {
          el: ".pagination",
          type: "fraction",
        },
        navigation: {
          prevEl: ".main-slide-btn.prev",
          nextEl: ".main-slide-btn.next",
        },
      });
    },
    newProducts() {
      this.initSwiper(".new-pr", {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
      });
      /* Product Soldout */
      $(".product.soldout").each(function () {
        $(this)
          .find(".pr-thumb .bi")
          .removeClass("bi-cart")
          .addClass("bi-bell");
      });
    },
    bannerSlide() {
      this.initSwiper(".banner-slide", {
        slidesPerView: 1,
        spaceBetween: 20,
      });
      this.initSwiper(".mo-banner-slide", {
        slidesPerView: 1,
        spaceBetween: 20,
      });
    },
    todayDeal() {
      $(".deal-timer").countdown("2025/04/02", function (event) {
        $(this).html(event.strftime("<span>%H<em>:</em>%M<em>:</em>%S</span>"));
      });
    },
    recProducts() {
      this.initSwiper(".rec-pr", {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        },
      });
    },
    otokiPick() {
      this.initSwiper(".otoki-pick", {
        slidesPerView: 1,
        pagination: {
          el: ".otoki-pick-section .title-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            let titles = [
              "통영과 함께하는 장어구이",
              "오징어게임 뿌셔뿌셔!",
              "제주의 맛을 가득담다",
              "막 만들지 않은 막국수",
              "오뚜기밥 수향미",
            ];
            return `<span class="${className}">${titles[index]}</span>`;
          },
        },
      });
    },
    otokiGoods() {
      this.initSwiper(".otoki-goods", {
        slidesPerView: 3,
        spaceBetween: 25,
        breakpoints: {
          1024: {
            slidesPerView: 4,
          },
        },
      });
    },
    otokiNoodles() {
      this.initSwiper(".otoki-noodles", {
        slidesPerView: 3,
        spaceBetween: 25,
        breakpoints: {
          1024: {
            slidesPerView: 4,
          },
        },
      });
    },
    otokiRecipe() {
      this.initSwiper(".otoki-recipe", {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        allowTouchMove: false,
        pagination: {
          el: ".otoki-recipe-section .title-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            let titles = [
              "오징어 봄동무침",
              "고사리 갈릭볶음밥",
              "딸기 레어치즈케이크",
              "마늘떡볶이",
              "떡만둣국",
              "왕새우 크림 그라탕",
              "진저라떼",
              "문어 와사비 냉채",
            ];
            return `<span class="${className}">${titles[index]}</span>`;
          },
        },
      });
    },
    signin() {
      $(".pw-toggle").click(function () {
        let $inputPw = $(".input-pw");
        $(this).toggleClass("bi-eye-fill, bi-eye-slash-fill");

        if ($inputPw.attr("type") === "text") {
          $inputPw.attr("type", "password");
          $inputPw.focus();
        } else {
          $inputPw.attr("type", "text");
          $inputPw.focus();
        }
      });
    },
    cart() {
      /* Quantity Plus Minus */
      $(document).on("click", ".pr-quantity button", function () {
        let $quantity = $(this).siblings(".quantity");
        let quantityCount = parseInt($quantity.text());

        if ($(this).hasClass("minus")) {
          quantityCount--;
          if (quantityCount < 1) {
            quantityCount = 1;
          }
        } else if ($(this).hasClass("plus")) {
          quantityCount++;
        }
        $quantity.text(quantityCount);
      });
      /* Cart Checkbox */
      $(".cart-all-chk").click(function () {
        $(".cart-chk").prop("checked", this.checked);
      });

      /* Cart Product Delete */
      $(".cart-pr-delete").click(function () {
        $(".product-delete-modal").addClass("active");
        let prInfo = $(this);

        $(".btn-confirm").on("click", function () {
          prInfo.parent(".cart-product").remove();
          prInfo.parent(".mo-cart-product").remove();
          $(".product-delete-modal").removeClass("active");
        });
        $(".btn-cancel").on("click", function () {
          $(".product-delete-modal").removeClass("active");
        });
      });
    },
    signup() {
      /* Birth Select Option Append */
      let $year = $(".year");
      let yearOption = "";
      let $month = $(".month");
      let monthOption = "";
      let $date = $(".date");
      let dateOption = "";
      for (let i = 2025; i >= 1920; i--) {
        yearOption += "<option>" + i + "년" + "</option>";
      }
      for (let i = 1; i <= 12; i++) {
        monthOption += "<option>" + i + "월" + "</option>";
      }
      for (let i = 1; i <= 31; i++) {
        dateOption += "<option>" + i + "일" + "</option>";
      }
      $year.append(yearOption);
      $month.append(monthOption);
      $date.append(dateOption);

      /* Terms Checkbox Function */
      $(".terms-all-chk").click(function () {
        $('input[name="terms-chk"]').prop("checked", this.checked);
      });
    },
    faq() {
      /* FAQ Accordion */
      $(".faq-question").click(function () {
        $(this).siblings(".faq-question").removeClass("active");
        $(this).siblings(".faq-answer").stop().slideUp();
        $(this).toggleClass("active");
        $(this).next().stop().slideToggle();
      });
    },
    otokiDaily() {
      /* TMP */
      $(".sort-list a").click(function (e) {
        e.preventDefault();
        $(this).parent().siblings().children().removeClass("active");
        $(this).addClass("active");
      });

      /* Layout Change Toggle */
      $(".layout-toggle").click(function () {
        $(this).toggleClass("active");
        $(".daily-product").toggleClass("active");
      });
    },
    productDetails() {
      /* Product Option List Open */
      $(".option-open.main").click(function () {
        $(this).toggleClass("active");
        $(".option-box.main").toggle();
      });
      $(".option-open.quick").click(function () {
        $(this).toggleClass("active");
        $(".option-box.quick").toggle();
      });
      /* Product Option Add */
      $(".option-list li").click(function () {
        $(".option-open").removeClass("active");
        $(".option-box").hide();
        let $optionTitle = $(this).find(".option-title").text();
        let $selectedContainer = $(".selected-container");
        let selectedOption = `<div class="selected-option">
                        <span class="selected-title"
                          >${$optionTitle}</span
                        >
                        <div class="pr-quantity">
                          <button class="minus">
                            <i class="bi bi-dash-lg"></i>
                          </button>
                          <span class="quantity">1</span>
                          <button class="plus">
                            <i class="bi bi-plus-lg"></i>
                          </button>
                        </div>
                        <i class="bi bi-x-lg option-delete"></i>
                      </div>`;

        $selectedContainer.append(selectedOption);
      });

      /* Option Delete */
      $(document).on("click", ".option-delete", function () {
        $(this).parents(".selected-option").remove();
      });

      /* Product Tab Bar Anchor */
      $(".pr-tab-bar a").click(function (e) {
        /* 이벤트 막기는 임시 */
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
      });

      /* Review Photo Toggle */
      $(".show-photo").click(function () {
        $(this).toggleClass("active");
        $(this).siblings(".review-photo").toggle();
        if ($(this).hasClass("active")) {
          $(this).text("접기");
        } else {
          $(this).text("더보기");
        }
      });

      /* Product Notice Accordion */
      $(".pr-notice .notice-title").click(function () {
        $(this).toggleClass("active");
        $(this).next().stop().toggle();
      });

      /* QnA Toggle */
      $(".show-qna").click(function () {
        $(this).siblings(".qna").toggle();
      });
    },
    modal() {
      /* Promo Modal Close Function */
      $(".promo-modal-close").click(function () {
        $(".promo-modal").fadeOut();
      });
    },
  };
  otoki.init();
})(jQuery);
