'use strict';

/**
 * @ngdoc service
 * @name eCommerceAdminApp.Product
 * @description
 * # Product
 * Factory in the eCommerceAdminApp.
 */
angular.module('eCommerceAdminApp')
  .factory('Product', ['$resource', 'endpoint', 'sessionService', function($resource, endpoint, sessionService) {
    return {
      getAllProducts: $resource(endpoint + '/products/get-products', null, {
        'get': {
          method: 'GET',
          headers: {"Authorization": sessionService.get("token")}
        }
      }),
      getApprovedProducts: $resource(endpoint + '/products/get-approved-products', null, {
        'get': {
          method: 'GET',
          headers: {"Authorization": sessionService.get("token")}
        }
      }),
      getApprovedProducts: $resource(endpoint + '/products/get-non-approved-products', null, {
        'get': {
          method: 'GET',
          headers: {"Authorization": sessionService.get("token")}
        }
      }),
      updateProductStatus: $resource(endpoint + '/products/update-product-status/:id', {id:'@id'}, {
        'update': {
          method: 'POST',
          headers: {"Authorization": sessionService.get("token")}
        }
      }),
      updateProduct: $resource(endpoint + '/products/update-product/:id', null, {
        'update': {
          method: 'PUT',
          headers: {"Authorization": sessionService.get("token")}
        }
      }),
      getSingleProduct: $resource(endpoint + '/products/get-single-product/:id', {id:'@id'}, {
        'get': {
          method: 'GET',
          headers: {"Authorization": sessionService.get("token")}
        }
      })
    };
  }]);
