// // Assignment Code
var generateBtn = document.querySelector("#generate");




// // Write password to the #password input
function writePassword() {

  // First prompt - Length of Password
   var passwordLength = prompt("How long would you like your password to be?", "(select between 8-128 characters)");
    if (passwordLength < 8) {
        alert("Not enough characters: Please enter a number between 8 and 128.");
        writePassword();

    } else if (passwordLength > 128) {
        alert("Too many characters: Please enter a number between 8 and 128.");
        writePassword();
    }


  // First condition - lowercase letters
    var lowerCase = confirm("Would you like your password to contain lowercase letters?");
      
        
    
    // Second condition - uppercase letters
    var upperCase = confirm("Would you like your password to contain uppercase letters?");
    
       
    // Third condition - numbers
    var numbers = confirm("Would you like your password to contain numbers?");
    
     

    // Fourth condition - Special characters
    var spChar = confirm("Would you like your password to contain special characters?");


     

    var characters = [];
        
  

    var conditions = new Array ();
    conditions[0] = new Array (lowerCase, ['abcdefghijklmnopqrstuvwxyz']);
    conditions[1] = new Array (upperCase, ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']);
    conditions[2] = new Array (numbers, ["0123456789"]);
    conditions[3] = new Array (spChar, ["~`!@#$%^&*_-+={[}]|:;"]);

    for (var i = 0; i < conditions.length; i++)
  
      if (conditions[i][0] === true) {

       
        characters.push(conditions[i][1] + []);
        
      }
      

        
 var newCharacters = (characters.join(''));
 
    function generatePassword(length) {
          let result = " ";
          const charactersLength = newCharacters.length;
          for ( let i = 0; i < length; i++ ) {
            result += newCharacters.charAt(Math.floor(Math.random() * charactersLength));
          }
          
          alert("This is your new password " + result );
         return result;{
    
    
    
        }}
          
        generatePassword(passwordLength);


// }










}






  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  
    
// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword); 