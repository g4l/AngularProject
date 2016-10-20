'use strict';
angular.module('magicShop')
    .component('loginView', {
        templateUrl: './app/components/templates/loginView.html',
        controller: function(authorizationService, $state) {
            var self = this;
            self.userparams = {
                username: "",
                password: ""
            };
            this.authorize = function(event) {
                event.preventDefault();
                authorizationService.authorize(self.userparams).then(function(user) {
                    $state.go('home');
                });
            }
        }
    });