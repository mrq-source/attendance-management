const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    const sapID = username.value.trim();
    const userPassword = password.value;

    // Example credentials for testing
    const correctSAPID = "20250001";
    const correctPassword = "123456";

    if (sapID === "" || userPassword === "") {
        showMessage("Please enter your SAP ID and password.", "red");
        return;
    }

    if (sapID === correctSAPID && userPassword === correctPassword) {
        showMessage("Login successful! Redirecting...", "green");

        // Store login status
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("sapID", sapID);

        // Redirect after 1 second
        setTimeout(function () {
            window.location.href = "home.html";
        }, 1000);
    } else {
        showMessage("Incorrect SAP ID or password.", "red");

        // Clear password
        password.value = "";
    }
});

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
    message.style.textAlign = "center";
    message.style.marginTop = "20px";
}