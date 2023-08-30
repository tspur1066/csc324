// Chapter 2 Homework
// Thomas Spurlock
// Due: 8/31/2023

// Problem #1: Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = "abc";
// console.log(abc.length);
//  → 3



// Solution #1: 

let symbol = "#";
for (let length = symbol.length; symbol.length <= 7; symbol += "#") {
    console.log(symbol)
}




// Problem # 2: FizzBuzz

// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" 
// instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz"
// for numbers that are divisible by both 3 and 5 
//(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant
// percentage of programmer candidates. So if you solved it, your labor market value just went up.)



// Solution #2

// Fizz and Buzz

let counter = 1;
while (counter <= 100) {
    if (counter % 3 != 0 & counter % 5 != 0) {
    console.log(counter);
    } if (counter % 3 == 0 & counter % 5 == 0) {
        console.log("Fizz");
    } if (counter % 3 == 0 & counter % 5 != 0) {
        console.log("Fizz");
    } if (counter % 5 == 0 & counter % 3 != 0) {
        console.log("Buzz");
    } 
    counter += 1;
}

// FizzBuzz

let counter = 1;
while (counter <= 100) {
    if (counter % 3 != 0 & counter % 5 != 0) {
    console.log(counter);
    } if (counter % 3 == 0 & counter % 5 == 0) {
        console.log("FizzBuzz");
    } if (counter % 3 == 0 & counter % 5 != 0) {
        console.log("Fizz");
    } if (counter % 5 == 0 & counter % 3 != 0) {
        console.log("Buzz");
    } 
    counter += 1;
}




// Problem #3

// Chessboard

// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid there
// is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #



// Solution #3



