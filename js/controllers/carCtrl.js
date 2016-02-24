angular.module('carFire')
.controller('carCtrl', function($scope, $firebaseObject, $firebaseArray, carRef, commentsRef) {
  $scope.car = carRef;
  $scope.comments = commentsRef;

  $scope.makeComment = function() {
    $scope.newComment.timestamp = new Date().toString();
    $scope.comments.$add($scope.newComment);
  }
})
