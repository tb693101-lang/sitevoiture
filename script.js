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

/* ===== Services Cards ===== */
const cards = document.querySelectorAll(".card");

function revealCards() {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 50) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

/* ===== Contact Form ===== */
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Votre message a bien été envoyé !");
    form.reset();
});