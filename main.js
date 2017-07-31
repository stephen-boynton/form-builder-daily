// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
// ( function(){
//   // Select the first element from the array
//   let first = formData[ 0 ];
//   // Log the first object
//   console.log( first );
//   // Log the string "First Name"
//   console.log( first.label );
// } )();


// -------- Your Code Goes Below this Line --------

// The type property specifies the type attribute of input. In this case, the type is "text."
// The label property specifies the placeholder text for this input.
// The id property specifies the value of the id attribute of the input.
// The icon property specifies the character icon for Font Awesome. This property is used only to complete the hard mode of this project.
// The options property contains additional information for some of the inputs. The context and type of input should inform how to use this data.

function dataParse () {
  const fields = document.getElementById("fields");

  console.log("Data Parsing");

  for (let i = 0; i < formData.length; i++) {
    const input = document.createElement("input");
    const FAicon = document.createElement("i");
    const selectform = document.createElement("select");
    const option = document.createElement("option");
    const textarea = document.createElement("textarea");
    if (formData[i].type === "select") {
      selectform.setAttribute("name", formData[i].label);
    } else if (formData[i].type === "textarea") {
      textarea.setAttribute("placeholder", formData[i].label);
      fields.appendChild(textarea);
    } else {
      input.setAttribute("placeholder", formData[i].label);
      fields.appendChild(input);
      input.setAttribute("type", formData[i].type);
    }
    fields.appendChild(FAicon);
    if (formData[i].options.length) {
      for (let r = 0; r < formData[i].options.length; r++) {
        const option = document.createElement("option");
        option.setAttribute("label", formData[i].options[r].label);
        option.setAttribute("value", formData[i].options[r].value);
        selectform.appendChild(option);
        fields.appendChild(selectform);
      }
      option.setAttribute("label", "Select language...")
      option.setAttribute("selected", "selected");
      selectform.appendChild(option);
    }
  }
}

dataParse();
