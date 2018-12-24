// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';

// console.log(name2);
console.log(typeof name2);

if (name2 === 'Jeff') {
    console.log('YES');

} else {
    console.log('NO');

}

// Number

const num1 = 5;

const num2 = new Number(5);

// console.log(typeof num2);

// Boolean
const nool1 = true;
const bool2 = new Boolean(true);


// Function
const getSum1 = function (x, y) {
    return x + y;
}



// let getSumVar = getSum1(1, 1);


const getSum2 = new Function('x', 'y', 'z', 'return 1 +1');

console.log(getSum2(1, 1));

// console.log(getSumVar);

// Objects

const john = {
    name: "John"
};
const john2 = new Object({
    name: "John"
});

console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Reguelar Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);

//! usually this is not used