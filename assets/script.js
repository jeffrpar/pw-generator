// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// begins when user clicks #generate button due to event listener
function writePassword() {
  // Output of the generatePassword function gets stored in the password variable
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // Push the password variable to the #password field of the screen
  passwordText.value = password;
}

function generatePassword() {
  // arrays to pull password selections from
  var lowercase = "qwertyuiopasdfghjklzxcvbnm";
  var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var numbers = "1234567890";
  var special = "!@#$%^&*()";
  var userSelected = "";
  var newPassword = "";
  // start with a prompt to ask for desired length
  var passwordLength = prompt("How long do you want your password to be? (8-128 characters)");
  if (passwordLength === null) { // user clicked "cancel" button
    return; // end function
  }
  // makes passwordLength an integer
  passwordLength = parseInt(passwordLength);
  // The NaN global property is a value representing Not-A-Number. Check if value entered is NaN, below 8, or above 128.
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    // display alert if what's entered is unacceptable
    alert("Please enter a valid password length between 8 and 128 characters.");
    // end function
    return;
  }
  // Follow up prompts for character types to use
  var useLowercase = confirm("Do you want to include lowercase letters?");
  var useUppercase = confirm("Do you want to include uppercase letters?");
  var useNumbers = confirm("Do you want to include numbers?");
  var useSpecial = confirm("Do you want to include special characters?");

  // if user selects character types, concatenate them to an array
  if (useLowercase === true) {
    userSelected += lowercase;
  }
  if (useUppercase === true) {
    userSelected += uppercase;
  }
  if (useNumbers === true) {
    userSelected += numbers;
  }
  if (useSpecial === true) {
    userSelected += special;
  }
  // if no characters selected, display alert
  if (!useLowercase && !useUppercase && !useNumbers && !useSpecial) {
    alert("Please select at least one character type.");
  }
  // for loop to pick a random value from userSelected, store in newPassword, repeat up to user desired length
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * userSelected.length);
    var randomCharacter = userSelected[randomNumber];
    newPassword += randomCharacter;
  }
  // generatePassword function will output newPassword
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);