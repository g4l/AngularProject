'use strict';
angular.module('manageBoard')
    .component('userForm', {
        templateUrl: 'app/components/templates/userform.html',
        controller: function(usersService, $stateParams, $state) {
            this.$onInit = () => {
                if ($stateParams.userId) {
                    usersService.getUser($stateParams.userId).then(user => {
                        user.birthdate = new Date(user.birthdate);
                        this.currentUser = user;
                        this.mode = 'Edit';
                    });
                } else {
                    this.currentUser = {};
                    this.mode = 'Add';
                }
            };

            this.sendUser = () => {
                if (this.userform.$valid) {
                    if (this.mode === 'Add') {
                        usersService.addUser(this.currentUser).then(function (res) {
                            $state.go('users.detail', {userId: res.data._id});
                        });
                    } else {
                        console.log(this.currentUser);
                        usersService.editUser(this.currentUser).then(res => $state.go('users.detail', {
                            userId: this.currentUser._id
                        }));
                    }
                }
            }

            this.hasError = (inputName) => {
                switch (inputName) {
                    case 'fullName': {
                        return this.userform.fullName.$error.required && this.userform.fullName.$touched;
                    }
                    case 'email': {
                        return this.userform.email.$touched && (this.userform.email.$error.required || this.userform.email.$error.email);
                    }
                    case 'avatarUrl': {
                        return this.userform.userAvatar.$touched && this.userform.userAvatar.$error.url;
                    }
                }
            }
        }
    });
