// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs')

fs.readFile('./a.txt', 'utf-8', (error, data) => {
    console.log(data)
    const cleanedData = data.replace(/\s+/g, ' ').trim()

    fs.writeFile('./a.txt', cleanedData, (err) => {});

    fs.readFile('./a.txt', 'utf-8', (error, data) => {
        console.log(data);
    })
})



