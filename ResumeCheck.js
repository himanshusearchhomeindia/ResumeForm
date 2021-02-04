//Accessing the elements to validate the form and send to the backend.
const Name = document.getElementById('name');  //Name of the user.
const Email = document.getElementById('email');  //Email-id of the user.
const Phone = document.getElementById('phone');  //Phone number of the user.
// const Resume = document.getElementById('resume');  //Resume of the user.
const Form = document.getElementById('Contactform');  //form.

//Alter elements.
const SuccessAlert = document.getElementById('success'); //SuccessAlertElement.
const FailureAlert = document.getElementById('failure'); //FailureAlertElement.

//In the start both the Alerts will be hidden.
SuccessAlert.hidden = true;
FailureAlert.hidden = true;

//variables for checking(these values set to false when the form validation will get completed these values will get changed).
let validName = false;
let validEmail = false;
let validPhone = false;

Name.addEventListener('blur', () => {
    //Checking the name of the user based on the Regex and if it met the condition then the "is valid class will be added on the name block to show the success message."

    Name.classList.remove('is-valid');  //Bootstrap class for form validation.
    Name.classList.remove('is-invalid');  //Bootstrap class for form validation.

    let NameData = Name.value; //Value inside the name input box.
    let regex = /^[a-z\sA-z]{3,20}$/;  //regex expression.
    let Test = regex.test(NameData);  //testing.
    if (Test) {
        //if the test value will be true then the 'is-valid' class will get added in name input box.
        Name.classList.add('is-valid');
        validName = true; //valid Name variable will se changed to true.
    } else {
        //if the test value will be false then the 'is-invalid' class will get added in name input box.
        Name.classList.add('is-invalid');
    };
});


Email.addEventListener('blur', () => {
    //Checking the Email of the user based on the Regex and if it met the condition then the "is valid" class will be added on the name block to show the success message.

    Email.classList.remove('is-valid');  //Bootstrap class for form validation.
    Email.classList.remove('is-invalid');  //Bootstrap class for form validation.

    let EmailData = Email.value;  //value inside the email input box.
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  //regex expression.
    let Test = regex.test(EmailData);  //testing.
    if (Test) {
        //if the test value will be true then the 'is-valid' class will get added in email input box.
        Email.classList.add('is-valid');
        validEmail = true;
    } else {
        //if the test value will be false then the 'is-invalid' class will get added in email input box.
        Email.classList.add('is-invalid');
    };
});

Phone.addEventListener('blur', () => {
    //Checking the phone of the user based on the Regex and if it met the condition then the "is valid" class will be added on the name block to show the success message.

    Phone.classList.remove('is-valid');  //Bootstrap class for form validation.
    Phone.classList.remove('is-invalid');  //Bootstrap class for form validation.

    let PhoneData = Phone.value; //value inside the phone input box.
    let regex = /^[0-9]{10}$/;  //regex expression.
    let Test = regex.test(PhoneData);  //testing
    if (Test) {
        //if the test value will be true then the 'is-valid' class will get added in phone input box.
        Phone.classList.add('is-valid');
        validPhone = true;
    } else {
        //if the test value will be false then the 'is-invalid' class will get added in phone input box.
        Phone.classList.add('is-invalid');
    };
});


Form.addEventListener('submit', (event) => {
    
    event.preventDefault(); //this will prevent the page to reload.

    if (validName && validEmail && validPhone){
        //if all the conditions mentioned above will get true then this function will access all the values of the form and store them into a object convert them into json string and send to the backend by using fetch API.

        //Accessing the user data from the form.
        let UserData = {
            'Name': Name.value,
            'Email': Email.value,
            'Phone': Phone.value,
        };

        let UserJsonData = JSON.stringify(UserData); //converting the userdata into string form.

        //testing
        console.log(UserJsonData);
        SuccessAlert.hidden = false; //changing the success alert hidden value to show the success message.
    } else {
        //if one of the above conditions will get false then it will show the error message.
        FailureAlert.hidden = false; //changing the failure alert hidden value to show the failure message.
    };
});