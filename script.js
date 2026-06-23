const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");
const dropdown = document.querySelector(".dropdown");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

dropdown.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
        dropdown.classList.toggle("mobile-open");
    }
});