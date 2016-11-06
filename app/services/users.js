'use strict';
(function() {
    var injections = ['$http', usersService];

    function usersService($http) {
        this.getUsers = () => {
            return $http.get('http://test-api.javascript.ru/v1/dosetrov/users').then(response => response.data);
        };

        this.getUser =  (userId) => {
            return $http.get('http://test-api.javascript.ru/v1/dosetrov/users/' + userId).then(resp => resp.data);
        };

        this.addUser = (user) => {
            return $http.post('http://test-api.javascript.ru/v1/dosetrov/users', user);
        }

        this.editUser = (user) => {
            return $http.patch('http://test-api.javascript.ru/v1/dosetrov/users/' + user._id, user);
        }

        this.deleteUser = (userId) => {
            return $http.delete('http://test-api.javascript.ru/v1/dosetrov/users/' + userId);
        }
    }

    angular.module('manageBoard').service('usersService', injections);
})();
