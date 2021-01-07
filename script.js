// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Generator Function 
funtion generatePassword() {

  //window alert informing the users about the password criteria
  window.alert("Select the password character type(s) you should include.\n (lower & upper case letters, numbers, and special characters");

  //dialog boxes that comfirms the users criteria selection

  var upCase = confirm("Do you want to include upper case letters? \n A-Z");
  var lowCase = confirm("Do you want to include lower case letters? \n a-z");
  var num = confirm("Do you want to include numbers? \n 0-9");
  var spec = confirm("Do you want to include special characters? \n !@#$%^&*()-_=+,./<>?[]{}`~");

  //store the user selection

  var userChoices = upCase + lowCase + num + spec;
  console.log("Number of user choices selected: "+ userChoices);

  if (userChoices === 0){
    return alert("You have to pick at least ONE charactor type.");

  }
  console.log("Upper Case Letters: " + upCase);
  console.log("Lower Case Letters: " + lowCase);
  console.log("Numbers: " + num);
  console.log("Special Charactors: " + spec);

  //ask users for the desired password string length

  var passLenght = prompt("How many charactors do you want your password to be? \n Password must have a lenght between 8-128");

  if(passLenght === null){
    return;
  }
  

}