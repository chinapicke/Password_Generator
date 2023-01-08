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


let randomArray = []

// Function to prompt user for password options
// Pop up page for user to confirm what kind of characters they would like in their password 
function getPasswordOptions() {
  let askNumbers = confirm("Would you like your password to contain numbers?")
  let askUpper = confirm("Would you like your password to contain uppercase letters?")
  let askLower = confirm("Would you like your password to contain lowercase letters?")
  let askSpecial = confirm("Would you like your password to contain special characters?")

  // If statement to be used if no characters have been selected
  if (askNumbers !== true && askUpper !== true && askLower !== true && askSpecial !== true){
    alert("You need your password to have atleast one type of character. Refresh the page to start again")
  }
// Conditional statments to see if characters have been selected
// Pushed characters into an array that can be picked from if selected
// Used concat to merge the arrays, without it, it does not return the correct characters selected by the user 
  if (askNumbers === true){
    randomArray = randomArray.concat(numericCharacters)
  }
  if (askUpper === true){
    randomArray = randomArray.concat(upperCasedCharacters)
  }
  if (askLower === true){
    randomArray = randomArray.concat(lowerCasedCharacters)
  }
  if (askSpecial === true){
    randomArray = randomArray.concat(specialCharacters)
  }  
  
  // if (askNumbers === true){
  //   randomArray += numericCharacters
  // }
  // if (askUpper === true){
  //   randomArray += upperCasedCharacters
  // }
  // if (askLower === true){
  //   randomArray +=lowerCasedCharacters
  // }
  // if (askSpecial === true){
  //   randomArray += specialCharacters
  // }
// Checking to ensure that when selected characters, it returns this into randomArray
  // console.log(randomArray)
}



// Prompt user for password length
let passwordLength = prompt("Please select a number between 10 and 64 for your chosen password length")
// Use if conditional statement to ensure password is between 10 to 64
if (passwordLength >=10 && passwordLength <= 64){
  getPasswordOptions()
}
else{
  alert("You have input an incorrect number, please try again")
}

// if all characters is true, then we need to put it into the password, whilst using for loop to execute user password length selected


// Didn't use this function as did not think I would need to 
// Function for getting a random element from an array
// function getRandom(arr) {
// }

// Function to generate password with user input
function generatePassword() {
  // Empty string variable to be used when length from passwordLength is looped with the characters within randomArray
  let passwordRandom=""
  // Uses password length selected by user
  for (let i=0; i < passwordLength; i++){
    // Need to use randomArray outside () which randomise the characters number placing in randomArray, otherwise the code returns undefined 
    passwordRandom += randomArray[Math.floor(Math.random() * randomArray.length)]
  }
  console.log(passwordRandom)
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