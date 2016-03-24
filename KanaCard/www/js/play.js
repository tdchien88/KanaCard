// This is a JavaScript file
var app = angular.module('kanaCardApp', []);
app.controller('FirstCtrl', function ($scope) {
    $scope.question = "x";
    $scope.click1 = function () {
        $scope.question = "A";
    }
    $scope.click2 = function () {
        $scope.question = "I";
    }
    $scope.click3 = function () {
        $scope.question = "U";
    }
    $scope.click4 = function () {
        $scope.question = "O";
    }
});



