  window.onload = function () {
  window.scrollTo(0, 0);
};
 const navbar = document.querySelector(".navbar");
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

    AOS.init({
    offset: 120,
    duration: 1000,
    easing: 'ease-in-out',
  });
