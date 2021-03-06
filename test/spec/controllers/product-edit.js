'use strict';

describe('Controller: ProductEditCtrl', function () {

  // load the controller's module
  beforeEach(module('eCommerceAdminApp'));

  var ProductEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductEditCtrl = $controller('ProductEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductEditCtrl.awesomeThings.length).toBe(3);
  });
});
