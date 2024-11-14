// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs');

fs.writeFile('./a.txt', "hello from 4-write-to-file.js", (err) => {
    if(err) {
        console.log("error", err)
    } else {
        console.log("content written successfully");
    }
})

fs.readFile('./a.txt', 'utf-8', (err, data) => {
    console.log(data);
})