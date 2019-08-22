const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));
//Handlebars
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// our first Route:
  app.get('/', (request, response, next) => {
    //response.sendFile(__dirname + '/views/home-page.hbl');
    response.render("home-page", {
        users: ["Martin", "Hendrik", "Jaime"]
    })
  });
  
  // cat route:
  app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html');
  });

  // dog route:
  app.get('/dog', (request, response, next) => {
    response.sendFile(__dirname + '/views/dog-page.html');
  });

// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });