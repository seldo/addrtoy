let parse = require('csv-parse')
let fs = require('fs')

var filename = process.argv[2]

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  parse(data,{columns:true},(er,stuff) => {
    console.log(stuff)
  })
})
