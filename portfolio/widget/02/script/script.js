let toggleBtn = document.querySelector(".form-tgl-btn");
let rotateForm = document.querySelector(".rotate-form");

toggleBtn.onclick = function () {
  rotateForm.classList.toggle("flip");
  this.classList.toggle("active");
};
