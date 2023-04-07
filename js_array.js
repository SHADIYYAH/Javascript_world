// Get nth element of array
// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
function myFunction(a, n) {
    return a[n - 1];
 }

//  Remove first n elements of an array
// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
function myFunction(a) {
    return a.slice(3);
 }

//  Get last n elements of an array
// Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
function myFunction(a) {
    return a.slice(-3);
 }

//  Get first n elements of an array
// Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array
function myFunction(a) {
    return a.slice(0, 3);
 }

//  Return last n array elements
// Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.
function myFunction(a, n) {
    return a.slice(-n);
  }
//   Remove a specific array element
// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
 function myFunction( a, b ) {
    return a.filter(arr=> arr !== b)
  }

//   Count number of elements in JavaScript array
// Write a function that takes an array (a) as argument. Return the number of elements in a.
function myFunction(a) {
    return a.length
 }

//  Count number of negative values in array
// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
function myFunction(a) {
    return a.filter((el) => el < 0).length;
 }

//  Sort an array of strings alphabetically
// Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.
function myFunction( arr ) {
    return arr.sort()
    }

//     Sort an array of numbers in descending order
// Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.
function myFunction(arr){
  return arr.sort().reverse()
}

// Calculate the sum of an array of numbers
// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
function myFunction(a){
const sum = a.reduce((total, current) =>{
  return total + current}, 0);
  return sum;
}


// Return the average of an array of numbers
// Write a function that takes an array of numbers as argument. It should return the average of the numbers.
function myFunction(arr){
const sum = arr.reduce((total, current) =>{
return total + current}, 0);
return sum/arr.length;

}
// Return the longest string from an array of strings
// Write a function that takes an array of strings as argument. Return the longest string.
function myFunction( arr ) {
    return arr.reduce((a, b) => a.length <= b.length ? b : a)
    }

//     Check if all array elements are equal
// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.
function myFunction(arr){
    return new Set(arr).size === 1;
}

// Merge an arbitrary number of arrays
// Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.
function myFunction(...arrays){
    return arrays.flat()
}

// Sort array by object property
// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array

// Merge two arrays with duplicate values
// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array
 function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
};