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

let size = 6;
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

let test_1 = " # # # #\n";
let test_2 = "# # # # ";
for (let counter = 0; counter <= 3; counter = counter + 1) {
    test_3 = test_1 + test_2
    console.log(test_3)
}

for (let )

//Any size grid




let test_3 = " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n";
console.log(test_3.length);

