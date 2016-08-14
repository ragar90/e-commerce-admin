'use strict';

/**
 * @ngdoc function
 * @name eCommerceAdminApp.controller:CategoriesEditCtrl
 * @description
 * # CategoriesEditCtrl
 * Controller of the eCommerceAdminApp
 */
angular.module('eCommerceAdminApp')
  .controller('CategoriesEditCtrl',[
    'Category',
    "$scope",
    "$location",
    "$routeParams",
    "sessionService",
    function(Category, $scope, $location, $routeParams, sessionService) {
      var _this = this;
      _this.title = "Edit Categories";
      var getSingleCategory = Category.getSingleCategory;
      new getSingleCategory({id: $routeParams.id}).$get(function(data) {
        if (data.status == "success") {
          _this.category = data.response.product;
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
        var updateCategory = Category.updateCategory;
        updateCategory = new updateCategory(_this.category);
        updateCategory.$update({id: $routeParams.id}, function(data) {
          if (data.status == "success") {
            _this.notify = {
              message: "updated Successfully",
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
