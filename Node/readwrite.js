const fsPromises = require('fs').promises;
const path = require('path');
const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname ,  'starter.txt') , 'utf-8');
        console.log(data) ;
    }catch(err){
        console.error(err);
    }
}
fileOps();
// adding this comment --









// fs.readFile(path.join(__dirname ,  'starter.txt'), 'utf-8' , (err,data) => {
// // fs.readFile('./starter.txt', 'utf-8' , (err,data) => {
//     if(err) throw err ;
//     console.log(data);
// });

// console.log('Hello...') ;


// fs.writeFile(path.join(__dirname ,  'reply.txt'), 'Nice to meet you ...' , (err) => {
//     // fs.readFile('./starter.txt', 'utf-8' , (err,data) => {
//         if(err) throw err ;
//         console.log("Operation Completed...");

//         fs.appendFile(path.join(__dirname ,  'reply.txt'), '\n\n\n\n\nYes same here pal !!!...' , (err) => {
//             // fs.readFile('./starter.txt', 'utf-8' , (err,data) => {
//                 if(err) throw err ;
//                 console.log("Testing  Completed...");
//             });

//     });




// exit on errors ->
process.on('uncaughtException' , err => {
    console.error(`There was an uncaught error : ${err}`);
    process.exit(1);
});