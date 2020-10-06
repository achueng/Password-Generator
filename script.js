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

// Password characters to include
// var userLc = confirm("Do you want to include lowercase characters?");
// var userUc = confirm("Do you want to include uppercase characters?");
// var userNum = confirm("Do you want to include numbers?");
// var userSc = confirm("Do you want to include special characters? Special characters include: !?@#$%/'-_~().:,");

// while (userLc === false && userUc === false && userNum === false && userSc === false) {
//   alert("At least one needs to be selected.");
//   userLc = confirm("Do you want to include lowercase characters?");
//   userUc = confirm("Do you want to include uppercase characters?");
//   userNum = confirm("Do you want to include numbers?");
//   userSc = confirm("Do you want to include special characters? Special characters include: !?@#$%/'-_~().:,");
// }

// All possible characters
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var num = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!","?","@","#","$","%","/","'","-","_","~","(",")",".",":",","];

// Include only character types that were confirmed by user
var charTypes = []; 
if (userLc === true) {
  charTypes.push(lower);
}
if (userUc === true) {
  charTypes.push(upper);
}
if (userNum === true) {
  charTypes.push(num);
}
if (userSc === true) {
  charTypes.push(special);
}

// Generate password function with dummy text as placeholder to ensure it works
function generatePassword() {
  var passLength = Number(document.getElementById("pass-length").value);
  // If user does not input a value for passLength, they will be alerted to do so before a password is generated
  if (passLength < 8 || passLength > 128) {
    alert("Please input a valid password length between 8 and 128.");
  }

  var userPass = ""

  // For loop to randomly take a character to include in password
  for (
    var i=0; i<passLength; i++) {
    var char = charTypes[Math.floor(Math.random()*charTypes.length)];
    var addPass = char[Math.floor(Math.random()*char.length)];
    userPass += addPass;
  }

  return userPass;
}