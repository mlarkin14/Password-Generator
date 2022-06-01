// Assignment code here
// Password digits arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Input variables 
var pwLength = 0;


var passwordCharacters = [];
console.log(generateBtn);

function generatePassword() {
    SetPasswordLength();
    // console.log("pwLength: " + pwLength);  
    GetPasswordRequirements();
    // console.log (passwordCharacters);
    return BuildPassword();

    function SetPasswordLength() {
        getPasswordLength();
        // while getPasswordLength() < 8 || getPasswordLength() > 128 keep getting length.
        while (pwLength < 8 || pwLength > 128) {
            window.alert("Password must be more than 8 characters and less than 128 characters.");
            getPasswordLength();
        }
    }
    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

    }

    function getPasswordLength() {
        pwLength = parseInt(window.prompt("Enter Password Lenght (8-128 characters)."));
    }

    function BuildPasswordCharacterArray() {
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);

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
}

function GetPasswordRequirements() {
    BuildPasswordCharacterArray();
    while (passwordCharacters.length == 0) {
        window.alert("You must select at least one character type!");
        BuildPasswordCharacterArray();
    }
}

function BuildPassword() {
    var userPassword = "";
    for (var i = 0; i < pwLength; i++) {
        userPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }
    // console.log(userPassword);
    return userPassword;