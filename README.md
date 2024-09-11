# Slot Booking System

This is a slot booking system that allows users to book time slots with mentors using Survey JS.


### `index.html`
The main HTML file initializes the application and includes necessary styles and scripts for the survey form and functionality.
Key libraries used:
- jQuery
- SurveyJS

### `index.js`
Handles the dynamic functionality of the booking form, such as:
- Fetching mentors via API.
- Fetching available time slots based on the selected mentor.
- Submitting the booking data to the API.

### `json.js`
Contains the JSON configuration for the survey form, including fields such as:
- Name
- Email
- Mentor selection
- Available slots selection

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/arya-qw/Assignment-2-Survey.git
   cd Assignment-2-Survey
   ```

2. Open `index.html` in a browser:
   ```bash
   open index.html
   ```

## API Endpoints

The application interacts with the following APIs:
- **Mentor List API**: `https://apim.quickwork.co/Demo-app/mentors/v1/mentors`
- **Booking Slots API**: `https://apim.quickwork.co/Demo-app/mentors/v1/BookingSlots`
- **Available Slots API (Based on Mentor)**: `https://apim.quickwork.co/Demo-app/mentors/v1/MentorsSlots`


### Google Sheet
https://docs.google.com/spreadsheets/d/1U9KTwtYhPj46ln4xWsalw3uR02j2Xx45ctRfgV8enio/edit?usp=sharing
