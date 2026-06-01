$(".comics-list a").click(function (e) {
  e.preventDefault();
  let comicsThumb = $(this).attr("href");
  let comicsTitle = $(this).attr("data-title");
  let comicsDesc = $(this).attr("data-desc");
  $(".lightbox-overlay").addClass("active");
  $(".lightbox-content img").attr("src", comicsThumb);
  $(".lightbox-content span").text(comicsTitle);
  $(".lightbox-content p").text(comicsDesc);
});

$(".lightbox-overlay").click(function () {
  $(this).removeClass("active");
});
