// Chapter 5 HW

//Flatten Problem

let flattener = function(array) {
    if (typeof(array) != "object") {
        return "!!!!array must be an array!!!!"
    }
    let place = [];
        new_array = array.reduce((place, function (a, b) {
            return place.concat(a, b);
        }));
    return new_array;
}
console.log(flattener([[1, 2, 3], [1, 2, 3], [1, 2, 3]]));
console.log(flattener([[1, 3, 5], [7, 9, 11]]));
console.log(flattener("Vercingetorix"));

// For Loop Problem

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

// Everything Problem

// Loop way

let every = function(array, test) {
    if (typeof(array) != "object" | typeof(test) != "function") {
        return "!!!!array must be an array and test must be a predicate function!!!!"
    }
    let empty = [];
    let truth_counter = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (test(array[i]) == true) {
            truth_counter += 1;
        }
    }
    if (truth_counter == array.length) {
        return true;
    } else return false;
}

let arraymond = [1, 3, 5, 7];
console.log(every(arraymond, n => n > 10));
console.log(every(arraymond, n => n < 10));
console.log(every([3, 5, 7, 200], n => n > 10));
console.log(every("Top soil", n => n = 10));


// some method way

let every_some = function(array, test) {
    if (typeof(array) != "object" | typeof(test) != "function") {
        return "!!!!array must be an array and test must be a predicate function!!!!"
    }
    if (array.some(test) == false) {
        return false;
    }
    let truth_for_all = array.filter(test);
    if (truth_for_all.length != array.length) {
        return false;
    } else return true;
}
let arrachel = [1, 2, 3, 4, 5];
console.log(every_some(arrachel, n => n < 6));
console.log(every_some(arrachel, n => n > 10));
console.log(every_some([1, 2, 3, 4, 10000], n => n < 10));
console.log(every_some("Timothy", n => n <10));


