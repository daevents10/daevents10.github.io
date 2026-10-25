// Mobile menu toggle + current-year footer
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav-links");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  }
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
