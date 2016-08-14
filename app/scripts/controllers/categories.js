'use strict';

/**
 * @ngdoc function
 * @name eCommerceAdminApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the eCommerceAdminApp
 */
angular.module('eCommerceAdminApp')
  .controller('CategoriesCtrl', ["Category", function (Category) {
    var _this = this;
    _this.title = "View Categories";
    Category.getApprovedCategories.get(function(data) {
      if(data.status == "success") {
        _this.categories = data.response.categories;
      }
      else {
        _this.notify = {
          message: data.statusMessage,
          status: data.status,
          type: "danger"
        }
      }
    }, function (data) {
      _this.notify = {
        message: data.statusText,
        status: data.status,
        type: "danger"
      }
    });
    _this.remove = function (id, index) {
      Category.deleteSingle.remove({id:id}, {}, function(data) {
        if(data.status == "success") {
          _this.notify = {
            message: "Deleted Succesfully",
            status: data.status,
            type: "success"
          }
          _this.categories.splice(index, 1);
        }
        else {
          _this.notify = {
            message: data.statusMessage,
            status: data.status,
            type: "danger"
          }
        }
      }, function (data) {
        _this.notify = {
          message: data.statusText,
          status: data.status,
          type: "danger"
        }
      });
    }
  }]);
