'use strict';

/**
 * @ngdoc function
 * @name eCommerceAdminApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the eCommerceAdminApp
 */
angular.module('eCommerceAdminApp')
  .controller('ProductCtrl', ['Product', "$scope", "$location", "sessionService", function(Product, $scope, $location, sessionService) {
    var _this = this;
    var getAllProducts = Product.getAllProducts;
    var gAP = new getAllProducts();
    gAP
      .$get(function(data) {
        var response = data.response;
        if (data.status == "success") {
          _this.product_list = response.products;
        }
      }, function(data) {
        var response = data.response;
        if (data.status == "401") {
          sessionService.destroy('token');
          $location.path("/login");
        }
        _this.notify = {
          message: response.statusMessage,
          status: response.status,
          type: "danger"
        }
      });
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
      $('#example2').DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false
      });
    });
  }]);
