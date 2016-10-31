'use strict';
angular.module('manageBoard')
    .component('navigationBar', {
        templateUrl: 'app/components/templates/navigationBar.html',
        controller: function () {
            this.navs = ['users', 'emails', 'todos'];
        }
    });
