'use strict';
(function() {
var injections = [
    '$http',
    '$q',
    authorizationService
];

function authorizationService($http, $q) {
    var authorized = false;

    this.isAuthorized = function() {
        return $q.when(authorized);
    };

    this.authorize =  (userparams) => {
        return $http.get('app/data/users.json').then(res => {
            var result = res.data.users.filter(
                user => {
                    return user.username === userparams.username && user.password === userparams.password;
                }
            );

            if (result.length) authorized = true;
            return authorized;
        });
    };

    this.logout = () => {
        authorized = false;
    }
}
angular.module('manageBoard')
    .service('authorizationService', injections);
})();