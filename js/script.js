// Sidebar
function openNav() {
    document.getElementById("sidebar").style.left = "0";
}

function closeNav() {
    document.getElementById("sidebar").style.left = "-230px";
}

// Smooth Scroll
const links = document.querySelectorAll(".nav-link");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  document.getElementById("sidebar").style.left = "-230px";
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}