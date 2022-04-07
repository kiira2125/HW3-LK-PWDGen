// Assignment my chars codes for specialChars, nums, lower/upper case//
const specialCharacters = [!,@,#,

];

const numCharacters = [1,2,3,,4,5,6,7,8,9,0];

const lowerCharacters = [ 
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z

];

const upperCharacters = [
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z

];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password === undefined){
    return;
  }
  passwordText.value = password;

 // creating an array that will contain pssible characters for the pwd gen//

// make it randaomly select indexs form the array and create a string what will bew gen pwd//

// make it return the created pwd string //

function generatePassword(){
var selectedOptions = getUserSelection()

if(selectedOptions === undefined)
return;
}
 

//* Ask the user for all the characteristics of the password//
var {lenght, lowercase, upppercase, shecialChars, numbers} = selectedOptions
var possibleCharacters = [];
var generatePassword = ""'

// lowercase letter//
if (lowercase){
possibleCharacters = possibleCharacters.concat(lowerCaseCharacters)
}

if (upplercase){
possibleCharacters = possibleCharacters.concat(upperCaseCharacters)
}
//* It should return all the secetions as an object to user//

function generatePassword(){

}

//add event listener to PWD GEN Button//
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  /*setTimeout(function(){
    passwordText.value="..Removing your generated password for security purpose";
  setTimeout(function (){
    passwordText.value="Your are welcome O_o";
  setTimeout(function(){
    passwordText.value=""
  },2000)
  },3500)
  },15000)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
