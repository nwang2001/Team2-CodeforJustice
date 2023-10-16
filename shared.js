document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector(".dropdown-nav");
    const navMenuButton = document.querySelector(".navmenu");

    navMenuButton.addEventListener("click", function () {
        if (navMenu.style.display === "none") {
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "none";
        }
    });

    document.addEventListener("click", function (e) {
        if (!navMenu.contains(e.target) && e.target !== navMenuButton) {
            navMenu.style.display = "none"; // Close the dropdown
        }
    });
});