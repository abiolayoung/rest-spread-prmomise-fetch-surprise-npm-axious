// REST AND SPREAD
//...args - this is a spread and rest operator (as we proceed we will break it down and diffferentiate between rest and spread)
// differences between rest and spread operator

//SPREAD OPERATOR
// var returnedValue = Math.max(2, 7, 4, 2, 9, 8)
// console.log(returnedValue)

// var myObj = {};
// Object.assign(myObj, {a:1, b:2, c:3}, {z:9, y:8, x:7})
// console.log(myObj)

function sumOne(a, b){
 return a+b;
}

var myA = [5, 2]
console.log(sumOne(...myA))  
//this will output 9 because the spread operator will spread each array item- the spread operator takes the group
// of an array and spread each item into multiple part for the operation to carry on

// REST OPERATOR- The rest operator is being declared before the arguments is being passed,
//  it is used to loop through and sum an array of multiple items

function sumTwo(...args){
    // console.log(args)
    let sum = 0;
    for(const arg of args){
        sum = sum + arg;
    }
    return sum;
}

console.log(sumTwo(2, 3, 1, 5, 7))

// selecting only 2 arguments from the array items

function sumTwo(a, b, ...args){
    // console.log(args)
    let multi = a * b;
    let sum = 0;
    for(const arg of args){
        sum = sum + arg;
    }
    return [sum, multi];
}

console.log(sumTwo(2, 3, 1, 5, 7))
