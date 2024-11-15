const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector (".pass-field i");
const requirementList = document.querySelector (".requirement-list li");

// Array of passwords requirements 
const requirements = [
    {regex: /.{8}/, index: 0}, //Min 8 characters 
    {regex:/[0-9]/, index:1}, // At least 1 number 
    {regex:/ [a-z]/, index:2}, // At least 1 lowercase letter 
    {regex:/ [A-Z]/, index:3} //At least 1 Uppercase letter 
    {regex:/ [!@#$%^&*()_+]/, index:4 } //At least one symbol 
]

passwordInput.addEventListener("keyup", (e) =>{
    requirements.forEach(item => {
        //check if matches the reqex reqs
        const isVaild = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];
        
    }
}