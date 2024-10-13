// Ensure the script runs after the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the form and feedback div
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Add an event listener to handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission to the server

        // Retrieve and trim input values
        const username = getTrimmedValue("username");
        const email = getTrimmedValue("email");
        const password = getTrimmedValue("password");

        // Validate inputs and display feedback
        const { isValid, messages } = validateInputs(username, email, password);
        displayFeedback(isValid, messages);
    });

    // Helper function to retrieve and trim input values
    function getTrimmedValue(id) {
        return document.getElementById(id).value.trim();
    }

    // Function to validate username, email, and password
    function validateInputs(username, email, password) {
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

        return { isValid, messages };
    }

    // Function to display feedback to the user
    function displayFeedback(isValid, messages) {
        feedbackDiv.style.display = "block"; // Make feedback visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Success color (green)
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Display errors
            feedbackDiv.style.color = "#dc3545"; // Error color (red)
        }
    }
});
