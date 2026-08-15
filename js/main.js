const nextBtn = document.querySelector(".gallery__btn--next");
const prevBtn = document.querySelector(".gallery__btn--prev");
const listImgs = document.querySelectorAll(".gallery__item");
const total = listImgs.length;
let contador = 0;

nextBtn.onclick = function () {
  listImgs[contador].classList.remove("is-active");
  contador = (contador + 1) % total;
  listImgs[contador].classList.add("is-active");
};

prevBtn.onclick = function () {
  listImgs[contador].classList.remove("is-active");
  contador = (contador - 1 + total) % total;
  listImgs[contador].classList.add("is-active");
};