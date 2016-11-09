'use strict';
angular.module('manageBoard')
    .component('usersContainer', {
        templateUrl: 'app/components/users/userscontainer.html',
        controller: function (usersService) {
            this.$onInit = () => {
                usersService.getUsers().then(users => this.users = users);
            }
        }
    });