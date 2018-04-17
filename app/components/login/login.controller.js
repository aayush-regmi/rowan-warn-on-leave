(function () {

    'use strict';
    angular.module('FoodOrderingApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = [
        '$rootScope',
        '$state',
        'APP_CONSTANT'
    ];

    function LoginController($rootScope, $state, APP_CONSTANT) {

        var vm = this;

        vm.user = {};
        vm.inputType = 'password';
        vm.dataLoading = false;
        vm.validateUser = validateUser;

        function validateUser(user) {

        }

    }
})();