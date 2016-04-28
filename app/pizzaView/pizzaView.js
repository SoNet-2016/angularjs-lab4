'use strict';

angular.module('myApp.pizzaView', ['ngRoute','myApp.pizza'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pizzaView', {
    templateUrl: 'pizzaView/pizzaView.html',
    controller: 'pizzaViewCtrl'
  });
}])
//Inline Array Annotation
    //Here we pass an array whose elements consist of a list of strings (the names of the dependencies)
    // followed by the function itself.
    //When using this type of annotation, take care to keep the annotation array
    // in sync with the parameters in the function declaration.
.controller('pizzaViewCtrl', ['$scope', 'Pizza',
    function($scope, Pizza) {
        Pizza.getData().then(function(data) {
            $scope.pizzas = data;
        });
    }]);