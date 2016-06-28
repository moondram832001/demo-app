routing.$inject = ['$urlRouterProvider', '$locationProvider','$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider,$stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('getDate', {
            url: '/getDate',
            template: require('./partial-get-date.html')
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('getInfo', {
            // we'll get to this in a bit   
            url: '/getInfo',
            template: require('./partial-user-details-form.html'),
            controller: function($scope){
                     var apper = this; 
                    // apper.user = {};
                    // apper.userFields = 
                    // {
                    //   key: 'checked',
                    //   type: 'checkbox',
                    //   templateOptions: {
                    //     label: 'Check me out'
                    //   }
                    // };
                    $scope.button = "hello";
                    $scope.chronicDiseaseOptions = [
                        "Arthritis",
                        "Cancer",
                        "Diabetes"
                    ];

                    $scope.onSubmit = function() {
                        alert("sumit triggered");
                    };
                    
            }
        })
        .state("home", 
        {   
            url : '/home',
            template: require('./partial-home.html')
        }
        )
  
}