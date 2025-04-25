// This file contains the JavaScript code that handles form submission.
// It collects the email and comments from the user and sends them to the Cloudflare function for processing.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waitlist-form');
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const comments = document.getElementById('comments').value;

        if (!email) {
            alert('Please enter your email address.');
            return;
        }

        const data = {
            email: email,
            comments: comments
        };

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Thank you for joining the waitlist!');
                form.reset();
            } else {
                alert('There was an error submitting your information. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting your information. Please try again later.');
        }
    });
});