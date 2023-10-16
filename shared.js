document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector(".dropdown-nav");
    const navMenuButton = document.querySelector(".navmenu");

    navMenuButton.addEventListener("click", function () {
        if (navMenu.style.display === "block") {
            navMenu.style.display = "block";
        } else {
            navMenu.style.display = "block";
        }
    });

    document.addEventListener("click", function (e) {
        if (!navMenu.contains(e.target) && e.target !== navMenuButton) {
            navMenu.style.display = "none"; // Close the dropdown
        }
    });
});