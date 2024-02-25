// lexical scope defines how variable names are resolved in nested functions .
// nested(child) functions have access to the scope of their parent functions .
// this is often confused with closure , but lexical scope is omly imp part of the closure .


// let x = 1 ;

// const parentFunction = ()=>{
// // local sacope 
// let val = 2 ;
// console.log(x) ;
// console.log(val) ;
// const childFunction = () =>{
//     console.log(x += 5) ;
//     console.log(val += 1) ;
// }

// childFunction() ;

// }

// parentFunction() ;


// the above example shows the lexical scope where the child function can access the parent function variables .

// Now the closure -> " A closure is a function having access to the parent scope ,
//   even after the parent function has closed " .


let x = 1 ;

const parentFunction = ()=>{
// local sacope 
let val = 2 ;
console.log(x) ;
console.log(val) ;
const childFunction = () =>{
    console.log(x += 5) ;
    console.log(val += 1) ;
}

return childFunction ;

}

// const result = parentFunction() ;
// console.log(result) ;
// result() ;
// result() ;
// result() ;

// console.log(x) ;
// console.log(val) ; // reference error , private variable .


// Another example is IIFE (Immediately Invoked Function Expression )

// const func = (() =>{
// let count = 0 ;  // this variable is a private variable and thiks is called 
//       // using the anonymus functioin which is returned here

// console.log(`initial value: ${count}`) ;
// return ()=>{ count+=1; console.log(count)} ; // this is anonymus funcioin
// })();

// func() ;
// func() ;
// func() ;


// Another example 

const credit = ((num) =>{
 let credits = num ;
 console.log(`initial credits value is : ${credits}`) ;
 return () => {
    credits -= 1 ;
    if(credits > 0) console.log(`playing game , ${credits} credits remaining `) ;
    if(credits <= 0) console.log('credits not enough') ;
 }
})(4);

credit();
credit();
credit();
credit() ;