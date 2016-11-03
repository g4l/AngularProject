'use strict';
angular.module('manageBoard')
    .component('userDetail', {
        templateUrl: 'app/components/templates/userdetail.html',
        controller: function (usersService, $stateParams) {
            this.$onInit = () => {
                usersService.getUser($stateParams.userId).then(user => {
                    this.user = user;
                });
            }
        }
    });
