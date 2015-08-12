/**
 * Main Controller
 * --------------------------------------------------
 */

(function() {
  'use strict';

angular
  .module('app')
  .controller('MainCtrl', MainCtrl);

// Inject dependencies
MainCtrl.$inject = ['$scope','userService'];

function MainCtrl($scope, userService) { 
    var vm = this;
    vm.users = [];
    vm.loading = true;

    // Widget title
    vm.title = 'People Search';
    
    /**
     * Functions displays modal with user info
     */
    vm.showUserInfo = function(user) {
        vm.user = user;
        $scope.$broadcast('toggleModal', true);
    };

    // Initialize user data set
    getUsers();

    /**
     * Fetch user data via service and update the scope
     */
    function getUsers() {
        return userService.getUsers().then(function(data) {
            vm.users = data;
            vm.loading = false;
            return vm.users;
        });
    }

}

})();

