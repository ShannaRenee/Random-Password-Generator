// // Assignment Code
var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
function writePassword() {

  // Part 1 - preferences selected by user
    //Input validations
   var passwordLength = prompt("How long would you like your password to be?", "(select between 8-128 characters)"); {
   if (passwordLength === null) {
    return;

   } else if (passwordLength < 8) {
        alert("Not enough characters: Please enter a number between 8 and 128."); 
        writePassword();
        return;

    } else if (passwordLength > 128) {
        alert("Too many characters: Please enter a number between 8 and 128.");
        writePassword();
        return;

    } else if (passwordLength === "(select between 8-128 characters)") {
        alert("Oops! You didn't type anything.\nPlease try again.");
        writePassword();
        return;

    } else if (isNaN(passwordLength)) {
        alert("That's not a number. \nPlease try again.");
        writePassword();
        return;
    }
    runConfirms();
  }
  


function runConfirms() {
var lowerCase = confirm("Would you like your password to contain lowercase letters?");
      
  
var upperCase = confirm("Would you like your password to contain uppercase letters?");
    
    
var numbers = confirm("Would you like your password to contain numbers?");
    
    
var spChar = confirm("Would you like your password to contain special characters?");

     
// Part 2 - Selected arrays will be joined together
var characters = [];

      
var conditions = new Array ();
conditions[0] = new Array (lowerCase, ['abcdefghijklmnopqrstuvwxyz']);
conditions[1] = new Array (upperCase, ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']);
conditions[2] = new Array (numbers, ["0123456789"]);
conditions[3] = new Array (spChar, ["~`!@#$%^&*_-+={[}]|:;"]);


  for (var i = 0; i < conditions.length; i++)

  if (conditions[i][0] === true) {
       characters.push(conditions[i][1] + []);
     } else if (characters.length === 0) {
      alert("Please select 'ok' for at least one parameter.");
      runConfirms();
      return;
     }
    


//Part 3 - New array is randomly selected from to create password
var newCharacters = (characters.join(''));
 
function passwordGen(length) {
    let password = " ";
    const charactersLength = newCharacters.length;
    for ( let i = 0; i < length; i++ ) {
      password += newCharacters.charAt(Math.floor(Math.random() * charactersLength));
    }
          
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

  passwordGen(passwordLength);
}}
    
  
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword); 