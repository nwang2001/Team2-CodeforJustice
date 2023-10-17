let form = document.getElementById('form');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();

    if(firstNameValue === '') {
        //show error
        //add error class
        setErrorFor(firstName, 'Please enter your First name');
    } else {
        setSuccessFor(firstName);
    }

    if(lastNameValue === '') {
        setErrorFor(lastName, 'Please enter your Last name');
     } else {
        setSuccessFor(lastName);
    }
    
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    let formControl  = input.parentElement; // .form-control
    let small = formControl.querySelector('small');

// add error message inside small
small.innerText = message;
//add error class 
formControl.className = "form-control error";
}

function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}  