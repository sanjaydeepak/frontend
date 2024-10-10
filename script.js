var sidenav = document.querySelector(".side-navbar");

function shownavbar() {
  sidenav.style.left = "0"; // Slide in
}

function closenavbar() {
  sidenav.style.left = "-60%"; // Slide out
}
