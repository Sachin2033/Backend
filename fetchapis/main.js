// fetch API requires a discussion of callbacks , promises , thenables , and async/await

// Promises

//   3 states -> Pending , Fulfilled , Rejected

const myPromise = new Promise((resolve , reject) => {
    const error = false ;
    if(!error){
        resolve("Yes , resolve the promise")
    }else{
        reject("No , reject the promise")
    }

});

// console.log(myPromise);

// myPromise
// .then(value => {
//     return value + 1 ;
// })
// .then(newValue => {
//     console.log(newValue);
// })
// .catch(err => {
//     console.error(err);
// })

// requisting data from another site or server 
// fetch APIs

// delaying execution of code


// const mynextPromise = new Promise((resolve , reject) => {
//     setTimeout(function(){
        
//             resolve("Yes nextPromise , resolve the promise")
       
//     }, 3000);

// });

// mynextPromise
// .then(value => {
//     console.log(value);
// });

// myPromise
// .then(value => {
//     console.log(value);
    
// });
// Although next promise is called first but delay leads to its execution after 3 sec

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// Pending
// console.log(users);
// const users = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response =>{
//     // console.log(response)
//     return response.json();
// })
// .then(data =>{
//     data.forEach(user => {
//         console.log(user);
//     })
// });

// console.log(users); // This line does not wait for the above code
// it runs first and then above code runs after it comes again with data fetched


// Async And Await

/*Synchronous or Synchronized means "connected", or "dependent" in some way. In other words, two synchronous tasks must be aware of one another, and one task must execute in some way that is dependent on the other, such as wait to start until the other task has completed.
Asynchronous means they are totally independent and neither one must consider the other in any way, either in the initiation or in <execution */

const myusers = {
    userList : []
}

// const myFunc = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const jsonUserdata = await response.json();
//     return jsonUserdata ;
// }

// myFunc();

// const anotherFunc = async () => {
//     const data = await myFunc() ;
//     // console.log(data);
//     myusers.userList = data ;
//     console.log(myusers.userList);
// }
// const te = () => {
//     return "Sachin Pachouri Comes Last But Achieved Soo Much";
// }
// anotherFunc();
// const s = async () => { 
// const t = await te();
// const y = await t;
// return y ;

// }
// const r = async () => {
//     const data = await s() ;
   

// }
// r();
// console.log("MAY YOUR DREAMS COMES TRUE VERY SOON") ;
// console.log(myusers.userList);

        //                              EXAMPLES ************************
// Workflow Function 
// const getAlluserEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const jsonUserdata = await response.json();

//     const userEmailArray = jsonUserdata.map(user => {
//         return user.email ;
//     });
//     // console.log(userEmailArray);
//     // return userEmailArray ;
//     postToWebPage(userEmailArray)
// } 
// const postToWebPage = (data) => {
//     console.log(data);
// }
// getAlluserEmails() ;





// IN THIS EXAMPLE -> EXPAND ON FETCH -> 2ND PARAMETER OF FETCH IS A OBJECT 

// const getDadJoke = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/" , {
//         method : "GET",
//         headers: {
//             Accept : "application/json"
//         }
//     });
//     const jsonJokeData = await response.json() ;
//     console.log(jsonJokeData);
// }
// getDadJoke();
// changing  
// const getDadJoke = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/" , {
//         method : "GET",
//         headers: {
//             Accept : "text/plain"
//         }
//     });
//     const textJokeData = await response.text() ;
//     console.log(textJokeData);
// }
// getDadJoke();

// USING POST ****************************

const jokeObject = {
    id: '4TKukj3gyAd',
    joke: 'Yesterday, I accidentally swallowed some food coloring. The doctor says I’m okay, but I feel like I’ve dyed a little inside.'
  }

const postData = async (jokeObject) => {
    const response = await fetch("https://httpbin.org/post" , {
        method : "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(jokeObject)
    });
    const jsonResponse = await response.json() ;
    console.log(jsonResponse);
}
postData(jokeObject);

