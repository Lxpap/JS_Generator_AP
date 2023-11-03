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

var generate = document.getElementById("generate");
var passwordLength;
var password = '';
var passwordCharacters = [];


// Function to prompt user for password options

function getPasswordOptions() {
  var input = prompt("Please enter a password length between 8 and 128 characters");

  if (!input) {
    alert("Password length cannot be empty.");
    return;
  }

  passwordLength = parseInt(input);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Length must be a valid number between 8 and 128 characters.");
    return;
  }


  var useLowerCase = confirm("Would you like to include lowercase characters?");
  var useUpperCase = confirm("Would you like to include uppercase characters?");
  var useNumbers = confirm("Would you like to include numbers?");
  var useSpecial = confirm("And finally, would you like to include special characters?");

  if (!(useLowerCase || useUpperCase || useNumbers || useSpecial)) {
    alert("Please select a minimum of one character type.");
    return;
  }

  
  if (useLowerCase) {
    passwordCharacters.push(...lowerCasedCharacters);
  }

  if (useUpperCase) {
    passwordCharacters.push(...upperCasedCharacters);
  }

  if (useNumbers) {
    passwordCharacters.push(...numericCharacters);
  }

  if (useSpecial) {
    passwordCharacters.push(...specialCharacters);
  }

  generatePassword();

}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];

}

// Function to generate password with user input
function generatePassword() {
  password = '';
  for (i = 0; i < passwordLength; i++) {
    password += getRandom(passwordCharacters);
 }
   return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  passwordText.textContent = password; 
  document.getElementById("password").value = password;
   
}

// Add event listener to generate button
generateBtn.addEventListener('click', function() {
writePassword();
});


