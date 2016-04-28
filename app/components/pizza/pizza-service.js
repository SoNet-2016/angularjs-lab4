
'use strict';

angular.module('myApp.pizza.service', [])
.factory('Pizza', function($http) {
    var pizzaService = {
        getData: function () {
            return $http.get('../data/pizzas.json').then(function (response) {
                return response.data;
            });
        }
    }
    return pizzaService;
})