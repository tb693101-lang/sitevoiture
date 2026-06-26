document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navLinks = document.querySelector(".nav-links");
    const dropdown = document.querySelector(".dropdown");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    const trigger = document.querySelector(".dropdown-trigger");

    trigger.addEventListener("click", (e) => {
    if (window.innerWidth <= 900) {
        e.preventDefault();
        dropdown.classList.toggle("mobile-open");
    }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            navLinks.classList.remove("active");
            dropdown.classList.remove("mobile-open");
        }
    });
});