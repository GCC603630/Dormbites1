document.addEventListener("DOMContentLoaded", function () {
    // Recipe Search Functionality
    const searchInput = document.querySelector("input[type='text']");
    const recipeItems = document.querySelectorAll(".recipe-list li");

    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            let filter = searchInput.value.toLowerCase();
            recipeItems.forEach((item) => {
                let text = item.textContent.toLowerCase();
                item.style.display = text.includes(filter) ? "block" : "none";
            });
        });
    }

    // Recipe Request Form Validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const recipe = document.getElementById("recipe").value.trim();

            if (!name || !email || !recipe) {
                alert("Please fill out all fields before submitting.");
                event.preventDefault();
            } else if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                event.preventDefault();
            } else {
                alert("Recipe request submitted successfully!");
            }
        });
    }

    // Email Validation Function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").substring(0);
            if (targetId.startsWith("#")) {
                event.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
