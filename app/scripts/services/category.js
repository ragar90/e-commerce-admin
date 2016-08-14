'use strict';

/**
 * @ngdoc service
 * @name eCommerceAdminApp.Category
 * @description
 * # Category
 * Factory in the eCommerceAdminApp.
 */
angular.module('eCommerceAdminApp')
  .factory('Category', ['$resource', 'endpoint', 'sessionService', function($resource, endpoint, sessionService) {
    return {
      getAllCategories: $resource(endpoint + '/categories/get-categories?parent_id', {parent_id:"@id"}, {
        'get': {
          method: 'GET',
          headers: {"Authorization": sessionService.get("token")}
        }
      }),
      getApprovedCategories: $resource(endpoint + '/categories/get-approved-categories', {parent_id:"@id"}, {
        'get': {
          method: 'GET',
          headers: {"Authorization": sessionService.get("token")}
        }
      }),
      getNonApprovedCategories: $resource(endpoint + '/categories/get-non-approved-categories', null, {
        'get': {
          method: 'GET',
          headers: {"Authorization": sessionService.get("token")}
        }
      }),
      updateCategoryStatus: $resource(endpoint + '/categories/update-category-status/:id', {id:'@id'}, {
        'update': {
          method: 'POST',
          headers: {"Authorization": sessionService.get("token")}
        }
      }),
      updateCategory: $resource(endpoint + '/categories/update-category/:id', {id:'@id'}, {
        'update': {
          method: 'PUT',
          headers: {"Authorization": sessionService.get("token")}
        }
      }),
      getSingleCategory: $resource(endpoint + '/categories/get-single-category/:id', {id:'@id'}, {
        'get': {
          method: 'GET',
          headers: {"Authorization": sessionService.get("token")}
        }
      }),
      deleteSingle: $resource(endpoint + '/categories/:id', {id:'@id'}, {
        'remove': {
          method: 'DELETE',
          headers: {"Authorization": sessionService.get("token")}
        }
      }),
      addSingle: $resource(endpoint + '/categories', {}, {
        'create': {
          method: 'POST',
          headers: {"Authorization": sessionService.get("token")}
        }
      })
    };
  }]);
