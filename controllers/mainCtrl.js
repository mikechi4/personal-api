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
      } else if(order==='desc'){
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

  }
}
