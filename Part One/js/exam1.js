const app1 = angular.module('app1', []);
//angular module function accepts list of modules in [] and an optional configuration, which would come after another comma

app1.controller('ctrl1', function ($scope) {
    //^^^ this is a factory function; gets controller ready to use. scope is a dependency
    //telling angular to auto pass in scope object; example of dependency injection  
    $scope.first = 1;
    $scope.second = 1;

    $scope.updateValue = function () {
        $scope.calculation = $scope.first + ' + ' + $scope.second +
            ' = ' + (+$scope.first + +$scope.second)
        //unary operator + forces string to int here 
    }
})