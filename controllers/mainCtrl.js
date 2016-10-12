var user = require('../user.js');

module.exports = {
  getName: function(req, res, next) {
    res.status(200).json(user.name);
  },

  getLocation: function(req, res, next){
    res.status(200).json(user.location);
  },

  getOccupation: function(req, res, next){
    res.status(200).json({Occupation: user.occupations});
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
        console.log('we have a match!!!!!')
        return value;
      }
    })
    res.status(200).json(selectedType);
  }
}
