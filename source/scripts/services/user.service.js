/**
 * User Service Factory
 * --------------------------------------------------
 */

 (function() {
  'use strict';

  angular
  .module('app')
  .factory('userService', userService);

  userService.$inject = ['$http'];

    /**
     * User service
     */
    function userService($http) {
      return {
        getUsers: getUsers,
        getUser: getUser
      };

     /**
      * Get all users
      */
      function getUsers() {
        return $http.get('http://jsonplaceholder.typicode.com/users')
        .then(getUsersSuccess)
        .catch(getUsersError);
      }

      /**
      * Get user by id
      */
      function getUser(id) {
        return $http.get('http://jsonplaceholder.typicode.com/users?id=' + id)
        .then(getUsersSuccess)
        .catch(getUsersError);
      }

     /**
      * Success handler
      */
      function getUsersSuccess(response) {
        return response.data;
      }
      
     /**
      * Error handler
      */
      function getUsersError(error) {
        console.log('Error getting user data: ' + error.data);
      }
    }

  })();