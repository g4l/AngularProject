'use strict';
angular.module('manageBoard')
    .component('usersContainer', {
        templateUrl: 'app/components/templates/userscontainer.html',
        controller: function (usersService) {
            this.$onInit = () => {
                usersService.getUsers().then(users => this.users = users);
            }
        }
    });