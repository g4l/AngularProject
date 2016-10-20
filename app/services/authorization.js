'use strict';
(function() {
var injections = [
    '$http',
    authorizationService
];

function authorizationService($http) {
    var authorized = false;

    this.isAuthorized = function() {
        return authorized;
    };

    this.authorize =  (userparams) => {
        return $http.get('app/data/users.json').then(res => res.data);
    }
}
angular.module('magicShop')
    .service('authorizationService', injections);
})();