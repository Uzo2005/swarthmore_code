const data = require('./data')
const fs = require("fs")

// const arrayFromData = [...data];

let b = data.match(/(.{1,8})/g);

let c = b.toString()

let newString = c.replace(/[ ,]+/g, " ");

fs.writeFile("output.txt", JSON.stringify(newString, null, 2), (err  => {
    if(err){
        console.log(err)
    }
}))
