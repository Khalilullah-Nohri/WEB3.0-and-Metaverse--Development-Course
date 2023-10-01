// *************************************Chapter 01******************************************

// Q#1
alert("Khalilullah")
alert("Nohri")
alert("khalilnohri666@gmail.com")
alert("03421520614")
alert("password")

// Q#2
alert("You're learning JavaScript!");

// Q#3
alert("any message you like");


// *************************************Chapter 02******************************************

// Q#1
let anyVaraible;

// Q#2
let any;
any = "Your choice string"

// Q#3
let teamName = "Cracker"
alert(teamName)

// Q#4
let bestMan = "Charlie";
bestMan = "newString"


// *************************************Chapter 01******************************************

// Q#1
let caseQty;

// Q#2
caseQty = 144

// Q#3
let num9 = 9;

// Q#4
let addition;
addition = 59 + 79

// Q#5
let merchTotal = 100;
let shippingCharge = 10;
let orderTotal = merchTotal + shippingCharge;

// Q#6
let number = 59
number += 79


// *************************************Chapter 04******************************************

// Q#1
let productCost = 3.45;

// Q#2
let nameOfBand;

// Q#3
let legally = 45;

// Q#4
let khalilullahNohri;

// Q#5
// Legal variable names
let myVar = 10;
let user_name = "John";
let _privateVar = true;
let π = 3.14159; // Using a Unicode character (not recommended)

// Illegal variable names
// let 123var = 42; // Starts with a digit
// let my-var = "hello"; // Contains a hyphen
// let if = true; // Reserved word
// let my variable = 5; // Contains a space
// let $vary$ = "test"; // Contains special characters (except underscore)



// *************************************Chapter 05******************************************

// Q#1
// modulus operator is used for calculating reminder

// Q#2
let num_ = 20 % 6 // answer is 2

// Q#3
let largeNum = 1000 * 2000

// Q#4
let diff = 898
let sub = largeNum - diff

// Q#5
let reminder = 898 % 4

// Q#6
alert(59 * 79)


// *************************************Chapter 06******************************************

// Q#1

// Here are the answers to your JavaScript questions: Short form of x = x + 1 using legal expressions:
// ====> x += 1; OR x++;

// Q#2

// Fastest way to reduce x from 100 to 99:
// ====> x--;

// Q#3

// Value of y after let x = 50; let y = x++;:
// The value of y will be 50. The post-increment operator (x++) assigns the current value of x to y and then increments x.

// Q#4

// Value of z after let y = 50; let z = --y;:
// The value of z will be 49. The pre-decrement operator (--y) decrements y first and then assigns the updated value to z.

// Q#5

// Decrement num and assign its original value to newNum:
// newNum = num--;

// Q#6

// Add 1 to a variable and assign its original value to another variable:
// let originalValue = 10;
// let newValue = originalValue++;

// Q#7

// Assign a number value to a variable, increment it, and display the new value in an alert:
let numberValue = 5;
numberValue++; // Increment the variable
alert(numberValue); // Display the new value (6) in an alert


// *************************************Chapter 07******************************************

// Q#1
// let calculatedNum = 2 + (2 * 6);
// The value of calculatedNum is 14.

// Q#2
// let calculatedNum = (2 + 2) * 6;
// The value of calculatedNum is 24.

// Q#3
// let calculatedNum = (2 + 2) * (4 + 2);
// The value of calculatedNum is 24.

// Q#4
// let calculatedNum = ((2 + 2) * 4) + 2;
// The value of calculatedNum is 18.

// Q#5
// Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.
// let cost = (2 + 2) * 4 + 10;

// Q#6
// Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.
// let units = 2 + (2 * 4) + 10;

// Q#7
// Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.
// let pressure = (4 / 2) * 4;



// *************************************Chapter 08******************************************
// Q#1
let num = "2" + "2";
// The value of num is "22" (including the quotation marks).

// Q#2
message = ("Hello," + "Dolly");
// The value of message is "Hello,Dolly" (including the quotation marks).
alert(message);

// Q#3
alert("33" + 3);
// The message displayed in the alert box is "333".

// Q#4
// To display the concatenation of the two parts of "Pakistan Zindabad," you can use:
alert("Pakistan " + "Zindabad");

// Q#5
// To assign the concatenation of a string with a number to a variable, you can use:
let combined = "String" + 42; // Replace "String" with your desired string.

// Q#6
// Here's how you can concatenate two strings and assign the result to a third variable:
let firstString = "Hello";
let secondString = "World";
let combinedString = firstString + secondString;


// *************************************Chapter 09******************************************

// Q#1
// Prompt with the message "Enter first name" and assign the user's response to firstName:
let firstName_ = prompt("Enter first name");

// Q#2
// Prompt with the message "Country?" and the default answer "China," and assign the user's response to country:
let country = prompt("Country?", "China");

// Q#3
// Corrected statement with proper quotation marks:
let yourName = prompt("Enter Your Name");

// Q#4
// Prompt with a string as the message and a default input:
let userInput = prompt("Please enter your input", "Default Value");

// Q#5
// Assign strings to two variables and prompt using those variables as the message and default response. Assign the user's response to a third variable:
let message = "Enter your message";
let defaultResponse = "Default Value";
let userResponse = prompt(message, defaultResponse);

// Q#6
// Display a prompt with both a message and a default response, and then display the user's response in an alert:
let messageWithDefault = prompt("Enter your input:", "Default Value");
alert("You entered: " + messageWithDefault);

// *************************************Chapter 10******************************************

// Q#1
let city_ = "Karachi";

if (city === "Karachi") {
    console.log("The City OF Lights");
}

// Q#2
if (x === y) {
    let z = prompt("Enter the value of z?");
}

// Q#3
let zipCode = "10010";
if (zipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

// Q#4
let x_ = 1;
if (x === 1) {
    x = 2; // Assign a new value to x
}


// *************************************Chapter 11******************************************

// Q#1
if (variable1 !== variable2) {
    // Code to execute if variable1 is not equal to variable2
}

// Q#2
if (value1 >= value2) {
    // Code to execute if value1 is greater than or equal to value2
}

// Q#3
if (variable !== 5) {
    // Code to execute if variable is not equal to 5
}

// Q#4
if (number1 !== number2) {
    alert("Congratulations");
}

// Q#5
let enteredName = prompt("Enter your first name");
let anotherName = "John"; // Replace with the other name you're comparing to

if (enteredName !== anotherName) {
    alert("No match");
}


// *************************************Chapter 12******************************************

// Q#1
let variable1 = 10;
let variable2 = 5;

if (variable1 >= variable2) {
    alert("Variable1 is greater than or equal to Variable2");
} else {
    alert("Variable1 is not greater than or equal to Variable2");
}

// Q#2
let marks = parseFloat(prompt("Enter your marks:"));
let grade;

if (marks >= 90) {
    grade = "A+";
} else if (marks >= 80) {
    grade = "A";
} else if (marks >= 70) {
    grade = "B";
} else if (marks >= 60) {
    grade = "C";
} else {
    grade = "F";
}

alert("Your grade is: " + grade);

// Q#3
if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

// Q#4
let city = prompt("Enter a city:");

if (city === "Karachi") {
    alert("It is Karachi.");
} else if (city === "Lahore") {
    alert("It is Lahore.");
} else {
    alert("It is a different city.");
}

// *************************************Chapter 13******************************************

// Q#1
if (a === b && c === d) {
    // Your code here
}

// Q#2
if (a === b || c !== d) {
    // Your code here
}

// Q#3
if ((name_ === "Hamza" || name_ === "Arsalan") && age < 60) {
    // Your code here
}

// Q#4
let num1_ = 5;
let num2_ = 10;

if (num1 < num2 || num1 > num2) {
    alert("The first variable is either less than or greater than the second variable.");
}

// Q#5
let firstName__ = "YourFirstName";
let lastName = "YourLastName";

let userFirstName = prompt("Enter your first name:");
let userLastName = prompt("Enter your last name:");

if (userFirstName === firstName && userLastName === lastName) {
    alert("Your first and last names match.");
}

// *************************************Chapter 14******************************************

// Q#1
if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
}

// Q#3
if (a === 1 && c === "Max") {
    alert("OK");
}


// Q#4
let num1 = 5;
let num2 = 5;

if (num1 === num2 && num1 <= num2) {
    alert("Conditions met");
} else {
    alert("Conditions not met");
}


// *************************************Chapter 15******************************************
// Q#1
let emptyArray = [];

// Q#2
let stringArray = ["Hello"];

// Q#3
let alphabet_ = ["h", "i", "j", "k", "l", "m", "n", "o"];
alert(alphabet[2]); // This will display "j" in an alert

// Q#4
// let alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
let arrayLength_ = alphabet.length;
alert("The total length of the array is: " + arrayLength);

// Q#5
let myArray = ["First Element"];
myArray[1] = "Second Element";
alert("The new element is: " + myArray[1]);

// *************************************Chapter 16******************************************

// Q#1
let myArray = ["First Element"];
myArray.push("Second Element");
alert("The last element is: " + myArray[myArray.length - 1]);

// Q#2
let Alphabet = ["h", "i", "j", "k"];
Alphabet.pop(); // This removes the last element "k"

// Q#3
// let Alphabet = ["h", "i", "j", "k"];
Alphabet.push(42); // Adds the number 42 to the end of the array

// Q#4
let sizes_ = ["S", "M", "XL", "XXL", "XXXL"];
sizes_.shift(); // Removes the first element "S"

// Q#5
// let sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes_.unshift(38, 40, 42); // Adds 38, 40, and 42 to the beginning of the array

// Q#6
let myArray = ["First Element"];
myArray.unshift("New First Element");
alert("The new first element is: " + myArray[0]);

// Q#7
// let sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes_.splice(2, 0, "L"); // Inserts "L" at index 2

// Q#8
let sizes = ["S", "M", "XL", "XXL", "XXXL"];
let regSizes = sizes.slice(0, 3); // Copies the first 3 sizes to regSizes

// Q#59
let pets_ = ["dog", "cat", "ox", "duck", "frog"];
pets_.splice(1, 3, "elephant", "giraffe"); // Removes "cat", "ox", and "duck" and adds "elephant" and "giraffe" after "dog"

// Q#10
// let pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2); // Removes "cat" and "ox"


// Q#11
let pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
let newPets = pets.slice(3, 5); // Copies "duck" and "frog" to newPets


// *************************************Chapter 17 to 20******************************************

// Q#1
for (let i = 0; i < 10; i++) {
    // Your code here
}

// Q#2
for (let i = 0; i <= 12; i++) {
    // Your code here
}

// Q#3
// What are the 5 characters missing from this code, excluding any spaces that are missing? for let i = 0 i <= 4 i++ Type them in order, with no spaces or commas between them.
for (let i = 0; i <= 4; i++) { }

// Q#4
for (let j = 0; j < 100; j++) {
    // Your code here
}

// Q#5
for (let k = 3; k > 0; k--) {
    // Your code here
}

// Q#6
// he statement assigns the number of elements in the array to the variable.
let arrayLength = myArray.length;

// Q#7
// Set a variable named “flag” with an initial Boolean value of your choice.
let flag = true;

// Q#8
for (let i = 0; i < pets.length; i++) {
    // Your code here
}

// Q#9
for (let i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i);
        break;
    }
}

// Q#10
let userNames = ["Alice", "Bob", "Charlie", "David"];
let firstName = prompt("Enter first name");

for (let i = 0; i < userNames.length; i++) {
    if (firstName === userNames[i]) {
        alert("Enter");
        break;
    } else {
        alert("Please write the correct user name");
        break;
    }
}

// Q#11
let matchFound = false;
for (let i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}
if (!matchFound) {
    alert("Match not found");
}

// Q#12
let firstArr = ["a", "b", "c", "d", "e", "f"];
let secondArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}


// *************************************Chapter 21******************************************

// Q#1
let allLower = userInput.toLowerCase();

// Q#2
x = x.toLowerCase();

// Q#3
y = y.toUpperCase();

// Q#4
let originalString = "YourStringHere";
let lowerCaseString = originalString.toLowerCase();

// Q#5
let myArray = ["SomeString"];
let lowerCaseElement = myArray[0].toLowerCase();

// Q#6
let myString = "Hello, World!";
alert(myString.toUpperCase());

// Q#7
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();



// *************************************Chapter 22 to 25******************************************

// Q#1
let sameWords = "captain";
let slicedPart = sameWords.slice(1, 3); // This will give you "ap"

// Q#2
let yourString_ = "YourStringHere";
let numberOfCharacters_ = yourString_.length;

// Q#3
let animal = "elephant";
let seg = animal.slice(1, 5); // This will give you "leph"

// Q#4
// let yourString = "YourStringHere";
numberOfCharacters_ = yourString_.length;

// Q#5
// let yourString = "YourStringHere";
let numberOfCharacters = yourString_.length;
let slicedString = yourString.slice(1, -3);

// Q#6
let text_ = "To be or not to be.";
let indx_ = text_.indexOf("be"); // This will give you the index 3

// Q#7
// let text = "To be or not to be.";
let indx__ = text.lastIndexOf("be"); // This will give you the index 16

// Q#8
let text__ = "Some text with go and go again.";
let indx = text__.lastIndexOf("go"); // This will give you the index 21

// Q#9
if (yourString[indexNum] !== undefined) {
    // Segment with the index `indexNum` exists
} else {
    // Segment with the index `indexNum` does not exist
}

// Q#10
let str__ = "abcde";
let characterAtIndex2 = str.charAt(2); // This will give you "c"

// Q#11
let text = "YourStringHere";
let cha__ = text.charAt(9); // The 10th character, as indexing starts at 0

// Q#12
// let str = "YourStringHere";
let x = str.charAt(str__.length - 1); // This will give you the last character

// Q#13
let input = "YourStringHere";
let cha = input.charAt(4); // The 5th character, as indexing starts at 0

// Q#14
if (yourString.charAt(2) === 'X') {
    // Your code here
}

// Q#15
let yourString = "YourStringHere";
let charArray = [];
for (let i = 0; i < yourString.length; i++) {
    charArray.push(yourString.charAt(i));
}

// Q#16
// let str = "YourStringWith1Here";
let newStr = str__.replace("1", "one");

// Q#17
let str = "YourStringWithMultipleOccurrencesHere";
let y = str.replace(/a/g, "z"); // This will replace all occurrences of 'a' with 'z'


// *************************************Chapter 26******************************************

// Q#1
let yourNumber = 5.678; // Replace this with your number
let roundedNumber__ = Math.round(yourNumber);

// Q#2
let roundNum__ = Math.ceil(yourNumber);

// Q#3
let roundNum = Math.floor(yourNumber);

// Q#4
let roundedNumber_ = Math.round(yourNumber); // Rounds to the nearest integer

// Q#5
let roundedNumber = Math.round(0.5);


// *************************************Chapter 27******************************************

// Q#1
let randomNumber = Math.floor(Math.random() * 50) + 1;

// Q#2
let randomValue = Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)

// Q#3
let diceRoll = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6

// Q#4
let coinToss = Math.random() < 0.5 ? "Heads" : "Tails"; // Generates "Heads" or "Tails" with roughly equal probability



// *************************************Chapter 28 to 29******************************************

// Q#1
// To convert a string to an integer in JavaScript, you can use the parseInt() function.

// Q#2
function stringToInt(str) {
    return parseInt(str, 10); // The second argument (10) specifies the base (decimal).
}

const result = stringToInt("123");
console.log(result); // This will output 123 as an integer.

// Q#3
// To  convert a string containing a decimal number to a floating - point number in JavaScript, you can use the parseFloat() function.

// Q#4
function isNumeric(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
}

const myString_ = "123.45";
if (isNumeric(myString_)) {
    const myNumber = parseFloat(myString);
    console.log(myNumber);
} else {
    console.log("Conversion failed.");
}

// Q#5
// To convert a number to a string in JavaScript, you can use the toString() method or simply concatenate the number with an empty string.

// Q#6
function numberToString(num) {
    return num.toString();
}

const result2 = numberToString(42);
console.log(result2); // This will output "42" as a string.

// Q#7
const decimalString = "3.14";
const integer = parseInt(decimalString, 10);
console.log(integer); // This will output 3 (the decimal part is truncated).


// *************************************Chapter 30******************************************

// Q#1
const num3 = 3.14159265359; // Replace with your number
const newNum = num3.toFixed(4).toString();

// Q#2
// let num = 3.14159265359; // Replace with your number
num = parseFloat(num3.toFixed(2));

// Q#3
// const num = 123.4567; // Replace with your number
const numString = num3.toFixed(2).toString();

// Q#4
if (numString.length > 4) {
    // Your code here
}

// Q#5
const longNumber = 3.14159265359; // Replace with your number
const roundedNumber2 = longNumber.toFixed(2);
alert(roundedNumber2);


// *************************************Chapter 31 to 34******************************************
// Q#1
const dObj = new Date();

// Q#2
const d = new Date();
const dStr = d.toString();

// Q#3
// const d = new Date();
const day = d.getDay();

// Q#4
// const d = new Date();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day_ = dayNames[d.getDay()];
alert(day_);

// Q#5
// const d = new Date();
const year = d.getFullYear();
const month = d.getMonth() + 1; // Months are zero-based, so add 1
const day2 = d.getDate();
const hours = d.getHours();
const minutes = d.getMinutes();
const seconds = d.getSeconds();
const milliseconds = d.getMilliseconds();

// Q#6
const later = new Date(2020, 11, 31); // Months are zero-based, so 11 is December

// Q#7
const specificDate = new Date(1992, 1, 2); // Months are zero-based, so 1 is February

// Q#8
const referenceDate = new Date(1970, 0, 1); // January 1, 1970
const beginningOf1980 = new Date(1980, 0, 1); // January 1, 1980
const millisecondsElapsed = beginningOf1980 - referenceDate;
alert(millisecondsElapsed);

// Q#9
// const d = new Date();
d.setFullYear(2022); // Change the year to 2022

// Q#10
// const d = new Date();
d.setMonth(0); // January is month 0

// Q#11
// To change the day of the week for a specific date in JavaScript, you can't directly change the day of the week. 
// The day of the week is determined by the date and can't be altered independently.

// Q#12
function changeMinutes(originalDate, newMinutes) {
    const newDate = new Date(originalDate);
    newDate.setMinutes(newMinutes);
    return newDate;
}

//   const originalDate = new Date();
const newDate = changeMinutes(originalDate, 30); // Change the minutes to 30

// Q#13
function addHours(originalDate, hoursToAdd) {
    const newDate = new Date(originalDate);
    newDate.setHours(newDate.getHours() + hoursToAdd);
    return newDate;
}

const originalDate = new Date();
const newDate_ = addHours(originalDate, 2); // Add 2 hours

// Q#14
function calculateAge(birthdate) {
    let today = new Date();
    let birth = new Date(birthdate);
    let ageInMilliseconds = today - birth;

    let ageDate = new Date(ageInMilliseconds);
    let years = ageDate.getUTCFullYear() - 1970;
    let months = ageDate.getUTCMonth();
    let days = ageDate.getUTCDate() - 1; // Adjust for 0-based days

    return { years: years, months: months, days: days };
}

let birthdate = "1990-05-15"; // Replace with the user's birthdate
let age = calculateAge(birthdate);
console.log("You are " + age.years + " years, " + age.months + " months, and " + age.days + " days old.");



// *************************************Chapter 35 to 37******************************************

// Q#1
function displayAlert() { }

// Q#2
function askName() {
    let userName = prompt("Enter name");
    return userName;
}

// Q#3
function callTwoFunctions() {
    // Call function1
    function1();

    // Call function2
    function2();
}

// Q#4
function displayName() {
    let name = prompt("Enter name");
    alert("Hello, " + name);
}

// Call the function
displayName();

// Q#5
function concat(a, b, c) { }

// Q#6
function concatenateStrings(str1, str2) {
    let result = str1 + str2;
    return result;
}

// Q#7
function multiplyNumbers(num1, num2, num3) {
    let result = num1 * num2 * num3;
    return result;
}

// Q#8
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// Q#9
function addNumbers(a, b) {
    return a + b;
}

// Q#11
let result4 = functionName(arguments);

// Q#12
function countOccurrences(word, text) {
    let regex = new RegExp(word, 'g');
    let matches = text.match(regex);
    return matches ? matches.length : 0;
}

// Q#13
function setYear(date, year) {
    date.setFullYear(year);
    return date;
}

// Q#14
function calculateAge(dateOfBirth) {
    let birthDate = new Date(dateOfBirth);
    let currentDate = new Date();
    let ageInMilliseconds = currentDate - birthDate;
    let ageDate = new Date(ageInMilliseconds);
    return ageDate.getUTCFullYear() - 1970;
}

// Q#15
function checkPresence(word, array) {
    return array.includes(word);
}

// Q#16
function repeatLetter(letter, times) {
    return letter.repeat(times);
}

// Q#17
function reverseArray(arr) {
    return arr.reverse();
}

// *************************************Chapter 38******************************************

// Q#1
function calculateSum(a, b) {
    // Define a local variable within the function
    let result = a + b;

    // Display the result using console.log
    console.log(`The sum of ${a} and ${b} is ${result}`);
}

// Call the function
calculateSum(5, 3);

// Q#2
// Declare a global variable
let globalVar = 42;

function accessGlobal() {
    // Access the global variable within the function
    console.log(`The value of globalVar is: ${globalVar}`);
}

// Call the function
accessGlobal();

// *************************************Chapter 39 to 40******************************************

// Q#1
let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the workweek.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

// Q#2
let cityName = prompt("Enter a city name:");

switch (cityName) {
    case "Karachi":
        alert("You entered Karachi!");
        break;
    case "Lahore":
        alert("You entered Lahore!");
        break;
    default:
        alert("City not recognized.");
}

// *************************************Chapter 41 To 45******************************************

// Q#1
let i2 = 0;

while (i2 < 2) {
    // Code that does nothing
    i2++;
}

// Q#2
var animals = ["horse", "ox", "cow", "pig", "duck"];

for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "pig") {
        alert("Found it!");
        break;
    }
}

// Q#3
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// Q#4
let userNumber;

while (true) {
    userNumber = prompt("Enter a number:");
    if (userNumber !== null) {
        alert("You entered: " + userNumber);
        break;
    } else {
        alert("Invalid input. Please enter a number.");
    }
}

// Q#5
let number4 = parseInt(prompt("Enter a number:"));

while (!isNaN(number4)) {
    if (number4 % 2 === 0) {
        alert(number4 + " is even.");
    } else {
        alert(number4 + " is odd.");
    }
    number4 = parseInt(prompt("Enter another number (or type a non-numeric character to exit):"));
}

// Q#6
const randomNumber2 = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (true) {
    guess = parseInt(prompt("Guess the number between 1 and 100:"));
    attempts++;

    if (isNaN(guess)) {
        alert("Invalid input. Please enter a number.");
    } else if (guess < randomNumber2) {
        alert("Too low! Try again.");
    } else if (guess > randomNumber2) {
        alert("Too high! Try again.");
    } else {
        alert("Congratulations! You guessed the number " + randomNumber2 + " in " + attempts + " attempts.");
        break;
    }
}

// Q#7
let countdown = 10;

console.log("Starting countdown:");

while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

console.log("Blast off!");

