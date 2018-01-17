const express = require('express')
const parse = require('csv-parse')
const fs = require('fs')
const nunjucks = require('nunjucks')

const app = express()

// configure the HTTP server and basic templating
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true // nice for dev mode
})

app.get('/', function(req, res) {
  // read the data from the file
  // so the file gets re-read every time you hit the page
  // inefficient but who cares
  let filename = process.argv[2]
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    parse(data,{columns:true},(er,data) => {

      // render a page with the parsed data
      res.render('index.html',{
        Object,
        title: "Woo",
        data
      })
    })
  })
})

app.listen(3000, () => console.log('Listening on port 3000'))
