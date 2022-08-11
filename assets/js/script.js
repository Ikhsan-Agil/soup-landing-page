// For modal 1
const modalBtn1 = document.querySelector(".modal-trigger-1");
const modalBg1 = document.querySelector(".modal-bg-1");
const modalClose1 = document.querySelector(".modal-close");

modalBtn1.addEventListener("click", () => {
  modalBg1.classList.add("bg-active");
});

modalClose1.addEventListener("click", () => {
  modalBg1.classList.remove("bg-active");
});
