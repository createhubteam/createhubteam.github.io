var app = angular.module('myAngularApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "linesorter.html"
  })
  .when("/sort", {
    templateUrl : "sort.html"
  })
});
</script>
app.controller('mainController', function($scope) {
  $scope.homePageMsg = "Welcome to Basics of CSE!!!";
});
