document.getElementById("continueButton").addEventListener("click", function() {
    const emailInput = document.getElementById("emailId");
    const errorText = document.getElementById("errorText");
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput.value.match(emailFormat)) {
        errorText.textContent = "Invalid email id.";
        return;
    } else {
        window.location.href="forget_confirmation.html";
    }
});
