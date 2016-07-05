'use strict';

var Utils = require('./utils');

module.exports = function(app) {

	app.get('/api/dates/booked/:month/:year', function(req, res) {
		
        var month = req.params.month;
        var year = req.params.year;
        var bookedDatesHash = {};
        
        for(var i = 0 ; i < 7 ; i++){
        	var randomDate = Utils.randomDate(new Date(year, month, 1),new Date(year, month + 1, 1));
        	bookedDatesHash[randomDate.getDate()] = "1";
        }
        res.json(bookedDatesHash);
    });

   app.get('/api/chronicDiseaseList', function(req, res) {
               
        res.json([
                        "Arthritis",
                        "Cancer",
                        "Diabetes",
                        "Asthma",
                        "Cystic Fibrosis",
                        "Alzheimer's Disease",
                        "None"
                 ]);
   });


}

