// Thomas Spurlock
// Due: September 7th, 2023



// Problem #1 - Minimum

// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. 
// Write a function min that takes two arguments and returns their minimum.

// Solution #1

const little_math = function(x, y) {
    console.log(Math.min(x,y));
}
little_math(-200, -10);
little_math(25, 20000);





// Problem #2 - Recursion

// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 
// to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. 
// The function should accept a single parameter (a positive, whole number) and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// Solution 2

const isEven = function(x) {
    if (x < 0) {
        return console.log("!!!!x must be a positive number!!!!");
    }
    if (x == 1) {
        return console.log("Odd");
    } else if (x == 0) {
        return console.log("Even");
    } else return isEven(x - 2);
}
isEven(50);
isEven(75);
isEven(-1);

// Because negative numbers are less than both 0 and 1, their evenness or oddness cannot
// be tested simply using the n-2 method, so they must be accounted for in the code.





// Problem #3 - Bean Counting

// You can get the Nth character, or letter, from a string by writing "string"[N]. 
// The returned value will be a string containing only one character (for example, "b"). 
// The first character has position 0, which causes the last one to be found at position string.length - 1.
// In other words, a two-character string has length 2, and its characters have positions 0 and 1

// Write a function countBs that takes a string as its only
// argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it
// takes a second argument that indicates the character that is to be counted 
// (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// Solution #3

// B counter

const countBs = function(str) {
    if (typeof(str) != "string") {
        return console.log("!!!!!str must be a string!!!!!")
    }
    let B_counter = 0;
    for (let str_place = 0; str_place <= str.length; str_place += 1) {
        str[str_place];
        if (str[str_place] == "B") {
            B_counter += 1;
        }
    }
    return console.log(B_counter);
}
countBs("Botany")
countBs("BBC")
countBs("BBBBBB")
countBs(1)

// Any character counter

const countChar = function(str, character) {
    if (typeof(str) != "string" | typeof(character) != "string") {
        return console.log("!!!!!str and character must be strings!!!!!")
    }
    let char_counter = 0;
    for (let char_place = 0; char_place <= str.length; char_place += 1) {
        str[char_place];
        if (str[char_place] == character) {
            char_counter += 1;
        }
    }
    return console.log(char_counter);
}
countChar("Botany", "B")
countChar("BBC", "C")
countChar("BBC", "b")
countChar("BBBBBB", "C")
countChar("Lepsipopacopolus", "p")
countChar(1, "f")
countChar("Michael", 1)






