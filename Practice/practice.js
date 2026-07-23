const { setEngine } = require("crypto");

const prompt = require("prompt-sync")();

//let a = parseInt(prompt("Enter the first number :"));
//let b = parseInt(prompt("Enter the second number :"));

//Problem 1
/*const sum = (x, y) => {
  return x + y;
};
let a = 32;
let b = 4;
console.log("sum of a and b:", sum(a, b));*/

//Problem 2
/*const area = (x, y)=>{
  return x*y;
};
let a = parseInt(prompt("Enter the length of the rectangle :"));
let b = parseInt(prompt("Enter the breadth of the rectangle :"));
console.log("area of rectangle",area (a,b));*/

//Problem 3
/*const eo = (x) => {
  if (x % 2 == 0) {
    return "even";
  }
  else {
    return "odd";
  }
};
let a = parseInt(prompt("Enter the number :"));
console.log ("Number is:",eo(a))*/

//Problem 3 (second method)
/*const ceo = (x) => {
  return (x % 2 == 0)
};
let a = parseInt(prompt("Enter the number :"));
console.log("Number is even :", ceo(a));*/

//Problem 4
/*const smallest = (x,y,z) => {
   if (x<y && x<z) {
     return x;
   }
   else if (y<x && y<z) {
     return y;
   }
   else {
     return z
   }
 }
let a = parseInt(prompt("Enter the first number :"));
let b = parseInt(prompt("Enter the second number :"));
let c = parseInt(prompt("Enter the third number :"));
console.log ("The smallest number is :",smallest(a,b,c))*/

//Problem 5 (*)
/*const rst = (x) => {
  let result = "";
  for (let i = x.length - 1; i>= 0; i--) {
    result += x[i];
  }
  return result;
};
let a = prompt("Enter the string:");
console.log (rst(a));*/

//Problem 5 (Another method) (*Improved)
/*const rst = (x) => {
  return x.split("").reverse().join("")
};
let a = prompt("Enter the string:");
console.log(rst(a));*/

//Problem 6 (* (solved but one error)) (Improved for not taking negative number as a input)
/*const factorial = (x) => {
  if (x < 0){
    return ("Error : Factorial is not designed for negative numbers")
  }
  else {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result = (parseInt(result * i));
  }
  return result;
  }
};
let a = parseInt(prompt("Enter a number :"));
console.log("Factorial of given number is :",factorial(a));*/

//Problem 7
/*const leapyearornot = (x) => {
  if (x % 4 == 0 ) {
    return ("It is a leap year")
  }
    else if (x < 0) {
      return ("Error : Year can't be a negative number ")
    }
  else {
    return ("It is not a leap year")
  }
}
let a = parseInt(prompt("Enter the year:"))
console.log (leapyearornot(a))*/

//Problem 7 (Improved but not necessary)
/*const leapyearornot = (x) => {
  if (x < 0) {
    return ("Error : Year can't be a negative number ")
  }
  if (x % 4 == 0 && (x % 100 != 0 || x % 400 == 0)) { // Because if years are not divisible by 100 but are divisible by 100 then they are centurial years   
    return ("It is a leap year")
  } else {
    return ("It is not a leap year")
  }
}
let a = parseInt(prompt("Enter the year:"))
console.log (leapyearornot(a))*/

//Problem 8
/*const sumofalldigits = (x) => {
  let result = 0
  for (let i = 1 ; i <= x ; i++){
    result += i 
  }
  return result;
}
let a = parseInt(prompt("Enter the number:"))
console.log ("The sum of all digits is :",sumofalldigits(a));*/

//Problem 9 ( logic is good but gives only answer no number reference)
/*const table = (x,y) =>
  { const multiplicator = x;
   let result = "";
   for (let i = 1; i <= y ; i++ ) { 
   result = parseInt(multiplicator * i );
    console.log (result);
   }
  }
  let a = parseInt(prompt("Enter the number:")) 
 let b = parseInt(prompt("Enter the number:"))
table(a,b);*/

//Problem 9 (Improved for printing the line of the table)
/*const table = (x, y) => {
  const multiplicator = x; 
  let result = "";
  for (let i = 1; i <= y ; i++ ){
    result += `${multiplicator} * ${i} = ${multiplicator * i}\n`;
  } 
  console.log(result);
}
let a = parseInt(prompt("Enter the number:"));
let b = parseInt(prompt("Enter the number:"));
table(a, b);*/

//Problem 10 (worst code not entirely wrong but not entirely correct)
/*const lararray = (x) => {
  x.sort();
  console.log (x[3]);
}
let a = [3,4,5,1];
lararray(a);*/

//Problem 10 ( without any methods )
/*const userInput = prompt("Enter an array of numbers (separated by commas): ");
const array = userInput.split(",").map(Number);

const lararray = (x) => {
  let max = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }
  return (max);
}
console.log("The largest number is :",lararray(array));*/

//Problem 10 (modified for leetcode)
/*const palindromeornot = (x) => {
  x = x.replace(/[^\w]/gi, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase // if used w then it considers everything
  let s = 0;
  let e = x.length-1;
  while (s < e){
    if (x[s]!==x[e]){
       return false;
    }
    s++;
    e--;
  }
  return true;
}
//let a = prompt("Enter a string:");
let a = "A man ,a plan ,a canal: Panama";
console.log("The string is palindrome :",palindromeornot(a));*/

//Problem 11
/*const exponent = (base, exponent) => {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result = result * base;
  }
  return result;
};
let a = prompt("Enter a number:");
let b = prompt("Enter a number:");
console.log(exponent(a, b));*/

//Problem 12
/*const vowelorconsonant = (x) => {
  let m = "aeiou";
  let n = "bcdghjklmnptqrsvwxyz";
  let vowelcount = 0;
  let consonantcount = 0;
  for (let i = 0; i < x.length; i++) {
    let char = x[i].toLowerCase();
    if (char === ' ') continue; // skip over spaces
    if (m.includes(char)) {
      vowelcount++;
    } else if (n.includes(char) && char.match(/[a-z]/i)) { // check if it's a letter
      consonantcount++;
    }
  }
  return { vowelcount, consonantcount };
};
let a = prompt("Enter a string:");
if (!isNaN(a)) {                 
  console.log("Error: Input must be a word, not a number or blank space "); // To check whether string is not a number
} else {
  console.log("The vowels are :", vowelorconsonant(a));
} */

// Learning Code Fluency

//Problem 1(Write a function that filters all numbers > 10 from an array)
/*const Greaterthanten = () => {
  const numbers = [1,2,3,4,14,19,20,21,42,5];
  let savedvalues = [];
  for (let i = 0;i<numbers.length;i++){
  if(numbers[i]>10){
    savedvalues.push(numbers[i]);
  }
 }
  return savedvalues;
}
console.log("The numbers are :", Greaterthanten());*/

//Problem 2(Write a function that filters all even numbers from a given array)
const evennumbers = () =>{
  let a = [1,44,3,2,6,4,31,99,71,32];
  let savedvalues = [];
  for (let i=0; i<a.length;i++){
    if(a[i]%2 === 0){
      savedvalues.push(a[i]);
    }
  }
  return savedvalues;
}
console.log("The Numbers are :",evennumbers());
