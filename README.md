# ClockNotes Waitlist Landing Page

Welcome to the ClockNotes waitlist project! This repository contains the code for a landing page designed to gauge interest in the ClockNotes app, a time tracking tool specifically for independent gig workers and freelance professionals.

## Project Structure

The project is organized as follows:

```
clocknotes-waitlist
├── public
│   ├── index.html        # HTML structure of the landing page
│   ├── styles.css       # CSS styles for the landing page
│   └── script.js        # JavaScript for handling form submission
├── functions
│   └── submit-form.js    # Cloudflare function for processing form submissions
├── .github
│   └── workflows
│       └── deploy.yml    # GitHub Actions workflow for deployment
├── design.html           # design prototype
├── package.json          # npm configuration file
├── README.md             # Project documentation
└── tsconfig.json         # TypeScript configuration file
```

## Features

- **Gauge Interest:** The landing page clearly communicates the app's core concept and target audience.
- **Value Proposition:** Articulates the benefits of ClockNotes for freelancers, including effortless time logging, maximizing billable hours, and project organization.
- **Information Collection:** Gathers email addresses for a waitlist and allows users to leave comments or express their needs.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd clocknotes-waitlist
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm start
   ```

## How to Contribute

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.