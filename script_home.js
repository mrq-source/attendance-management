
// =====================================================
// DARK / LIGHT MODE
// =====================================================

// Get the button
const themeToggle = document.getElementById("themeToggle");


// Check if the user already selected a theme
const savedTheme = localStorage.getItem("theme");


// If dark mode was saved previously
if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML = "☀️ Light";

}


// If light mode was saved previously
else {

    document.body.classList.remove("dark-mode");

    themeToggle.innerHTML = "🌙 Dark";

}


// =====================================================
// BUTTON CLICK
// =====================================================

themeToggle.addEventListener("click", function () {

    // Add/remove dark-mode class
    document.body.classList.toggle("dark-mode");


    // Check whether dark mode is active
    if (document.body.classList.contains("dark-mode")) {

        // Change button text
        themeToggle.innerHTML = "☀️ Light";

        // Save dark mode
        localStorage.setItem("theme", "dark");

    }

    else {

        // Change button text
        themeToggle.innerHTML = "🌙 Dark";

        // Save light mode
        localStorage.setItem("theme", "light");

    }

});
