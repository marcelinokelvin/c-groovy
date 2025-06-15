// Name validation
function validate_name() {
    let name = document.getElementById("name_input").value
    
    if (name.length < 4) {
        document.getElementById("name_error").innerHTML = "Name must be at least 4 characters"
    } else {
        document.getElementById("name_error").innerHTML = ""
    }
}

// Email validation
function validate_email() {
    let email = document.getElementById("email_input").value

    if (email.endsWith("@gmail.com") && email.length > "@gmail.com".length) {
        document.getElementById("email_error").innerHTML = ""
    } else {
        document.getElementById("email_error").innerHTML = "Please input your valid gmail address."
    }
}

// Password validation
function validate_password() {
    let password = document.getElementById("password_input").value

    if (password.length < 8) {
        document.getElementById("password_error").innerHTML = "Password must be at least 8 characters"
    } else {
        document.getElementById("password_error").innerHTML = ""
    }
}

// Age validation
function validate_age() {
    let age = parseInt(document.getElementById("age_input").value)
    if (isNaN(age) || age < 13) {
        document.getElementById("age_error").innerHTML = "You must be at least 13 years old"
    } else if (age > 100) {
        document.getElementById("age_error").innerHTML = "Please enter a valid age"
    }
    else {
        document.getElementById("age_error").innerHTML = ""
    }
}

// Gender validation
function validate_gender() {
    const genderRadios = document.getElementsByName("gender")
    let selected = false

    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            selected = true
            break
        }
    }

    if (!selected) {
        document.getElementById("gender_error").innerHTML = "Please select your gender"
    } else {
        document.getElementById("gender_error").innerHTML = ""
    }
}

function validate_all() {
    validate_name()
    validate_email()
    validate_password()
    validate_age()
    validate_gender()

    // Check if any error message exists
    const errors = document.querySelectorAll(".error_msg")
    for (let error of errors) {
        if (error.innerHTML !== "") {
            return false
        }
    }
    return true
}

