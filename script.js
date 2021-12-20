// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//set constants for the different character types
const useNum = '0123456789';
const useLow = 'abcdefghijklmnopqrstuvwxyz';
const useUp =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const useSpec = '!@#$%^&*();:.,<>';

// create our generatePassword function to prompt the user to input acceptance criteria for the password

function generatePassword() {
  let userPass = '';
  let passLength = prompt("Please select a value between 8 and 128 for your password length")
  //if user hits cancel fuction ends
  if (!passLength) {
    return
  }

  //make sure the length chosen is within 8 and 128
  if (passLength < 8 || passLength > 128) {
  return alert("Please select a value between 8 and 128")
}

//once we know the user has selected an acceptable number, now we can get them to select their acceptance criteria
//check for numbers
let numbs = confirm('Click ok if you would like to use numbers, cancel if not')
  if (numbs) {
    userPass = userPass.concat(useNum)
  }
//check for special characters
let special = confirm('Click ok if you would like to use special characters, cancel if not')
  if (special) {
    userPass = userPass.concat(useSpec)
  }
//check for lower case letters
let lowerCase = confirm('Click ok if you would like to use lower case letters, cancel if not')
  if (lowerCase) {
    userPass = userPass.concat(useLow)
  }  
 //check for upper case letters
 let upperCase = confirm('Click ok if you would like to use upper case letters, cancel if not')
 if (upperCase) {
   userPass = userPass.concat(useUp)
 } 


 //make sure the user has selected to use atleast one character type, if not return to start
 if (numbs === false && special === false && lowerCase === false && upperCase === false) {
   return alert('You must select atleast one character type to include in your password, try again')
 }

 //loop to generate random selection of character based on the password length chosen by the user.
 //This will kepe looping until mainPassword legnth = userPass length
 var mainPassword = "";
 for (var n = 0; n < passLength; n++ ) {
   mainPassword += userPass.charAt(Math.floor(Math.random() * userPass.length));
 }
 return mainPassword;
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
