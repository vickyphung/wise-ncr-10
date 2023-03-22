// // Load express
// const express = require('express');

// // Create our express app
// const app = express();

// // Define a "root" route directly on app
// // Tomorrow, we'll use best practice routing
// app.get('/', function (req, res) {
//   res.send('<h1>Hello World!</h1>');
// });

// // Tell the app to listen on port 3000
// // for HTTP requests from clients
// app.listen(3000, function () {
//   console.log('Listening on port 3000');
// });




// const express = require('express');
// const app = express();
// const port = 3000;

// const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

// app.get('/:indexOfPlantsArray', (req, res) => {
//     res.send(plants[req.params.indexOfPlantsArray]);
// });

// app.listen(port,() => {
//     console.log('listening on port' , port);
// });



// const express = require('express');
// const app = express();
// const port = 3000;

// const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam',  "Witches' Butter",];
// app.get('/awesome', (req, res) => { //this will never be reached
//     res.send(`
//       <h1>Plants are awesome!</h1>
//       <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
//     `);
//   });
  
// app.get('/:indexOfPlantsArray', (req, res) => { //:indexOfPlantsArray can be anything, even awesome
//     res.send(plants[req.params.indexOfPlantsArray]);

// });



// app.get('/hello/:firstname/:lastname', (req, res) => {
// 	console.log(req.params);
// 	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
// });


// app.get('/howdy/:firstName', function(req, res) {
//     console.log(req.params);
//     console.log(req.query);
//     res.send('hello ' + req.query.title + ' ' + req.params.firstName);
//   });


// app.listen(port,() => {
//     console.log('listening on port' , port);
// });




const express = require('express');
const app = express();

// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];

// app.get('/fruits/', (req, res) => {
//     res.send(fruits);
// });

// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.send(fruits[req.params.indexOfFruitsArray]);
// });



const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine



app.get('/', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
  })
  
  app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
  })
  
  app.get('/another-one', (req, res) => {
    res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
  })


app.listen(3000, () => {
    console.log('listening');
})