'use strict';
angular.module('manageBoard')
    .component('userForm', {
        bindings: {
            mode: '<'
        },
        templateUrl: 'app/components/templates/userform.html',
        controller: function(usersService) {
        }
    });
