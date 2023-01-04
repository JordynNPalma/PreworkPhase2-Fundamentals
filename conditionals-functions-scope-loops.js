/*
Conditionals, Functions, Scope, & Loops
 */

/*
//equals
let equals = 1 === 1;
//console.log(equals)

let equals2 = 1 == "1"

//console.log(equals2)

// Greater Than
 let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterthaneq = 4 <= 9;

//Less than equals
let lessthaneq = 4 <= 9;

//Not Equals
let notEquals = 5 !== 2;


let storeA = 1.40
let storeB = 3.40

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("store a has a lower price.")
    } else if (storeB < storeA) {
        console.log("store B has a lower price")
    } else {
        console.log("Their Prices are equal")
    }
}

//compareStorePrices(10, 5);
//compareStorePrices(7, 10);

function squarenum (number) {
    return number * number
}

let squaredNumber = squarenum(7);
console.log(squaredNumber);
*/

/*
//Scope

let x = 10;

function addNumbers(n, m, x) {
    //console.log(x);
    let b;
    if (1===1) {
        b = 8;
    }
    //console.log(b)
    return n + m;
}

addNumbers(1,2,10)

addNumbers(2,3, 8)
console.log(x) */

//Arrays

/*let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
let ourArray = [1, 2, 3, 4, 5, 1, 7];

let arrlen = ourArray.length;
for(let i = 0; i<arrlen; i++) {
console.log("i is equal to: " + i);
    console.log(ourArray [i]);
    for(let j =0; j<10; j++) {
     console.log('j is equal to: ' +j)
    }
}

*/

let x = 0
while (x < 10) {
    console.log('Ran');
    x= x + 1;
}





