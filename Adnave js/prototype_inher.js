// prototypal inheritance and the orototype chain 

// ES6 introduced classes which have mordern way to construct objects 

// prototypal inheritance and the prototype chain are :
 // "" under the hood "" , (ES^ classes are considerd as syntactic sugar -> means new easier way of doing something which already existed )


 const parent = {
    alive : true 
 }

 const musician = {
    plays : true 
 }

//  console.log(musician.plays) ;
//  console.log(musician.alive) ;

 musician.__proto__ = parent ;  // it is saying that the the person 
                                // person iis the parent or proto of musician


 // new way of doing this js has getPrototypeOf and setPrototypeOf
 // methods instead of using __proto__

 Object.setPrototypeOf(musician , parent) 
//  console.log(Object.getPrototypeOf(musician));
//  console.log(musician.__proto__);
//  console.log(Object.getPrototypeOf(musician) === musician.__proto__) ;


//   console.log(musician.plays) ;
//   // missing property  ==> go to parent if also not there then ==> go to musician proto ==> if not found go to javascropt object parent of all objects

//  console.log(musician.alive) ;
//  console.log(musician) ;


// Extending the prototype chain ==> general to specific to more specific

const guitarist = {
    strings : 6,
    __proto__: musician
}
// console.log(guitarist.alive)
// console.log(guitarist.plays)
// console.log(guitarist.strings)



// Few thing we must remember about the OBJECTS

// No circular references are allowed (person.__proto__ can't be guitarist)
// The __proto__ valye must be an object or null .
// An object can only directly inherit from one object

// Object with getter ans setter methods .

const car = {
    doors : 2,
    seats : 'vinyl',
    get seatMaterial(){
        return this.seat ;
    },
    set seatMaterial(material){
        this.seats = material;
    }
}

// const luxurycar = {} ;
// Object.setPrototypeOf(luxurycar , car);
// luxurycar.seatMaterial = "leather" ;
// console.log(luxurycar);
// console.log(luxurycar.doors);
// console.log(car);

// // Walking u the chain - props and methods are not copied

// console.log(luxurycar.valueOf()) ;

// // Getting the keys of an Object 

// console.log(Object.keys(luxurycar));

// // loop threugh an object and get each keys

// Object.keys(luxurycar).forEach(key =>{
//     console.log(key)
// });


// // but a for .. in loop includes inherited props 

// for( let key in luxurycar ){
//     console.log(key);
// }


// OBJECT constructors 

// function Animal(species){
//     this.species = species ;
//     this.eats = true ;
// }

// Animal.prototype.walks= function(){ // <== this is used to set an anonymus function that is a method for animal 
//     // if we didn't define that imside original constructor Function 
//     return `A ${this.species} is walking` ;
// };
// // now prototype has a walks that can be inherited prototype is a bucket that contain methods that can we inherited

// const Bear = new Animal("bear");
// console.log(Bear.species);
// console.log(Bear.walks());



// console.log(Bear.__proto__)
// console.log(Bear.__proto__ === Animal.prototype);
// console.log(Animal.prototype);
// console.log(Bear)


// Now an ES6 Classes examples of inheritance .

 class Vehicle {
    constructor(){
        this.wheels = 4 ,
        this.motorized = true
    }
    ready(){
        return 'ready to go' ;
    }
 }

 class Motorcycle extends Vehicle {
    constructor(){
        super();
        this.wheels = 2
    }
    wheelie(){
        return 'on one wheels Now';
    }
 }

 const myBike = new Motorcycle();
 console.log(myBike);
 console.log(myBike.wheels);
 console.log(myBike.ready());
 console.log(myBike.wheelie());