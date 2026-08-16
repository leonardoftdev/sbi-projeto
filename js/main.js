// ===== CARROSSEL DA GALERIA =====
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

// ===== LIGHTBOX =====
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector(".lightbox__close");

function openLightbox(item) {
  const img = item.querySelector("img");
  const caption = item.querySelector("figcaption");

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption.textContent;

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

listImgs.forEach((item) => {
  item.addEventListener("click", () => openLightbox(item));
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});

// ==== REVELAR SEÇÕES AO ROLAR ====
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
});

revealItems.forEach((item) => revealObserver.observe(item));

// === MAPA DO FOOTER ===

const centro = [-23.6505, -46.5105];

const map = L.map('map').setView(centro, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.circle(centro, {
    radius: 3000,
    color: '#333',
    fillColor: '#333',
    fillOpacity: 0.15
}).addTo(map);

history.scrollRestoration = 'manual';

window.addEventListener('pageshow', () => {
    window.scrollTo(0, 0);
});