'use strict';
angular.module('manageBoard')
    .component('loginView', {
        templateUrl: 'app/components/login/loginView.html',
        controller: function(authorizationService, $state) {
            this.userparams = {
                username: "",
                password: ""
            };
            this.authorize = () => {
                authorizationService.authorize(this.userparams).then((auth) => {
                    if (auth) {
                        $state.go('home');
                    } else {
                        this.loginError = true;
                    }
                });
            };
        }
    });