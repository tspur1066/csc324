// Thomas Spurlock
// Chapter 5 HW
// Due: September 21st, 2023



// Problem #1 - Flattening

// Use the reduce method in combination with the concat method to “flatten” an array of arrays
// into a single array that has all the elements of the original arrays.


// Solution #1

let flattener = function(array) {
    let place = [];
    for (let i = 0; i < array.length; i += 1) {
        new_array = array.reduce((place, function (a, b) {
            return place.concat(a, b);
        }));
    }
    return new_array;
}
console.log(flattener([[1, 2, 3], [1, 2, 3]]));
console.log(flattener([[1, 3, 5], [7, 9, 11]]));




// Problem #2 - Your own for loop

// Write a higher-order function loop that provides something like a for loop statement.
// It takes a value, a test function, an update function, and a body function. 
// Each iteration, it first runs the test function on the current loop value and stops if that returns false.
// Then it calls the body function, giving it the current value. 
// Finally, it calls the update function to create a new value and starts from the beginning.

// When defining the function, you can use a regular loop to do the actual looping.


// Solution #2

let loop = function(value, test, update, body) {
    while (test(value) == true) {
        body(value);
        value = update(value);
}
return value;
}
loop(5, n => n > 0, n => n - 1, console.log);
let test_array = [1, 2, 3, 4, 5];
loop(test_array, n => test_array.length > 0, n => test_array.shift(), console.log);



// Problem #3 - Everything

// Analogous to the some method, arrays also have an every method. 
// This one returns true when the given function returns true for every element in the array.
// In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

// Implement every as a function that takes an array and a predicate function as parameters.
// Write two versions, one using a loop and one using the some method.


// Solution #3

code