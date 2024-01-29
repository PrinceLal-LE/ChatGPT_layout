
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
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput.value.match(emailFormat)) {
        errorText.textContent = "!!!Enter correct email address!!!";
        return;
    } else {
        errorText.textContent = "";
    }

    // Adding event listener for the login process after the password is entered
    document.getElementById("continueButton").addEventListener("click", function () {
        const passwordInput = document.getElementById("password");
        passwordInput = passwordInput.value;
        window.location.href = "home.html"

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
    alert("Redirecting to google account login")
});

// Login with Microsoft Account
addClickEvent(getElement("loginWithMicrosoftAccount"), function () {
    alert("Redirecting to Microsoft account login.");
});

// Login with Apple Account
addClickEvent(getElement("loginWithAppleAccount"), function () {
    alert("Redirecting to Apple account login.");
});

const openLogin = () => {
    document.addEventListener("click", () => {
        window.location.href = "login.html";
    });
};
