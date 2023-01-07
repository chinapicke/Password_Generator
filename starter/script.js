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

// Create function to find random contents of numbers
function randomNumber() {
  return numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
}
// Create function to find random contents of uppercase
function randomUpper() {
  return upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)]
}
// Create function to find random contents of numbers
function randomLower() {
  return lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)]
}
// Create function to find random contents of numbers
function randomSpecial() {
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
}
// Console log to check that it is randomising each of the characters with the function
// console.log("Random number:" + randomNumber())
// console.log("Random upper:" + randomUpper())
// console.log("Random lower:" + randomLower())
// console.log("Random special:" + randomSpecial())

// Prompt user for password length
var passwordLength = prompt("Please select a number between 10 and 64 for your chosen password length")
console.log(passwordLength)
if (passwordLength >=10 && passwordLength <= 64){
  // confirm(getPasswordOptions())
}
else(
  alert("You have input an incorrect number, please try again")
)





// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

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