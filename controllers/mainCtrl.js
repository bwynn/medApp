angular.module("medApp")
  .controller("mainCtrl", function ( $scope, $http, $location, $route, $routeParams ) {

    $http.get("/sites/evidation/assets/data/data.json")
      .success(function( response ) {
        $scope.results = response.results;
      });

    $scope.users = [
      { "firstname": "Brian", "lastname": "Wynn", "city": "Los Gatos" }
    ];

    // happy to do this as well with a true POST to a server, but
    // can't post to a non-existent server, so in this example I have formatted
    // the response to add to the users array, simulating a json file.
    $scope.submitForm = function(user) {
      JSON.stringify( user );
      $scope.users.push(user);
      console.log( user );
      $location.path("/search");
    }

    // A post could look like this
    /* as $scope.submitForm = function() {
        $http.post(url, obj).success(function( data ) {
          $scope.users = data;
        });
    }*/

    // Or perhaps also like this
    /*
    $scope.submitForm = function() {
      $http({
        method: "POST",
        url: "/url/path/here",
        data: $.param($scope.users)
      })
      .success(function ( data ){
        if (!data.success) {
          // throw errors
        }
        else {
          // success message 
        }
      });
    }
     */

    $scope.selectedPage = 1;
    $scope.pageSize = 3;

    $scope.selectPage = function( newPage ) {
      $scope.selectedPage = newPage;
    }

    $scope.getPageClass = function( page ) {
      return $scope.selectedPage == page ? productListActiveClass : "";
    }

    $scope.viewDetails = function( result ) {
      JSON.stringify( result );
      console.log( result );
    }

    $scope.$on("$routeChangeSuccess", function() {
       if ($location.path().indexOf("/npi/") == 0) {
         var npi = $routeParams["npi"];
         for (var i = 0; i < $scope.results.length; i++) {
           if ( $scope.results[i].npi == npi) {
             $scope.currentNpi = $scope.results[i];
             break;
           }
         }
       }
    });

  });
