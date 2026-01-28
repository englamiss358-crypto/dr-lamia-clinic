/* ===========================
   Scroll Reveal (Simple)
=========================== */
const revealElements = document.querySelectorAll(
  ".hero-text, .hero-image, .service-box, .procedures-list li"
);

function revealOnScroll() {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ===========================
   Image Hover Effect
=========================== */
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.04)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});


/* ===========================
   Floating WhatsApp Button
=========================== */
const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/201065321638";
whatsappBtn.target = "_blank";
whatsappBtn.className = "whatsapp-float";
whatsappBtn.innerHTML = "واتساب";
document.body.appendChild(whatsappBtn);


/* ===========================
   Contact Box Animation (Safe)
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  const contactBox = document.querySelector(".contact-box");
  if (!contactBox) return;

  contactBox.style.opacity = "0";
  contactBox.style.transform = "translateY(30px)";

  setTimeout(() => {
    contactBox.style.transition = "all 1s ease";
    contactBox.style.opacity = "1";
    contactBox.style.transform = "translateY(0)";
  }, 200);
});


/* ===========================
   Intersection Observer (ONE)
=========================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document
  .querySelectorAll(".service-block, .service-card, .procedure-card")
  .forEach(el => observer.observe(el));


/* ===========================
   Simple Slider (if exists)
=========================== */
document.querySelectorAll(".slider").forEach(slider => {
  let index = 0;
  const imgs = slider.querySelectorAll("img");

  function show() {
    imgs.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
  }

  if (imgs.length > 0) {
    show();
    setInterval(() => {
      index = (index + 1) % imgs.length;
      show();
    }, 3000);
  }
});


/* ===========================
   Mobile Menu (Safe)
=========================== */
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (!btn || !nav) {
    console.log('menu elements not found');
    return;
  }

  btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    console.log('menu toggled');
  });
});


/* ===========================
   Cases Modal (Before / After)
=========================== */
const openCases = document.getElementById("openCases");
const closeCases = document.getElementById("closeCases");
const modal = document.getElementById("casesModal");
const img = document.getElementById("casesImage");
const nextBtn = document.getElementById("nextCase");
const prevBtn = document.getElementById("prevCase");



if (openCases && closeCases && modal && img && nextBtn && prevBtn) {

  const casesImages = [
    "images/before1.jpg",
    "images/after1.jpg",

    "images/before2.jpg",
    "images/after2.jpg",

    "images/before3.jpg",
    "images/after3.jpg",

    "images/before4.jpg",
    "images/after4.jpg",

    "images/before5.jpg",
    "images/after5.jpg",

    "images/before6.jpg",
    "images/after6.jpg"
  ];
const label = document.getElementById("caseLabel");

function updateImage() {
  img.src = casesImages[current];
  label.textContent = current % 2 === 0 ? "Before" : "After";
}

updateImage();

// Open and Close Modal
openCases.addEventListener("click", () => {
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
});

closeCases.addEventListener("click", () => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
});

// Close modal when clicking on overlay
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.classList.contains("cases-overlay")) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % casesImages.length;
  updateImage();
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + casesImages.length) % casesImages.length;
  updateImage();
});
// ======================
// Keyboard Navigation
// ======================
document.addEventListener("keydown", e => {
  if (!modal.classList.contains("active")) return;

  if (e.key === "ArrowRight") {
    current = (current + 1) % casesImages.length;
    img.src = casesImages[current];
  }

  if (e.key === "ArrowLeft") {
    current = (current - 1 + casesImages.length) % casesImages.length;
    img.src = casesImages[current];
  }

  if (e.key === "Escape") {
    modal.classList.remove("active");
  }
});

// ======================
// Swipe Support (Mobile)
// ======================
let startX = 0;

img.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

img.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (Math.abs(diff) < 40) return; // تجاهل الحركة الصغيرة

  if (diff < 0) {
    // Swipe Left → Next
    current = (current + 1) % casesImages.length;
  } else {
    // Swipe Right → Prev
    current = (current - 1 + casesImages.length) % casesImages.length;
  }

  img.src = casesImages[current];
});

}
