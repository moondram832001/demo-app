routing.$inject = ['$urlRouterProvider', '$locationProvider','$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider,$stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            template: require('./partial-home.html')
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit   
            url: '/about',
            template: require('./partial-about.html')
        });
  
}