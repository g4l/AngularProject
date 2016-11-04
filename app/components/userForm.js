'use strict';
angular.module('manageBoard')
    .component('userForm', {
        bindings: {
            mode: '@',
            currentUser: '<'
        },
        templateUrl: 'app/components/templates/userform.html',
        controller: function(usersService) {
            this.$onInit = () => {
                this.currentUser = this.currentUser || {};
            };

            this.sendUser = () => {
                console.log(this.currentUser);
                console.log(this.userform);
            }
        }
    });
