document.getElementById("contactForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        displayMessage("Please fill out all fields.", "error");
        event.preventDefault(); // Keeps the validation but prevents form submission if any field is empty.
    } else if (!isValidEmail(email)) {
        displayMessage("Please enter a valid email address.", "error");
        event.preventDefault(); // Prevents form submission if email is invalid.
    }
    
});
