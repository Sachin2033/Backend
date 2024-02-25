// Shallow copy vs deep copy



                    // shallow copy


// let xArray = [1,2,3,4];
// let yArray = xArray ;
// const zArray = [...yArray , 1090] ;
// console.log(zArray);

// console.log(xArray === yArray);
// console.log(yArray === zArray) ;

// // With Object.assign()
// const tArray = Object.assign([] , zArray)
// console.log(tArray);
// console.log(tArray === zArray) ;

// But if there are nested arrays or objects it shares the reference 
// so changing one can change originalone

// yArray.push([1,2,3]);
// const vArray = [...yArray] ;
// vArray[4].push(5);
// console.log(vArray);
// console.log(yArray) ;

// nested structural data types still share a reference 
// shallow copy does not go levels deep when it comes to structural datatype

// when it comes to objects 
// .... Objects.freez()  ?? 

const scoreObj = {
    'f' : 44,
    's' : 30,
    't' : {"a" : 1 , "b" : 2}
}
Object.freeze(scoreObj);
scoreObj.t.a = 900 ;
console.log(scoreObj.t.a);

// Still muatates  -> it is a shallow freez 

// How to stop this 