var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(middleware.addHeaders);
app.use(bodyParser.json());

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupation', mainCtrl.getOccupation);
app.get('/occupation/last', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyByGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:restName', mainCtrl.getRestaurantsByName);

app.put('/name/:newName', mainCtrl.updateName);
app.put('/location/:newLocation', mainCtrl.updateLocation);

app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupation/:job', mainCtrl.addOccuption);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurant);

var port = 3000;
app.listen(port, function(){
  console.log("Connected to " + port);
})
