angular.module('carFire')
.controller('carsCtrl', function($scope, $firebaseObject, $firebaseArray, carsRef) {
  $scope.cars = carsRef;

  $scope.newCar = function() {
    $scope.cars.$add($scope.newCar);
  }
})
