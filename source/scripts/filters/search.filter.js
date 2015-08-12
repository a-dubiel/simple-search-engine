/**
 * Search Filter
 * --------------------------------------------------
 */

 (function() {
  'use strict';

  angular
  .module('app')
  .filter('searchFor', searchFor);

  function searchFor() {
    return function(arr, searchString) {
      // If no input provided return the whole set
      if(!searchString){
        return arr;
      }
      var results = [];
      searchString = searchString.toLowerCase();
      angular.forEach(arr, function(user){
        // Filter data via email or name
        if(user.name.toLowerCase().indexOf(searchString) !== -1 || 
            user.email.toLowerCase().indexOf(searchString) !== -1) {
          results.push(user);
        }
      });
      return results;
    };
  }

})();