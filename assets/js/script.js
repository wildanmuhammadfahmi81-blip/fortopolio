document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     MENU HAMBURGER (ENHANCED)
  =============================== */
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  
  // Create backdrop element
  const backdrop = document.createElement("div");
  backdrop.className = "menu-backdrop";
  document.body.appendChild(backdrop);

  if (menuToggle && navMenu) {
    // Toggle menu
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      backdrop.classList.toggle("active");
      
      // Prevent body scroll when menu is open
      if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Close menu when clicking a link
    document.querySelectorAll("#navMenu a").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
        backdrop.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    // Close menu when clicking backdrop
    backdrop.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
    });

    // Close menu on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("active")) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
        backdrop.classList.remove("active");
        document.body.style.overflow = "";
      }
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
