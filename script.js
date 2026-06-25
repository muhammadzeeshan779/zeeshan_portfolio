// Highlights the current page in the nav bar, then sets up
// randomized rising bubbles (background layer + one per card-soft).
// (Scroll-reveal logic has been removed — content is visible on load.)

document.addEventListener("DOMContentLoaded", function () {
  // ---------- Active nav link ----------
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

});