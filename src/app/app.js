import angular from 'angular';
import formly from 'angular-formly';
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
  constructor() {
    this.url = 'http://www.google.co.in';
    this.dt = new Date();
    this.button = "hello";
    
    this.options = {
    //minDate: new Date(),
    showWeeks: false,
    
  };
    
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter,datepicker,formly])
  .config(routing) 
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;