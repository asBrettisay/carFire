describe('carFire', function() {
  beforeEach(module('carFire'))

  describe('carsCtrl', function() {

    var controller, carsService, scope
    beforeEach(inject(function($controller, _carsService_, $rootScope) {
      scope = $rootScope.$new();
      controller = $controller('carsCtrl', { $scope: scope })
      carsService = _carsService_

    }))

    it('should create cars and bind them with Firebase', function() {
      var car = {
        year: '1988',
        make: 'BMW',
        model: "528e",
        mileage: "300,000",
        price: "$5"
      }

      
    })
  })


})
