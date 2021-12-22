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
  //check for numbers
  let numbs = confirm('Click ok if you would like to use numbers, cancel if not')
  if (numbs) {
    allPossibleChars = allPossibleChars.concat(NUM_CHAR)
  }

  //check for special characters
  let special = confirm('Click ok if you would like to use special characters, cancel if not')
  if (special) {
    allPossibleChars = allPossibleChars.concat(SPECIAL_CHAR)
  }
  //check for lower case letters
  let lowerCase = confirm('Click ok if you would like to use lower case letters, cancel if not')
  if (lowerCase) {
    allPossibleChars = allPossibleChars.concat(LOWERCASE_CHAR)
  }
  //check for upper case letters
  let upperCase = confirm('Click ok if you would like to use upper case letters, cancel if not')
  if (upperCase) {
    allPossibleChars = allPossibleChars.concat(UPPERCASE_CHAR)
  }


  //make sure the user has selected to use atleast one character type, if not return to start
  if (numbs === false && special === false && lowerCase === false && upperCase === false) {
    return alert('You must select atleast one character type to include in your password, try again')
  }

  var notValid = true;
  var validPassword = "";
  while (notValid) {
    let pass = generatePossible(passLength, allPossibleChars);
    let valid = checkPasswordValid(pass);
    console.log(pass + " password");
    console.log(valid + " if valid");
    if (valid) {
      notValid = false;
      validPassword = pass;
    }
  }
  return validPassword;
}
// function to loop to generate random selection of character based on the password length chosen by the user.
//This will kepe looping until mainPassword legnth = allPossibleChars length
function generatePossible(userLength, concatString) {
  var mainPassword = "";
  for (var n = 0; n < userLength; n++) {
    mainPassword += concatString.charAt(Math.floor(Math.random() * concatString.length));
  }
  return mainPassword;
}

// function to check if our password is valid and contains all the character sets
// that the user has elected to contain
function checkPasswordValid(passToCheck) {
  console.log(passToCheck + ": check password valid");
  if (numbs) {
    let check1 = commonChar(NUM_CHAR, passToCheck);
    if (!check1) {
      return false;
    }
  }
  if (special) {
    let check2 = commonChar(SPECIAL_CHAR, passToCheck);
    if (!check2) {
      return false;
    }
  }
  if (upperCase) {
    let check3 = commonChar(UPPERCASE_CHAR, passToCheck);
    if (!check3) {
      return false;
    }
  }
  if (lowerCase) {
    let check4 = commonChar(LOWERCASE_CHAR, passToCheck);
    if (!check4) {
      return false;
    }

  }
  return true;
}

//function to check if two strings have common characters
function commonChar(left, right) {
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
