var generateBtn = document.querySelector("#generate");
var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("")
var lowercase = ("abcdefghijklmnopqrstuvwxyz").split("")
var numbers = ("123456789").split("")
var specCharacters = ("!@#$%^&").split("")
var selectedCharacters = []
var passwordLength = 8
var password = ""

var passwordText = document.querySelector("#password");
function writePassword() {
    console.log(password)
    passwordText.textContent=password
}
function userOptions() {
    var length = (
        prompt("Please select a length between 8 and 128 characters.")
    );
    if (isNaN(length) === true) {
        alert("Please enter a number between 8 and 128.");
        return;
    }

    if (length < 8) {
        alert("Your password must be at least 8 characters.");
        return;
    }

    if (length > 128) {
        alert("Your password must be less than 129 characters.");
        return;
    }
    passwordLength = length


    var useLowercase = confirm(
        "Click okay to include lowercase letters, or click cancel to not include."
    );

    var useUppercase = confirm("Click okay to include uppercase letters, or click cancel to not include");
    var useNumbers = confirm("Click okay to include numbers, or click cancel to not include");
    var useSpecCharacters = confirm("Click okay to include special characters, or click cancel to not include");
    if (
        useLowercase === false &&
        useUppercase === false &&
        useNumbers === false &&
        useSpecCharacters === false
    ) {
        alert("You must choose at least 1 criteria for your password.");
        return;
    }

    if (useLowercase) {
        selectedCharacters=selectedCharacters.concat(lowercase)   
    }
    if (useUppercase) {
        selectedCharacters=selectedCharacters.concat(uppercase)   
    }
    if (useNumbers) {
        selectedCharacters=selectedCharacters.concat(numbers)   
    }
    if (useSpecCharacters) {
        selectedCharacters=selectedCharacters.concat(specCharacters)   
    }
    generatePassword()
}

function generatePassword() {
    for (var i = 0; i < passwordLength; i++) {
        password = password + selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)]
    }
    writePassword()
}
generateBtn.addEventListener("click", userOptions);

