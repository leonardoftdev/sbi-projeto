let nextBtn = document.querySelector(".gallery__btn--next")
let prevBtn = document.querySelector(".gallery__btn--prev")
let listImgs = document.querySelectorAll(".gallery__item")
let contador = 0

nextBtn.onclick = function() {
   document.querySelector("figure.is-active").classList.remove("is-active")

   if (contador < 2) {
      contador++;
   } else {
      contador = 0;
   }

   listImgs[contador].classList.add("is-active")

}





