// Assignment Code
var generateBtn = document.querySelector("#generate");

//make strings of lowercase, uppercase, numeric, special chars
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";

/**
 * Certainly not the most optimal code, but it is readable in the sense that each section is split up, more strictly defined data types/variables
 * @returns generated password
 */
function generatePassword() // added function
{
  var length = -1;
  //prompt user for length of password (must be at least 8 characters and less than 128 characters)
  while(true)
  {
    length = parseInt(window.prompt("Enter length of password (min: 8 characters max: 128):","8"));
    if(!isNaN(length))
      if(length>=8 && length<=128)
        break;
      else
        window.alert("must fit within 8 to 128 characters!");
    else
      window.alert("Invalid input! Try again.");
  }
  //prompt user for lowercase characters
  var low = false;
  while(true)
  {
    var ans = window.prompt("Do you want lowercase characters? (yes/no)", "yes").toLowerCase();
    if(ans=="yes")
    {
      low = true;
      break;
    }
    else if(ans == "no")
      break;
    else
      window.alert("Invalid input! Try again.");
  }
  //prompt user for uppercase characters
  var up = false;
  while(true)
  {
    var ans = window.prompt("Do you want uppercase characters? (yes/no)", "yes").toLowerCase();
    if(ans=="yes")
    {
      up = true;
      break;
    }
    else if(ans == "no")
      break;
    else
      window.alert("Invalid input! Try again.");
  }
  //prompt user for numeric characters
  var num = false;
  while(true)
  {
    var ans = window.prompt("Do you want numeric characters? (yes/no)", "yes").toLowerCase();
    if(ans=="yes")
    {
      num = true;
      break;
    }
    else if(ans== "no")
      break;
    else
      window.alert("Invalid input! Try again.");
  }
  //prompt user for special characters  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  var spec = false;
  while(true)
  {
    var ans = window.prompt("Do you want special characters? (yes/no)", "yes").toLowerCase();
    if(ans=="yes")
    {
      spec = true;
      break;
    }
    else if(ans== "no")
      break;
    else
      window.alert("Invalid input! Try again.");
  }


  return length;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
