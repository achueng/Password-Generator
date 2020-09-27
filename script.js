// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password length
var passLength = Number(document.querySelector("#pass-length").value);

// Password characters to include
var userLc = confirm("Do you want to include lowercase characters?");
var userUc = confirm("Do you want to include uppercase characters?");
var userNum = confirm("Do you want to include numbers?");
var userSc = confirm("Do you want to include special characters? Special characters include: !?@#$%/'-_~().:,");