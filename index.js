const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// Array of password requirements
const requirements = [
    { regex: /.{8}/, index: 0 }, // Min 8 characters
    { regex: /[0-9]/, index: 1 }, // At least 1 number
    { regex: /[a-z]/, index: 2 }, // At least 1 lowercase letter
    { regex: /[A-Z]/, index: 3 }, // At least 1 uppercase letter
    { regex: /[!@#$%^&*()_+]/, index: 4 } // At least one symbol
];

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // Check if the password matches the regex requirement
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Update class and icon of the requirement item based on validity
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener("click", () => {
    // Toggle between password visibility
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Update the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});
