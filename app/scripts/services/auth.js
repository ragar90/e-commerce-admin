'use strict';

/**
 * @ngdoc service
 * @name eCommerceAdminApp.Auth
 * @description
 * # Auth
 * Factory in the eCommerceAdminApp.
 */
angular.module('eCommerceAdminApp')
  .factory('sessionService', function() {
    return {
      set: function(key, value) {
        return sessionStorage.setItem(key, value);
      },
      get: function(key) {
        return sessionStorage.getItem(key);
      },
      destroy: function(key) {
        return sessionStorage.removeItem(key);
      }
    };
  })
