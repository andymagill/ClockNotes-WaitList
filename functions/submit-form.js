// This file processes the form submission for the ClockNotes waitlist.
// It collects the email and comments from the request, validates the input,
// and sends the data to a Google Sheets document for storage.

export async function onRequestPost(context) {
    const { request } = context;
    const { email, comments } = await request.json();

    // Basic validation
    if (!email || !validateEmail(email)) {
        return new Response('Invalid email address', { status: 400 });
    }

    // Here you would typically send the data to Google Sheets
    // For example, using a fetch request to your Google Sheets API endpoint

    const response = await fetch('YOUR_GOOGLE_SHEETS_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, comments }),
    });

    if (!response.ok) {
        return new Response('Failed to save data', { status: 500 });
    }

    return new Response('Success', { status: 200 });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}