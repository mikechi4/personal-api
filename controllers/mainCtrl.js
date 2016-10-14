var user = require('../user.js');

module.exports = {
  getName: function(req, res, next) {
    res.status(200).json(user.name);
  },

  getLocation: function(req, res, next){
    res.status(200).json(user.location);
  },

  getOccupation: function(req, res, next){
    //add ordering to occupation
    var order = req.query.order;
    console.log('order ' +order)
    var occupations = user.occupations;
      if(order === 'asc'){
        console.log('asc')
        return res.send({Occupation: user.occupations.sort()});
      } else if(order ==='desc'){
          return res.send({Occupation: user.occupations.reverse()});
          console.log('DESC@@')
      } else {
        res.status(200).json({Occupation: user.occupations});
      }
  },

  getLatestOccupation: function(req, res, next){
    var occupations = req.body.occupations;
    var latestOccupation = user.occupations.slice(user.occupations.length - 1);
    res.status(200).json({latestOccupation});
  },

  getHobbies: function(req, res, next){
    res.status(200).json(user.hobbies);
  },

  getHobbiesByType: function(req,res,next){
    var hobbyType = req.params.type;
    var selectedType = user.hobbies.filter(function(value){
      if(hobbyType === value.type){
        return value;
      }
    })
    res.status(200).json(selectedType);
  },

  getFamily: function(req, res, next) {
    res.status(200).json({Family: user.family})
  },

  getFamilyByGender: function(req, res, next){
    var gender = req.params.gender;
    var returnMembers = user.family.filter(function(value){
      if(gender === value.gender){
        return value;
      }
    })
    res.status(200).json(returnMembers);
  },
// NEED TO FIX
  getRestaurants: function(req, res, next){
    var rating = req.query.rating;
    // var findRestaurants = function(value){
    //   user.rating
    // }
    res.status(200).json(user.restaurants)
  },
//NEED TO FIX
  getRestaurantsByName: function(req, res, next){
    var restName = req.params.restName;
    var restaurant = user.restaurants.filter(function(value){
      if(restName === value.name){
        return value;
      }
    })
    res.status(200).json(restaurant);
  },

  updateName: function(req, res, next) {
    var newName = req.params.newName;
    user.name = newName;
    res.end();
  },

  updateLocation: function(req, res, next) {
    var newLocation = req.params.newLocation;
    user.location = newLocation;
    res.end();
  },

  addHobby: function(req, res, next){
    var hobbyName = req.query.name;
    var hobbyType = req.query.type;
    var newHobby ={
      name: hobbyName,
      type: hobbyType
    };
    user.hobbies.push(newHobby);
    res.end();
  },

  addOccuption: function(req, res, next){
    var newOcc = req.params.job;
    user.occupations.push(newOcc);
    console.log("new job! " +newOcc)
    res.end();
  },

  addFamily: function(req, res, next){
    var name = req.query.name;
    var relation = req.query.relation;
    var gender = req.query.gender;
    var newFamily ={
      name: name,
      relation: relation,
      gender: gender
    };
    user.family.push(newFamily);
    res.end();
  },

  addRestaurant: function(req, res, next){
    var name = req.query.name;
    var type = req.query.type;
    var rating = req.query.rating;
    var newRestaurant ={
      name: name,
      type: type,
      rating: rating
    };
    user.restaurants.push(newRestaurant);
    res.end();
  }
}
