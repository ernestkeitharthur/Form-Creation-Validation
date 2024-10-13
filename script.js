// Ensure the script runs after the HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the form and feedback div
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Add an event listener to handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission to the server

        // Retrieve and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize validation status and error messages array
        let isValid = true;
        const messages = [];

        // Username validation: must be at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation: must contain '@' and '.'
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation: must be at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback based on validation results
        feedbackDiv.style.display = "block"; // Make feedback visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Success color (green)
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Display errors
            feedbackDiv.style.color = "#dc3545"; // Error color (red)
        }
    });
});
