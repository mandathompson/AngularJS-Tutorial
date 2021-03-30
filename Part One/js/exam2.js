const app2 = angular.module('app2', []);

app2.controller('ctrl1', function ($scope) {

    $scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
    $scope.randomNum2 = Math.floor((Math.random() * 10) + 5);


})


app2.controller('badCtrl', function ($scope) {

    const badFeelings = ["Angry", "Upset", "Pissed off", "Rejected"];

    $scope.bad = badFeelings[Math.floor((Math.random() * 4))];


})



app2.controller('goodCtrl', function ($scope) {

    const goodFeelings = ["Happy", "Energized", "Awesome", "Amazing"];

    $scope.good = goodFeelings[Math.floor((Math.random() * 4))];


})