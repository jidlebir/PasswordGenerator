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

//random functions
var ranGen = {
  upCase: getUpperCase,
  lowCase: getLowerCase,
  num: getNumber,
  spec: getSpecialChar
};

//Generator Function 
function generatePassword(){

  //window alert informing the users about the password criteria
  alert("Select the password character type(s) you should include.\n (lower & upper case letters, numbers, and special characters");

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

  var passLength = prompt("How many charactors do you want your password to be? \n Password must have a lenght between 8-128");

  if(passLength === null){
    return;
  }
  
  //password length
  while (passLength <8 || passLength > 128 || passLength ===""){
    alert("Please input a number between 8-128.");
    var passLength = prompt("How many characters do you want your password to be?\n Please enter a number from 8-128");
    
    //if users cancel's
    if(passLength === null){
      return;
    }
  }

  console.log("Password Length: " + passLength + " characters" );

  //create password

  var generatedPassword ="";

  var passArray =[
    { upCase },
    { lowCase },
    { num },
    { spec }
  ].filter((item) => Object.values(item) [0]);

  for (let i = 0; i < passLength; i += userChoices){
    passArray.forEach((type) => {
      var funcName = Object.keys(type) [0];
      generatedPassword += ranGen[funcName]();
    });
  }
  console.log("User's new Password is " + generatedPassword);

  const password = generatedPassword.slice(0, passLength);

  return password;
}

  //random character Generaters
  function getUpperCase(){
    const upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upCase[Math.floor(Math.random() * upCase.length)];
  }
  function getLowerCase(){
    const lowCase = "abcdefghijklmnopqrstuvwxyz";
    return lowCase[Math.floor(Math.random() * lowCase.length)];
  }
  function getNumber(){
    const num = "0123456789";
    return num[Math.floor(Math.random() * num.length)];
  }
  function getSpecialChar(){
    const spec = "!@#$%^&*()-_=+,./<>?[]{}`~";
    return spec[Math.floor(Math.random() * spec.length)];
  }

