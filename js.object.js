// Accessing object properties one
// Write a function that takes an object with two properties as argument. It should return the value of the property with key country.
function myFunction(obj) {
    return obj.country
  }


//   Accessing object properties two
// Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. Tipp: you might want to use the square brackets property accessor
function myFunction(obj) {
    return obj['prop-2']
  }

//   Accessing object properties three
// Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string
function myFunction(obj, key) {
    return obj[key]
  }

//   Check if property exists in object
// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.
