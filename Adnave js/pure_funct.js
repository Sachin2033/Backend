// mutable vs immutable functions

// primitives are immutable 

let name = 'sachin';
name[0] = 'u';
console.log(name);

// reassignment is not the same as mutable

name = 'uachin';
console.log(name) ;

// Structures ;contain mutable data 
let xArray = [1,2,3,4];
let yArray = xArray ;
yArray.push(113);
yArray[0] = 9 ;
// console.log(xArray);


// Pure functions required to avoide mutating the data

// Impure function that mutate data 
const addTo = (arr , score) => {
    arr.push(score);
    return arr ;
}

const scoreArr = [44 , 55 , 66 , 33 , 22 , 99];
// console.log(addTo(scoreArr , 890));

// This mutates the original arra 
// considerd to be side effect 

// NOTICE -> "const" cannot makes the array immutable
// we cannot reassign the array But we can changr the array 


// pure functions ->
//  part of functional programming paradigm 
// why write Pure functions ?
// clean code 
// easy to test 
// eazy to debug
// independent
// could be added to utilityu functions

// Rules for oure functions 
// the same inout gives always same OUTPUT
// A pure function must have at least one parameter

// Otherwise , it is the same as a constant because they an only work with their input
// No side Effects -> accessing the scope outside the function makes the function impure


const add = (x , y) => x+y ;
console.log(add(2,3)) ;

// We can replace the function with the output -> called -> 'referential transparency

const z = 9 ;
const sum = (x , y) => {
    return x+y+z ;
}
console.log(sum(3,7)) ;

// Pure funct cannot ==> 
// Access the database  , apis , file system  , storage  etc 
// modiefy the dom 
// even log to the console 

// clearly the impure functions are necessary but they are hard to test and debug
// no input state can be modified that is no data should be mutated

// Pure function always return something 