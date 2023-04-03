gk// Sum two numbers
// Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result
function myFunction(a, b){
    return a + b
}

// Comparison operators, strict equality
// Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
function myFunction(a, b){
   return a===b
}

// Get type of value
// Write a function that takes a value as argument. Return the type of the value.
function myFunction(a){
    return typeof(a)
}

// Get nth character of string
// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
function myFunction(a, n) {
    return a[n - 1];
 }

//  Remove first n characters of string
//  Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

 function myFunction(a) {
    return a.slice(3);
 }

//  Get last n characters of string
// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
function myFunction(str) {
    return str.slice(-3);
 }


//  Get first n characters of string
// Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result
 function myFunction(a) {
    return a.slice(0, 3);
 }

//  Find the position of one string in another
//  Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.
 function myFunction(a) {
    return a.indexOf('is');
 }

//  Extract first half of string
// Write a function that takes a string (a) as argument. Extract the first half a. Return the result
  function myFunction(a){
  return a.slice(0, a.length/2)
}

// Remove last n characters of string
// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result
function myFunction(a) {
    return a.slice(0, -3);
 }

//  Return the percentage of a number
// Write a function that takes two numbers (a and b) as argument. Return b percent of a
function myFunction(a, b) {
    return b / 100 * a
  }

//   Basic JavaScript math operators
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.
function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
 }

//  Check whether a string contains another string and concatenate
// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation
function myFunction(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a
  }

//   Check if a number is even
// Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false
function myFunction(a) {
    return a % 2 === 0
  }
//   How many times does a character occur?
// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
function myFunction(a, b) {
    return b.split(a).length - 1
  }

//   Multiplication, division, and comparison operators
// Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value
function myFunction(a, b) {
    return a < b ? a / b : a * b
  }

//   Round a number to 2 decimal places
// Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number
function myFunction(a) {
    return Number(a.toFixed(2));
  }

//   Split a number into its digits
// Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want to change the type of the number for the splitting
function myFunction( a ) {
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
  }