// Storing the useremail and password as a array.
const users = [
    { email: "cipetprincelal@gmail.com", password: "1234" },
    { email: "plal@covalience.com", password: "1234" },
];


const getElement = (id) => document.getElementById(id);
const hideElement = (element) => (element.style.display = "none");
const showElement = (element) => (element.style.display = "");
const setReadOnly = (input) => input.setAttribute("readonly", true);
const removeReadOnly = (input) => input.removeAttribute("readonly");
const addClickEvent = (element, callback) => element.addEventListener("click", callback);

// continue button
getElement("continueButton").addEventListener("click", function () {
    const emailInput = getElement("emailId");
    const errorText = getElement("errorText");
    const errorTextPassword = getElement("errorTextPassword")
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput.value.match(emailFormat)) {
        errorText.textContent = "!!!Enter correct email address!!!";
        return;
    } else {
        errorText.textContent = "";
    }
    // Code to execute when the "Continue" button is clicked and email format is valid
    const email = emailInput.value.toLowerCase();
    const user = users.find(user => user.email === email);

    if (!user) {
        errorText.textContent = "!!!Email id is not registered!!!";
        return;
    }


    // Add event listener for the login process after the password is entered
    document.getElementById("continueButton").addEventListener("click", function () {
        const passwordInput = document.getElementById("password");
        const enteredPassword = passwordInput.value;

        // Validate the password against the stored password
        if (enteredPassword === user.password) {
            // Replace the alert with your desired action, e.g., redirect to a new page
            window.location.href = "home.html";
        } else {
            // Show error message for wrong password
            errorTextPassword.textContent = "Wrong Password.";
        }
    });

    // Show the password input field
    showElement(getElement("passwordContainer"));

    // Show the "Edit" button inside the email input
    showElement(getElement("editEmailBtn"));

    // Disable the email input field after clicking "Continue" and show the email text in the input
    setReadOnly(emailInput);

    // Remove the "google login" button after clicking
    hideElement(getElement("loginWithGoogleAccount"));

    // Remove the "microsoft login" button after clicking
    hideElement(getElement("loginWithMicrosoftAccount"));

    // Remove the "Apple login" button after clicking continue button
    hideElement(getElement("loginWithAppleAccount"));

    // Remove the signup line.
    showElement(getElement("signup"));

    // Remove the line which contain hr tag.
    hideElement(getElement("hrOrContainer"));
});

// Function to edit the email address
const editEmailAddress = () => {
    const emailInput = getElement("emailId");
    removeReadOnly(emailInput);
    emailInput.focus();
    // Hide the "Edit" button when editing starts
    hideElement(getElement("editEmailBtn"));

    // Show the "Continue" button when editing starts
    showElement(getElement("continueButton"));

    // Hide the password input field when editing starts
    hideElement(getElement("passwordContainer"));

    // Remove the "google login" button after clicking
    showElement(getElement("loginWithGoogleAccount"));

    // Remove the "microsoft login" button after clicking
    showElement(getElement("loginWithMicrosoftAccount"));

    // Remove the "Apple login" button after clicking continue button
    showElement(getElement("loginWithAppleAccount"));

    // Remove the signup line.
    showElement(getElement("signup"));

    // Remove the line which contain hr tag.
    showElement(getElement("hrOrContainer"));
};


// Function to toggle password visibility and show placeholder if password is empty
const togglePasswordVisibility = () => {
    const passwordInput = getElement("password");
    const passwordToggle = document.querySelector(".password-toggle");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.classList.add("password-hidden");
    } else {
        passwordInput.type = "password";
        passwordToggle.classList.remove("password-hidden");
    }
};


// Login with google account
addClickEvent(getElement("loginWithGoogleAccount"), function () {
    alert("Login with Google button clicked!");
    // Add your code to handle the Google login process here
});

// Login with Microsoft Account
addClickEvent(getElement("loginWithMicrosoftAccount"), function () {
    alert("Login with Microsoft button clicked!");
    // Add your code to handle the Microsoft login process here
});

// Login with Apple Account
addClickEvent(getElement("loginWithAppleAccount"), function () {
    alert("Login with Apple button clicked!");
    // Add your code to handle the Apple login process here
});

// Redirecting to signup page.
const openSignUP = () => {
    document.addEventListener("click", ()=> {
        window.location.href = "signup.html"
    });
}