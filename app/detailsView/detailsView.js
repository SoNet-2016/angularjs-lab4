'use strict';

angular.module('myApp.detailsView', ['ngRoute','myApp.pizza'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pizzas/:pizzaId', {
    templateUrl: 'detailsView/detailsView.html',
    controller: 'detailsViewCtrl'
  });
}])
//Inline Array Annotation
    //Here we pass an array whose elements consist of a list of strings (the names of the dependencies)
    // followed by the function itself.
    //When using this type of annotation, take care to keep the annotation array
    // in sync with the parameters in the function declaration.
.controller('detailsViewCtrl', ['$scope', '$routeParams', 'Pizza',
    function($scope, $routeParams, Pizza) {
        Pizza.getData($routeParams.pizzaId).then(function(data) {
            $scope.pizza = data;
        });
    }]);