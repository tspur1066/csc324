// Chapter 5 HW

//Flatten Problem

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






