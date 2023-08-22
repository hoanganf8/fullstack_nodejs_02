var btn = document.querySelector(".btn");
var modalBox = document.querySelector(".modal-box");
var closeBtn = modalBox.querySelector(".modal .close");
var modalOverlay = modalBox.querySelector(".overlay");

var closeModal = function () {
  modalBox.classList.remove("show");
};
btn.addEventListener("click", function () {
  modalBox.classList.add("show");
});

closeBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);
