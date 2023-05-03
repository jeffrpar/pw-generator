// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// begins when user clicks #generate button due to event listener
function writePassword() {
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
    // call the function again
    writePassword();
    // end function
    return;
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
