"use-strict";

modalBtn = document.querySelector(".open-btn");
modalWindow = document.querySelector(".modal-container");
closeModal = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modalWindow.classList.remove("hidden");
  modalBtn.classList.add("hidden");
  modalWindow.classList.add("visible");
});

closeModal.addEventListener("click", function () {
  modalWindow.classList.add("hidden");
  modalWindow.classList.remove("visible");
  modalBtn.classList.remove("hidden");
});
