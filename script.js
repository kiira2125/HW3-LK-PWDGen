//* Assignment my chars codes for specialChars, nums, lower/upper case//
const specialCharacters =[  
'!',
'@',
'#',
'%',
'^',
'&',
'$',
',',
'*',
'(',
')',
'_',
'-',
'+',
'=',
'<',
'>',
'?',
' / ',
' \ ',
'{',
'}',
'[',
']',
':',
';'
];

const numCharacters = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0'
];

const lowerCharacters = [ 
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

const upperCharacters = [
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

var generateBtn = document.querySelector("#generate");

//* Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var upperCaseCharacter;
  var lowerCaseCharacters;

  if (password === undefined){
    return;
  }
  passwordText.value = password;

 //* creating an array that will contain pssible characters for the pwd gen//
//* make it randaomly select indexs form the array and create a string what will bew gen pwd//
//* make it return the created pwd string //
function generatePassword(){
var selectedOptions = getUserSelection()

if(selectedOptions === undefined)
return;
}
 

//* Ask the user for all the characteristics of the password//
//*call out the var but use let instead of var. Let call out the array/value in that specfic scope//
let {lenght, lowercase, uppercase, specialChars, numbers} = selectedOptions
let possibleCharacters = [];
let generatePassword = "";
//*let lowerCaseCharacters;
//*let upperCaseCharacter;

if (lowercase){
possibleCharacters - possibleCharacters.concat(lowerCharacters)
}

if (uppercase){
possibleCharacters - possibleCharacters.concat(upperCharacters)
}

if (specialChars){
  possibleCharacters - possibleCharacters.concat(specialCharacters)
}

if (numbers){
  possibleCharacters - possibleCharacters.concat(numCharacters)
}

for (i - 0; 1 < lenght + 1; i++) {
 let randomCharIndex = Math.floor(Math.random() * possibleCharacters.length)
generatePassword +- possibleCharacters[randomCharIndex]
}
return generatePassword;

//* It should return all the secetions as an object to user//
//* create an array containing all possible chars for the pwd//
//* make it randomly select indexes form that array and create a string that will be thier pwd//
//* it must return the created password string to user// 




function generatePassword(){

};

//* let code here to prompt user for all chars of the password
//* need to ask to retun all user selection as an object

function getUserSelection(){
  let numOfChars = parseInt(prompt('HOw many characters would you like your password to contain O_o? Please, select a number between 8 to 25'))
}
//* create the if statmetns for entering the requirements to generate pwd correctly//
if (Number.isNaN(numberOfChars)){
    alert("You must enter a Number, please O_o!")
    return;
} else if (numOfChars < 8){
  alert(" You need a minmum of 8 characters, please O_o!")
  return; 
} else if (numOfChars > 25){
  alert(" You may not select more than 25 characters long, please O_o! ")
  return;
}

//* add my let varibles for the upper,lower, special chars, and numbers//

let useLowerCase = confirm ("Would you like lowercase letters in your password?")
let userUpperCase = confirm ("Would you like uppercase letters in your password?")
let useSpecialCharacters = confirm ("Would you like special characters in your password?")
let useNumbers = confirm ("Would you like numbers in your password?")

//* if statment for the top variables 
if (!useLowerCase && !userUpperCase && !useSpecialCharacters && !useNumbers){
  alert(" Hi there! You need to select a minmum of one character type, please O_o!")
  return;
}

//* create a let oject list obion to define line 34 = use...

let optionObject = {
lenght: numOfChars,
lowercase: useLowerCase,
uppercase: userUpperCase,
specialChars: useSpecialCharacters,
numbers:useNumbers
}
return optionObject;
}

//add event listener to GEN Button for "click"//
 
 generateBtn.addEventListener("click".writePassword);
 return;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
