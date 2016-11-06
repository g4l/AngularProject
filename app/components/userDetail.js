'use strict';
angular.module('manageBoard')
    .component('userDetail', {
        templateUrl: 'app/components/templates/userdetail.html',
        controller: function (usersService, $stateParams, $state) {
            this.$onInit = () => {
                usersService.getUser($stateParams.userId).then(user => {
                    this.user = user;
                }).catch(error => {
                    console.error(error.data.error);
                    $state.go('users');
                });
            }

            this.deleteUser = () => {
                let confirmation = confirm('Are you sure you want to delete this user?');
                if (confirmation) {
                    usersService.deleteUser(this.user._id).then(res => console.log(res));
                }
            }
        }
    });
