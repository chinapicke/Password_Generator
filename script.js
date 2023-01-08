// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Created empty array to put the characters selected into 
let randomArray = []

// Function to prompt user for password options
// Pop up page for user to confirm what kind of characters they would like in their password 
function getPasswordOptions() {
  let askNumbers = confirm("Would you like your password to contain numbers? Please select confirm if yes.")
  let askUpper = confirm("Would you like your password to contain uppercase letters? Please select confirm if yes.")
  let askLower = confirm("Would you like your password to contain lowercase letters? Please select confirm if yes.")
  let askSpecial = confirm("Would you like your password to contain special characters? Please select confirm if yes.")

  // If statement to be used if no characters have been selected
  if (askNumbers !== true && askUpper !== true && askLower !== true && askSpecial !== true) {
    alert("You need your password to have atleast one type of character. Refresh the page to start again")
  }
  // Conditional statments to see if characters have been selected
  // Pushed characters into an array that can be picked from if selected
  // Used concat to merge the arrays, without it, it does not return the correct characters selected by the user 
  if (askNumbers === true) {
    randomArray = randomArray.concat(numericCharacters)
  }
  if (askUpper === true) {
    randomArray = randomArray.concat(upperCasedCharacters)
  }
  if (askLower === true) {
    randomArray = randomArray.concat(lowerCasedCharacters)
  }
  if (askSpecial === true) {
    randomArray = randomArray.concat(specialCharacters)
  }

  // Checking to ensure that when selected characters, it returns this into randomArray
  // console.log(randomArray)
}



// Prompt user for password length
let passwordLength = prompt("Please select a number between 10 and 64 for your chosen password length")
// Use if conditional statement to ensure password is between 10 to 64
if (passwordLength >= 10 && passwordLength <= 64) {
  getPasswordOptions()
}
else {
  alert("You have input an incorrect numerical number, please try again")
}


// Didn't use this function as did not think I would need to 
// Function for getting a random element from an array
// function getRandom(arr) {
// }

// Function to generate password with user input
function generatePassword() {
  // Empty string variable to be used when length from passwordLength is looped with the characters within randomArray
  // Need to assign empty variable with "" otherwise it returns the characters and undefined attached to it 
  let passwordRandom =""
  // Uses password length selected by user
  for (let i = 0; i < passwordLength; i++) {
    // Need to use randomArray outside () which randomise the characters number placing in randomArray, otherwise the code returns undefined 
    passwordRandom += randomArray[Math.floor(Math.random() * randomArray.length)]
  }
  // Used console log to ensure that a password was being printed out, console log can also be where users can find previous generate password with their same criteria if they have not refreshed the page
  console.log(passwordRandom)
  // Return used so that generatepassword can be put in the box on the page, also means that this is the end of the function 
  return passwordRandom
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);