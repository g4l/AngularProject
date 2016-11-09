'use strict';
(function() {
    var injections = ['$http', usersService];

    function usersService($http) {
        let baseUrl = 'http://test-api.javascript.ru/v1/dosetrov/users/';

        this.getUsers = () => {
            return $http.get(baseUrl).then(response => response.data);
        };

        this.getUser =  (userId) => {
            return $http.get(baseUrl + userId).then(resp => resp.data);
        };

        this.addUser = (user) => {
            return $http.post(baseUrl, user);
        }

        this.editUser = (user) => {
            return $http.patch(baseUrl + user._id, user);
        }

        this.deleteUser = (userId) => {
            return $http.delete(baseUrl + userId);
        }
    }

    angular.module('manageBoard').service('usersService', injections);
})();
