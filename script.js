//set global variables to false so its not used in our check password
//function unless they are selected by the user
var numbs = false;
var special = false;
var lowerCase = false;
var upperCase = false;
//set constants for the different character types
const useNum = '0123456789';
const useLow = 'abcdefghijklmnopqrstuvwxyz';
const useUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const useSpec = '!@#$%^&*();:.,<>';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function for confirmations from the user
//function userConfirm (x,y) {
//let x = confirm ('Click ok if you would like to use' + "x" + 'cancel if not')
//if (x) {
//allPossibleChars = allPossibleChars.concat(y)
//}
//return;
//}
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
    allPossibleChars = allPossibleChars.concat(useNum)
  }

  //check for special characters
  let special = confirm('Click ok if you would like to use special characters, cancel if not')
  if (special) {
    allPossibleChars = allPossibleChars.concat(useSpec)
  }
  //check for lower case letters
  let lowerCase = confirm('Click ok if you would like to use lower case letters, cancel if not')
  if (lowerCase) {
    allPossibleChars = allPossibleChars.concat(useLow)
  }
  //check for upper case letters
  let upperCase = confirm('Click ok if you would like to use upper case letters, cancel if not')
  if (upperCase) {
    allPossibleChars = allPossibleChars.concat(useUp)
  }


  //make sure the user has selected to use atleast one character type, if not return to start
  if (numbs === false && special === false && lowerCase === false && upperCase === false) {
    return alert('You must select atleast one character type to include in your password, try again')
  }
 
  var notValid = true;
  var validPassword = "";
  while (notValid){
    let pass = generatePossible(passLength,allPossibleChars);
    let valid = checkPasswordValid(pass);
    if (valid){
      notValid = false;
      validPassword = pass;
    }
  }
return validPassword;
}
// function to loop to generate random selection of character based on the password length chosen by the user.
//This will kepe looping until mainPassword legnth = allPossibleChars length
function generatePossible(userLength,concatString) {
  var mainPassword = "";
  for (var n = 0; n < userLength; n++) {
    mainPassword += concatString.charAt(Math.floor(Math.random() * concatString.length));
  }
  return mainPassword;
}

// function to check if our password is valid and contains all the character sets
// that the user has elected to contain
function checkPasswordValid(passToCheck) {
if (numbs = true) {
  let check1 = commonChar(numbs,passToCheck);
  if (check1 === true) 
    return true;
    else {
      return false;
    }
}
if (special = true) {
  let check2 = commonChar(special,passToCheck)
  if (check2 === true) 
    return true;
    else {
      return false;
    }
}
if (upperCase = true) {
  let check3 = commonChar(upperCase,passToCheck)
  if (check3 === true) 
    return true;
    else {
      return false;
    }
}
if (lowerCase = true) {
  let check4 = commonChar(lowerCase,passToCheck)
  if (check4 === true) 
    return true;
    else {
      return false;
    }
}
}


//function to check if two strings have common characters
function commonChar(left, right) {
  var left_map = {};
  var right_map = {};
  var index = 0;

  while (index < left.length || index < right.length) {

    // Check left array
    if (index < left.length) {
      var c = left[index];

      left_map[c] = true;

      // Check if it exists in the other map
      if (right_map[c]) {
        return true;
      }
    }    

    // Check right array
    if (index < right.length) {
      var c = right[index];

      right_map[c] = true;

      // Check if it exists in the other map
      if (left_map[c]) {
        return true;
      }
    }

   index++;
  }

  return false;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
