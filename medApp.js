angular.module("medApp", ["ngRoute"])
  .config(function ( $routeProvider, $locationProvider ) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })

    $routeProvider.when("/form", {
      templateUrl: "/sites/evidation/views/formView.html"
    });

    $routeProvider.when("/npi/:npi", {
      templateUrl: "/sites/evidation/views/listView.html"
    })

    $routeProvider.when("/search", {
      templateUrl: "/sites/evidation/views/searchView.html"
    });

    $routeProvider.otherwise("/form", {
      templateUrl: "/sites/evidation/views/formView.html"
    });
  });
