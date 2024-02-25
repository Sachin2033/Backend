// currying takes a function that recieves more then one parameter and 
// breaks it into a series of unary (one parameter ) functions



// therefore curried function takes only one parameter at a time


const buildSandwich = (ingredients) =>{
    return (ingredient1) =>{
        return (ingredient2) => {
            return (ingredient3) =>{
                return( `${ingredient1} , ${ingredient2} , ${ingredient3}`);
                
            }
        }
    }
}


const sandwich = buildSandwich('Bacon')('tomato')('cheez');
console.log(sandwich);

const multiply = (first) =>{
    return (second) => {
        console.log(first*second);
        return first*second ;
    }
}
multiply(2);
multiply(2)(3);