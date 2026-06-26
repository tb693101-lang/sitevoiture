document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navLinks = document.querySelector(".nav-links");
    const dropdown = document.querySelector(".dropdown");

    // Ouvrir / fermer menu mobile
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Ouvrir / fermer sous-menu sur mobile
    dropdown.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle("mobile-open");
        }
    });
});