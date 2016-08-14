'use strict';

/**
 * @ngdoc function
 * @name eCommerceAdminApp.controller:CategoriesAddCtrl
 * @description
 * # CategoriesAddCtrl
 * Controller of the eCommerceAdminApp
 */
angular.module('eCommerceAdminApp')
  .controller('CategoriesAddCtrl',[
    'Category',
    "$scope",
    "$location",
    "$routeParams",
    "sessionService",
    function(Category, $scope, $location, $routeParams, sessionService) {
      var _this = this;
      _this.title = "Add Categories";
      Category.getApprovedCategories.get(function(data) {
        if (data.status == "success") {
          _this.categories = data.response.categories;
        } else {
          _this.notify = {
            message: data.statusMessage,
            status: data.status,
            type: "danger"
          }
        }
      }, function(data) {
        _this.notify = {
          message: data.statusText,
          status: data.status,
          type: "danger"
        }
      });
      _this.saveCategory = function() {

        var addSingle = Category.addSingle;
        addSingle = new addSingle(_this.category);
        addSingle.$create(function(data) {
          if (data.status == "success") {
            _this.notify = {
              message: "Created Successfully",
              status: data.status,
              type: "success"
            }
          } else {
            _this.notify = {
              message: data.statusMessage,
              status: data.status,
              type: "danger"
            }
          }
        }, function(data) {
          _this.notify = {
            message: data.statusText,
            status: data.status,
            type: "danger"
          }
        })
      }
    }]);
