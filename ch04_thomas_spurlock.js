// Thomas Spurlock
// Chapter 4 HW
// Due: September 14th, 2023



// Problem #1 - The Sum of a Range

// The introduction of this book alluded to the following
// as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));


// Write a range function that takes two arguments, start and end,
// and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns 
// the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the
// “step” value used when building the array. If no step is given, 
// the elements go up by increments of one, corresponding to the old behavior. 
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
// Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].


// Solution #1

// Range function

let range = function(start, end) {
    if (typeof(start) != "number" | typeof(end) != "number") {
        return "!!!!start and end must be numbers!!!!";
    }
    let complete = [];
    if (start > end) {
        for (let i = start; i >= end; i -= 1) {
            complete.push(i);
        }
        return complete;
    }
    else for (let i = start; i <= end; i += 1) {
        complete.push(i);
    }
    return complete;
}
console.log(range(1,3));
console.log(range(3,1));
console.log(range("barnacle", 5));

// Sum function

let sum = function(array) {
    if (typeof(array) != "object") {
        return "!!!!array must be an array!!!!";
    } else {
        let summed_array = 0;
        for (let i = 0; i < array.length; i += 1) {
            summed_array += array[i];
    }
    return summed_array;
}
}
let test = [1,2,3,4]
console.log(sum(test))

// Testing the example command

console.log(sum(range(1,10)))

// Added step parameter

let range2 = function(start, end, step = 1) {
    if (typeof(start) != "number" | typeof(end) != "number" | typeof(step) != "number") {
        return "!!!!start, end, and step must be numbers!!!!";
    }
    if (step == 0) {
        return "!!!!!Step must be a non-zero number!!!!!";
    }
    let complete = [];
    if (start > end & step >= 1) {
        for (let i = start; i >= end; i -= step) {
            complete.push(i);
        }
    }
    if (start > end & step < 0) {
        return range2(start, end, -step);
    }
    for (let i = start; i <= end; i += step) {
        complete.push(i);
    }
    return complete;
}
console.log(range2(5, 2, -1));
console.log(range2(5,8,0));
console.log(sum(range2(5, 8, 0)));
console.log(range2(1,10, 2));
console.log(sum(range2(1,10, 2)));
console.log(sum(range2(["St", "Boniface", 6])));






// Problem #2 - Reversing an Array

// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
// For this exercise, write two functions, reverseArray and reverseArrayInPlace.
// The first, reverseArray, takes an array as argument and produces a new array
// that has the same elements in the inverse order. The second, reverseArrayInPlace,
// does what the reverse method does: it modifies the array given as argument by reversing its elements. 
// Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, 
// which variant do you expect to be useful in more situations? Which one runs faster?


// Solution #2


// reverseArray function

let reverseArray = function(array) {
    let reversed_array = [];
    let rev_place = array.length;
    for (let i = 1; i <= rev_place; i += 1) {
        reversed_array.push(array[rev_place - i]);
    }
    return reversed_array;
}
let test_rev = [1,2,3,4,5];
console.log(reverseArray(test_rev));
console.log(reverseArray(["Todd", "MacIntyre", 1, "Aquinas"]))

// reverseArrayInPlace

let reverseArrayInPlace = function(array) {
    let length_of_array = array.length;
    for (let i = 1; i <= length_of_array; i += 1) {
        array.push(array[length_of_array - i]);
    }
    for (let j = 0; j < length_of_array; j += 1) {
        array.shift();
    }
    return array;
}
let testing = [1,2,3,4,5];
console.log(reverseArrayInPlace(testing));
console.log(reverseArrayInPlace(["Todd", "MacIntyre", 1, "Aquinas"]))

// From running a few tests, reverseArray appears to run faster overall, though the reason for that
// may stem from the inefficient code I used for reverseArrayInPlace. I would think generally that
// a function like reverseArrayInPlace would be more useful, however, since it does not involve creating a whole new
// array like reverseArray does.





