import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';

import uirouter from 'angular-ui-router';
import routing from './config';
import datepicker from './angular-ui-bootstrap/src/datepicker';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($http,Utils) {
    
    this.dt = new Date();
    this.$http = $http;
    this.formattedDate = Utils.formatDate(this.dt);
  
    let App = this;

    let today = new Date();

    let month = today.getMonth();
    let year = today.getFullYear();
    this.$http.get('/api/dates/booked/' + month + "/" + year).then(function(response){
            //App.dt = new Date();
            console.log(response.data);
            let dateList = response.data;

            App.options = {
              minDate: new Date(),
              showWeeks: false,
              dateDisabled: function disabled(data) {
              var date = data.date,
                mode = data.mode;
              return mode === 'day' && dateList[date.getDate()];           
             }
        
           };
    })

    this.getFormattedDate = function(date){
      console.log("calling");
      App.formattedDate = Utils.formatDate(date);
    }

    


    // this.$http.get('/api/dates/unavailable').then(function(response){
    //   console.log(response);
    //      App.$scope.options = {
    //       showWeeks: false,
    //       dateDisabled: function disabled(data) {
    //       var date = data.date,
    //         mode = data.mode;
            
    //       return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    //      }
    
    //    };
    // })

    // this.options = {
    //   //minDate: new Date(),
    //       showWeeks: false,
    //       dateDisabled: function disabled(data) {
    //       var date = data.date,
    //         mode = data.mode;
            
    //       return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    //      }
    
    //    };
   
    // this.$scope.$watch(() => this.dt, function (newVal) {
    //     console.log('Name changed to ' + newVal);
    // });
    
  }
}

AppCtrl.$inject = ['$http','Utils'];

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter,datepicker])
  .config(routing) 
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .service('Utils', function(){
      this.formatDate = function (date) {
            console.log("called",date);
            var monthNames = [
              "January", "February", "March",
              "April", "May", "June", "July",
              "August", "September", "October",
              "November", "December"
            ];

        
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();

            return [day, monthNames[monthIndex], year].join('-');
      }
   });;

export default MODULE_NAME;