(function () {
    'use strict';

    angular.module('FoodOrderingApp')
        .directive('warnOnLeave', warnOnLeave);

    warnOnLeave.$inject = ['$uibModal', '$state', '$window'];

    function warnOnLeave($uibModal, $state, $window) {
        return {

            require: '^form',

            restrict: 'EA',

            link: function (scope, elem, attrs, form) {

                var $locationChangeStartUnbind = scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

                    if (form.$dirty && !form.$submitted) {

                        event.preventDefault();

                        var modalInstance = $uibModal.open({
                            animation: true,
                            templateUrl: '../app/directives/warn-on-leave/warn-on-leave-modal.html',
                            controller: 'WarnOnLeaveController as warnOnLeaveCtrl',
                            size: 'sm'
                        });

                        modalInstance.result.then(function (status) {
                            form.$setPristine();
                            $state.go(toState);
                        }, function (status) {
                            event.preventDefault();
                        });
                    }
                });

                scope.$on('$destroy', function () {
                    $window.onbeforeonload = null;
                    $locationChangeStartUnbind();
                });
            }
        };
    }

})();