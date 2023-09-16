// Chapter 5 HW

//Flatten Problem

let flattener = function(array) {
    let place = [];
        new_array = array.reduce((place, function (a, b) {
            return place.concat(a, b);
        }));
    return new_array;
}
console.log(flattener([[1, 2, 3], [1, 2, 3], [1, 2, 3]]));
console.log(flattener([[1, 3, 5], [7, 9, 11]]));

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






