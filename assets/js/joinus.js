document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Grab form field values
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const dob = document.getElementById('dob').value;
        const role = document.getElementById('role').value;

        // Basic validation
        if (firstName === '' || lastName === '' || email === '' || password === '' || dob === '') {
            alert('Please fill in all the required fields.');
            return;
        }

        // Email format validation (basic)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Password length check
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // If validation passes, show a success message
        alert(`Welcome, ${firstName} ${lastName}! You have successfully signed up as a ${role}.`);

        // Redirect to the home page (e.g., index.html) after successful form submission
        window.location.href = 'index.html';  // Make sure you update this to the correct home page URL
    });
});