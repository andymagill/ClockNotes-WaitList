// This file contains the JavaScript code that handles form submission.
// It collects the email and comments from the user and sends them to the Cloudflare function for processing.

document.addEventListener('DOMContentLoaded', function() {
    // Handle main waitlist form
    const mainForm = document.getElementById('waitlist-form');
    if (mainForm) {
        mainForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Handle CTA waitlist form
    const ctaForm = document.getElementById('cta-waitlist-form');
    if (ctaForm) {
        ctaForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Common form submission handler
    async function handleFormSubmit(event) {
        event.preventDefault();
        
        // Get the email from the current form
        const form = event.target;
        let email, comments = '';

        // Find email input in the current form
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput) {
            email = emailInput.value;
        }

        // Try to find comments if they exist in this form
        const commentsInput = form.querySelector('textarea#comments');
        if (commentsInput) {
            comments = commentsInput.value;
        }

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
    }
});