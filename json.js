const json = {
  "title": "Slot Bookings",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "title": "Name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question3",
          "title": "Email",
          "isRequired": true,
          "inputType": "email"
        },
        {
          "type": "dropdown",
          "name": "question2",
          "title": "Mentor",
          "isRequired": true,
          "choices": [
            "Loading mentors..."
          ]
        },
        {
          "type": "dropdown",
          "name": "question4",
          "title": "AvailableSlot",
          "isRequired": true,
          "choices": [
            "Select a mentor first"
          ]
        }
      ]
    }
  ]
};
