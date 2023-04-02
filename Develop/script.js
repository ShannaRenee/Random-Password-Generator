// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var spChar = ["!", "#", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", ">", "<", "=", "?", "@", "[", "]", "^", "_", "{", "}", "~"];

// Write password to the #password input
function writePassword() {

  // First prompt - Length of Password
   var passwordLength = prompt("How long would you like your password to be? (select between 8-128 characters)");
    if (passwordLength < 8) {
        alert("Not enough characters: Please enter a number between 8 and 128.");
        writePassword();

    } else if (passwordLength > 128) {
        alert("Too many characters: Please enter a number between 8 and 128.");
        writePassword();
  }

  // Second prompt - lowercase letters
    confirm("Would you like your password to contain lowercase letters?");
      valueToUse = lowerCase[Math.floor(Math.random() * lowerCase.length)];
      
  }
  
    
    // confirm("Would you like your password to contain uppercase letters?");
    // confirm("Would you like your password to contain numbers?");
    // confirm("Would you like your password to contain special characters?");

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);