'use strict';
angular.module('magicShop', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('login', {
            template: '<login-view></login-view>',
            url: '/login'
        });

        $urlRouterProvider.otherwise('login');
    });
