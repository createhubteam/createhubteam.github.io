var app = angular.module('myAngularApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/linesorter.html", {
    templateUrl : "linesorter.html",
    controller: "mainController"
  })
  .when("/sort", {
    templateUrl : "sort.html",
    controller: "sortController"
  })
});

app.controller('mainController', function($scope) {
  $scope.homePageMsg = "Welcome to Basics of CSE!!!";
});
