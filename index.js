$(document).ready(function() {
    Survey.StylesManager.applyTheme("modern");

    var surveyJSON = {
        "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "BookedByName",
          "title": "Name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "BookedByEmail",
          "title": "Email",
          "isRequired": true,
          "inputType": "email"
        },
        {
          "type": "dropdown",
          "name": "MentorName",
          "title": "Mentor",
          "isRequired": true,
          "choices": [
            "Loading mentors..."
          ]
        },
        {
          "type": "dropdown",
          "name": "SlotTiming",
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


    var survey = new Survey.Model(surveyJSON);

    var mentorSettings = {
        "url": "https://apim.quickwork.co/Demo-app/mentors/v1/mentors",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "ApiKey": "90tQON3qtu8B8Qq1U3ikXLG5QOJSm3eY",
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({})
    };

    $.ajax(mentorSettings).done(function(response) {
        console.log('Mentors API Response:', response);

        // Extract mentors data
        var mentorsList = response.MentorName || [];
        var mentorChoices = mentorsList.map(function(obj) {
            return { text: obj.text };
        });

        // Update dropdown choices for mentors
        survey.getQuestionByName("MentorName").choices = mentorChoices;
        survey.render(); 

    }).fail(function(textStatus, errorThrown) {
        console.error('Error fetching mentor choices:', textStatus, errorThrown);
    });

    function sendDataToServer(survey) {
        console.log('Survey Data:', survey.data);
        alert("The results are: " + JSON.stringify(survey.data));

        $.ajax({
            url: "https://apim.quickwork.co/Demo-app/mentors/v1/BookingSlots",
            data: JSON.stringify(survey.data),
            contentType: 'application/json;charset=utf-8',
            type: "POST",
            headers: { 'ApiKey': "90tQON3qtu8B8Qq1U3ikXLG5QOJSm3eY" },
            success: function(data) {
                alert(data.status);
            },
            error: function(textStatus, errorThrown) {
                console.error('Error sending survey data:', textStatus, errorThrown);
            }
        });
    }

    var container = document.createElement('div');
    container.id = "surveyContainer";
    document.body.appendChild(container);

    $("#surveyContainer").Survey({
        model: survey,
        onComplete: sendDataToServer
    });

    survey.onValueChanged.add(function(sender, options) {
        var newMentorName = survey.getQuestionByName("MentorName").value;

        var selectedMentor = { "MentorName": newMentorName };

        var slotSettings = {
            "url": "https://apim.quickwork.co/Demo-app/mentors/v1/MentorsSlots",
            "method": "POST",
            "headers": {
                "ApiKey": "90tQON3qtu8B8Qq1U3ikXLG5QOJSm3eY",
                "Content-Type": "application/json"
            },
            "data": JSON.stringify(selectedMentor)
        };

        $.ajax(slotSettings).done(function(response) {
            console.log('Slots API Response:', response);

            var slots = response.newMentorsSlotList || [];
            survey.getQuestionByName("SlotTiming").choices = slots;
            survey.render(); 

        }).fail(function(textStatus, errorThrown) {
            console.error('Error fetching slot choices:', textStatus, errorThrown);
        });
    });
});
