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

// All possible characters
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var num = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!","?","@","#","$","%","/","'","-","_","~","(",")",".",":",","];

// Functions that generate a random number within the length of the given array, and find the element corresponding to the index of that number in the same array
function randomLower () {
  return lower[Math.floor(Math.random()*lower.length)];
}
function randomUpper () {
  return upper[Math.floor(Math.random()*upper.length)];
}
function randomNum () {
  return num[Math.floor(Math.random()*num.length)];
}
function randomSpecial () {
  return special[Math.floor(Math.random()*special.length)];
}