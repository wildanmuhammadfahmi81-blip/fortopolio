document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     MENU HAMBURGER
  =============================== */
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll("#navMenu a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  /* ===============================
     ANIMASI SCROLL SECTION
  =============================== */
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(30px)";
    section.style.transition = "0.8s ease";
  });

  function revealOnScroll() {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      const trigger = window.innerHeight - 120;

      if (top < trigger) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();


  /* ===============================
     MODAL SERTIFIKAT (FIX FINAL)
  =============================== */
  const modal = document.getElementById("certificateModal");
  const closeBtn = document.querySelector(".close");
  const img = document.getElementById("certificateImage");
  const iframe = document.getElementById("certificateFrame");

  document.querySelectorAll(".open-certificate").forEach(btn => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-src");

      modal.style.display = "block";

      // reset
      img.style.display = "none";
      iframe.style.display = "none";

      if (src.endsWith(".pdf")) {
        iframe.src = src;
        iframe.style.display = "block";
      } else {
        img.src = src;
        img.style.display = "block";
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    img.src = "";
    iframe.src = "";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
      img.src = "";
      iframe.src = "";
    }
  });

});
