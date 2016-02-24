angular.module('carFire')
.service('carsService', function($firebaseArray, $firebaseObject, $stateParams) {

  var getRoot = function() {
    return new Firebase("https://blinding-inferno-927.firebaseio.com/")
  }

  var ref = getRoot();

  var cars = ref.child('cars');

  this.getCars = function() {
    return $firebaseArray(cars)
  }

  this.getCar = function(carId) {
    return $firebaseObject(cars.child(carId));

  }

  this.getComments = function(carId) {
    return $firebaseArray(cars.child(carId).child('comments'))
  }

})
