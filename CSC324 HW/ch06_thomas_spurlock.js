// Thomas Spurlock
// Chapter 6 HW
// Due: October 5th, 2023



// Problem #1 - Groups

// The standard JavaScript environment provides another data structure called Set. 
// Like an instance of Map, a set holds a collection of values. 
// Unlike Map, it does not associate other values with those—it just tracks which values are part of the set.
//  A value can be part of a set only once—adding it again doesn’t have any effect.

// Write a class called Group (since Set is already taken). 
// Like Set, it has add, delete, and has methods. 
// Its `constructor` creates an empty group, `add` adds a value to the group 
// (but only if it isn’t already a member), `delete` removes its argument from the group (if it was a member),
// and `has` returns a Boolean value indicating whether its argument is a member of the group.

// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

// Give the class a static `from` method that takes an iterable object as argument
//  and creates a group that contains all the values produced by iterating over it.


// Solution #1

class Group {
    constructor() {
        this.group = [];
    }
     add(value) {
        if (this.group.includes(value) === true) {
            return console.log(`!!!Group already contains ${value}!!!`);
        }
        else 
        return this.group.push(value);
    }
    delete(value) {
        if (this.group.includes(value) != true) {
            console.log(`${value} is not in the group, silly!`);
            return
        }
        if (this.group.length <= 1) {
            return this.group = [];
        }
        return this.group = this.group.filter((n) => n != value);
    }
    has(value) {
        if (this.group.includes(value) === true) {
            return true
        }
        else return false
    }
// After much bashing of my head against a wall, I caved and went to the website for how to do the static method.
// Aside from the minor adjustments needed to fix the static method, all other work is work from myself.

    static from(array) {
        if (typeof(array) != "object") {
            return console.log("array must be an array!");
        }
        let array_group = new Group;
        for(let i = 0; i < array.length; i += 1) {
            let element = array[i];
            array_group.add(element);
        }
        return array_group;
    }
}

let test = new Group(25);
console.log(test);
test.add(2);
test.add(2);
test.add(3);
test.add(4);
console.log(test.group)
console.log(test.has(2));
console.log(test.delete(2));
let testing = Group.from([5, 7]);
console.log(testing.group);
testing.add(25);
testing.add(5);
console.log(testing.group);