document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const dropdown = document.getElementById("dropdown-menu");
    if (hamburger && dropdown) {
        hamburger.addEventListener("click", () => {
            dropdown.classList.toggle("show");
        });
    }
});
