const express = require('express')

const app = express();

app.get('/', function (req, res){
    res.send('<h1>Hello WISE!</h1>')
})

app.get('/home', function (req, res){
    res.send('<h1>Home Page</h1>')
})


// const fs = require('fs') // this engine requires the fs module like we did Saturday
// app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
//   fs.readFile(filePath, (err, content) => {
//     if (err) return callback(err)
//     // this is an extremely simple view engine we'll be more complex later
//     const rendered = content.toString()
//       .replace('#title#', '<title>' + options.title + '</title>')
//       .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
//     return callback(null, rendered)
//   })
// })
// app.set('views', './views') // specify the views directory
// app.set('view engine', 'madeline') // register the hypatia view engine


// app.get('/', (req, res) => {
//     res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
//   })
  
//   app.get('/about-me', (req, res) => {
//     res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
//   })
  
//   app.get('/another-one', (req, res) => {
//     res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
//   })

app.listen(3000, function (){
    console.log("Listening on port 3000")
})

