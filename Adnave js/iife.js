// IIFE -> Immediately Invoked Function Expression 

// pronounce iffy 

// variations =>

// anonymous arrow unction inside 

(() => {
    ///........
})();

// Withe the unction keyword inside

(function (){
    // ......
})();

// With a function name that allows recursion

(function iify() {
    num++;
    console.log(num);
    return num !== 5 ? iify(num) : console.log("finished") ;
})(num = 0);


// Reasons for using IIFEs 
// 1-> does not pollute global object namespace 

// const x = "sachin";
// const helloworld = () => "Hello World";

// // isolate declareations within the function 

// (() => {
//     const x = "Pachouri";
//     const helloworld = () => " Alive Again " ;
//     console.log(x);
//     console.log(helloworld());
// })();

// console.log(x) ;
// console.log(helloworld()) ;

// this create namespace 

// 2-> Private variables and methods from a closure 

const increment = (() => {
    let counter = 0 ;
    console.log(counter) ;
    const credits = (num) => console.log(`I have ${num} credits`);
    return () => {counter++ ; credits(counter);} 
})();

increment();
increment();
increment();
console.log(increment.credits) ; // cannot directly access creditsfunction or counter variabe reference error


// 3-> the module pattern 
 const score = (() => {
    let c = 0 ;

    return {
        current : () => {return c ;},
        increment : () => {c++;},
        reset : () => {c=0;}
    }
 })();

 score.increment();
 console.log(score.current());
 score.increment();
 console.log(score.current());
 score.reset();
 console.log(score.current());
 score.increment();
 console.log(score.current());
 score.increment();
 console.log(score.current());
 // for using this keyword we have to make normal unction unlike arrow functions


 let ar = [1,2,3,4];
 
 ar.push([10,11,12]);
 let br = [...ar ];
 br.push([13,14,15]);
 console.log(ar);
 console.log(br);