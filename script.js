//set global variables to false so its not used in our check password
//function unless they are selected by the user
var numbs = false;
var special = false;
var lowerCase = false;
var upperCase = false;

//set constants for the different character types
const NUM_CHAR = '0123456789';
const LOWERCASE_CHAR = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SPECIAL_CHAR = '!@#$%^&*();:.,<>';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// create our generatePassword function to prompt the user to input acceptance criteria for the password
function generatePassword() {
  let allPossibleChars = "";
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
  //check if the user wants numbers
  numbs = confirm('Click ok if you would like to use numbers, cancel if not')
  if (numbs) {
    allPossibleChars = allPossibleChars.concat(NUM_CHAR)
  }

  //check if the user wants special characters
  special = confirm('Click ok if you would like to use special characters, cancel if not')
  if (special) {
    allPossibleChars = allPossibleChars.concat(SPECIAL_CHAR)
  }

  //check if the user wants lower case letters
  lowerCase = confirm('Click ok if you would like to use lower case letters, cancel if not')
  if (lowerCase) {
    allPossibleChars = allPossibleChars.concat(LOWERCASE_CHAR)
  }

  //check if the user wants upper case letters
  upperCase = confirm('Click ok if you would like to use upper case letters, cancel if not')
  if (upperCase) {
    allPossibleChars = allPossibleChars.concat(UPPERCASE_CHAR)
  }

  //make sure the user has selected to use atleast one character type, if not return to start
  if (numbs === false && special === false && lowerCase === false && upperCase === false) {
    return alert('You must select atleast one character type to include in your password, try again')
  }
//once we have the users wanted character sets, we must create 2 functions, one to generate a random
//password with those character sets which are now in a string, the other to check that the charsets that
// the user has requested are all included if theyre not all included we try again to make another password 
//and the while loop will continue, until the password is valid, and all user requested charsets are included :)
  var notValid = true;
  var validPassword = "";
  while (notValid) {
    let pass = generatePossible(passLength, allPossibleChars);
    let valid = checkPasswordValid(pass);
    if (valid) {
      notValid = false;
      validPassword = pass;
    }
  }
  return validPassword;
}
// function to loop to generate random selection of character based on the password length chosen by the user.
//This will kepe looping until possiblePassword legnth = allPossibleChars length
function generatePossible(userLength, concatString) {
  var possiblePassword = "";
  for (var n = 0; n < userLength; n++) {
    possiblePassword += concatString.charAt(Math.floor(Math.random() * concatString.length));
  }
  return possiblePassword;
}
// function to check if our password is valid and contains all the character sets
// that the user has elected to contain
//if any of the checks return a false value the function will return a false value which will make the while 
//loop in line 72 loop back around to create another possible password to pass back into this function
function checkPasswordValid(passToCheck) {
  console.log(passToCheck + " check if this password is valid");
  if (numbs) {
    let check1 = commonChar(NUM_CHAR, passToCheck);
    console.log("check for numbers " + check1);
    if (!check1) {
      return false;
    }
  }
  if (special) {
    let check2 = commonChar(SPECIAL_CHAR, passToCheck);
    console.log("check for special characters " + check2);
    if (!check2) {
      return false;
    }
  }
  if (upperCase) {
    let check3 = commonChar(UPPERCASE_CHAR, passToCheck);
    console.log("check for uppercase " + check3);
    if (!check3) {
      return false;
    }
  }
  if (lowerCase) {
    let check4 = commonChar(LOWERCASE_CHAR, passToCheck);
    console.log("check for lower case " + check4);
    if (!check4) {
      return false;
    }

  }
  return true;
}
//function to check if two strings have common characters
function commonChar(charSetString, passwordToTest) {

  for (let i = 0; i < passwordToTest.length; i++) {
    if (charSetString.includes(passwordToTest[i])) {
      return true;
    }
  }
  return false;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
