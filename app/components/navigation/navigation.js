'use strict';
angular.module('manageBoard')
    .component('navigationBar', {
        templateUrl: 'app/components/navigation/navigationBar.html',
        controller: function (authorizationService, $state) {
            this.navs = ['users', 'emails', 'todos'];

            this.logout = () => {
                authorizationService.logout();
                $state.go('login');
            }
        }
    });
