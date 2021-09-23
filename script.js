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
  var arr = [];
  //prompt user for lowercase characters
  while(true)
  {
    var ans = window.prompt("Do you want lowercase characters? (yes/no)", "yes").toLowerCase();
    if(ans=="yes")
    {
      arr.push(lowercase.split(''));
      break;
    }
    else if(ans == "no")
      break;
    else
      window.alert("Invalid input! Try again.");
  }
  //prompt user for uppercase characters
 
  while(true)
  {
    var ans = window.prompt("Do you want uppercase characters? (yes/no)", "yes").toLowerCase();
    if(ans=="yes")
    {
      arr.push(uppercase.split(''));
      break;
    }
    else if(ans == "no")
      break;
    else
      window.alert("Invalid input! Try again.");
  }
  //prompt user for numeric characters
 
  while(true)
  {
    var ans = window.prompt("Do you want numeric characters? (yes/no)", "yes").toLowerCase();
    if(ans=="yes")
    {
      arr.push(numbers.split(''));
      break;
    }
    else if(ans== "no")
      break;
    else
      window.alert("Invalid input! Try again.");
  }
  //prompt user for special characters  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

  while(true)
  {
    var ans = window.prompt("Do you want special characters? (yes/no)", "yes").toLowerCase();
    if(ans=="yes")
    {
      arr.push(specialChars.split(''));
      break;
    }
    else if(ans== "no")
      break;
    else
      window.alert("Invalid input! Try again.");
  }
  if(arr.length == 0)
  {
    window.alert("You didn't choose any option... Please refill the form again.");
    return generatePassword();
  }

  //creating the password
  for(var i = 0; i<arr.length; i++)
    console.log(arr[i]);
  var pwd = "";
  for(var i = 0; i<length; i++)
  {
    var ind = Math.floor(Math.random()*arr.length);
    var secInd = Math.floor(Math.random()*arr[ind].length);
    pwd+= arr[ind][secInd];
  }
  return pwd;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
