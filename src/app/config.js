routing.$inject = ['$urlRouterProvider', '$locationProvider','$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider,$stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('getDate', {
            url: '/getDate',
            template: require('./partial-get-date.html'),
            controller: function($scope,$http){
              //   let today = new Date();

              //   let month = today.getMonth();
              //   let year = today.getFullYear();
              //   $http.get('/api/dates/booked/' + month + "/" + year).then(function(response){
              //           $scope.dt = new Date();
              //           $scope.options = {
              // //minDate: new Date(),
              //             showWeeks: false,
              //             dateDisabled: function disabled(data) {
              //             var date = data.date,
              //               mode = data.mode;
                            
              //             return mode === 'day' && (date.getDay() === 0 || date.getDay() === 5);
              //            }
                    
              //          };
              //   })
                
   }
          //  var 
            // $scope.$watch(() => $scope.dt, function (newVal) {
            //     console.log('Name changed to ' , $scope);
            //         $scope.options = {
            //       //minDate: new Date(),
            //       //    showWeeks: false,
            //           dateDisabled: function disabled(data) {
            //           var date = data.date,
            //             mode = data.mode;
                        
            //           return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
            //          }
                
            //        };
            //     // $state.reload();
            // });

            // }

       
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('getInfo', {
            // we'll get to this in a bit   
            url: '/getInfo',
            template: require('./partial-user-details-form.html'),
            controller: function($scope){
                     var apper = this; 
                   
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