'use strict';

(function () {
    var injections = ['$http', emailService];

    function emailService($http) {
        this.getEmails = () => {
            return $http.get("http://test-api.javascript.ru/v1/dosetrov/letters")
                    .then(response => response.data);
        };

        this.getMailboxes = () => {
            return $http.get("http://test-api.javascript.ru/v1/dosetrov/mailboxes")
                    .then(response => response.data);
        }
    }

    angular.module('manageBoard')
        .service('emailService', injections);

})();