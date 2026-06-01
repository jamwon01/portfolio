// Profile Image Upload Script
$("#upload-img").change(function (e) {
  let uploadImgSrc = URL.createObjectURL(e.target.files[0]);
  $(".profile-img").attr("src", uploadImgSrc);
});
