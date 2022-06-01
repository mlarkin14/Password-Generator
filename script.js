// Assignment code here
// Password digits arrays
const number = "0123456789";
const specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword() {

    // Build Password using random characters
    var newUserPassword = function(n, str) {
        var userPassword = "";
        for (var i = 0; i < n; i++) {
            userPassword += str[Math.floor(Math.random() * str.length)];
        }
        return userPassword;
    };

    return newUserPassword(SetPasswordLength(), BuildPasswordCharacterArray());
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Set Password Length and Test values
function SetPasswordLength() {
    var pwLength = 0;
    var valid = false;

    while (!valid) {
        pwLength = parseInt(window.prompt("Enter Password Lenght (8-128 characters)."));

        if (pwLength >= 8 && pwLength <= 128) {
            valid = true;
            return pwLength;
        } else {
            window.alert("Password must be more than 8 characters and less than 128 characters.");
        }
    }

}

// Build the avalible characters array
function BuildPasswordCharacterArray() {
    var passwordCharacters = "";
    while (passwordCharacters.length < 1) {
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

        if (confirmSpecialCharacter) {
            passwordCharacters = passwordCharacters.concat(specialChar);
        }
        if (confirmLowerCase) {
            passwordCharacters = passwordCharacters.concat(alphaLower);
        }
        if (confirmUpperCase) {
            passwordCharacters = passwordCharacters.concat(alphaUpper);
        }
        if (confirmNumericCharacter) {
            passwordCharacters = passwordCharacters.concat(number);
        }
        if (passwordCharacters.length == 0) {
            alert("You must select at least one character type!");
        }
    }
    return passwordCharacters;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);