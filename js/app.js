angular.module('carFire', ['ui.router', 'firebase'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/cars');

  $stateProvider
    .state('cars', {
      url: '/cars',
      templateUrl: '/js/views/cars.html',
      controller: 'carsCtrl',
      resolve: {
        carsRef: function(carsService) {
          return carsService.getCars();
        }
      }
    })
    .state('car', {
      url: '/car/:carId',
      templateUrl: 'js/views/carId.html',
      controller: 'carCtrl',
      resolve: {
        carRef: function(carsService, $stateParams) {
          return carsService.getCar($stateParams.carId);
        },
        commentsRef: function(carsService, $stateParams) {
          return carsService.getComments($stateParams.carId);
        }
      }
    })
})
