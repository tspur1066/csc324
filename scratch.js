const abc = "#"
console.log(abc);

const greeting = "Hello ";

console.log(greeting);

console.log(symb * 2);

symb;

abc


console.log("#");

let number = symb.length


for (let counter = 0; counter <= 7; counter += 1 ) {
    console.log(counter);
}

let symbol = "#";
for (let length = symbol.length; symbol.length <= 7; symbol += "#") {
    console.log(symbol)
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





size = prompt("Choose a number.");
console.log(size*2);

let size = 8;
let row = "";
let counter_1 = 1;
while (counter_1 <= size) {
    let counter_2 = 0;
    if (counter_1 % 2 != 0) {
        row += " ";

    }
    while (counter_2 <= size) {
        if (counter_2 >= size) {
            row += "\n";
        } else if (counter_2 % 2 == 0) {
            row += "#";
            
        } else if (counter_2 % 2 != 0 & counter_2 != size) {
            row += " ";
        } else if (counter_2 % 2 != 0 & counter_2 == size & counter_1 % 2 != 0) [
            row += "\n"

        ]
        counter_2 += 1
        }
        counter_1 += 1;
    }
console.log(row);



console.log("#"+2("#"))


let test_1 = " # # # #\n";
test_1;
let test_2 = "# # # # \n";
let counter = 0;
while (counter <= 4) {
    console.log()
}



//8x8 Grid

let line_1 = " # # # #\n";
let line_2 = "# # # # ";
for (let counter = 0; counter <= 3; counter = counter + 1) {
    line_3 = line_1 + line_2
    console.log(line_3)
}



//Any size grid




let test_3 = " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n";
console.log(test_3.length);


// Chapter 3 HW


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
console.log("karate"[3])

// Any string counter

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


