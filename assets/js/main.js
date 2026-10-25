// Digital ArtZ – mobile menu + footer year
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".site-header nav");

  function setOpen(open) {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("menu-open", open);
  }

  if (btn && nav) {
    btn.addEventListener("click", function () {
      setOpen(!nav.classList.contains("open"));
    });
    // Close the menu when a link is tapped or the screen is widened
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 960) setOpen(false);
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
