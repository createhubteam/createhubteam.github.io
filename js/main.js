var app = angular.module('myAngularApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/index", {
    templateUrl : "linesorter.html",
    controller: "mainController"
  })
  .when("/sort", {
    templateUrl : "sort.html",
    controller: "sortController"
  })
});
