window.addEventListener("DOMContentLoaded", main, false);

function main (e) {
    console.log("DOM loaded!");

    const pass1 = document.getElementById("pass");
    const pass2 = document.getElementById("pass_confirmation");

    pass1.addEventListener("input", validatePasswords, false);
    pass2.addEventListener("input", validatePasswords, false);

    function validatePasswords () {
        if (pass2.value !== pass1.value) {
            console.log(pass2.value,pass2.value !== pass1.value, pass1.value);
            pass1.setCustomValidity("Passwords are not equal");
            pass2.setCustomValidity("Passwords are not equal");
        } else {
            console.log(pass2.value,pass2.value !== pass1.value, pass1.value);
            pass1.setCustomValidity("");
            pass2.setCustomValidity("");
        }
    }
}