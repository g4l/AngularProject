'use strict';

(function () {
    var injections = ['$http', emailService];

    function emailService($http) {
        let baseUrlLetters = "http://test-api.javascript.ru/v1/dosetrov/letters/";
        let baseUrlMailboxes = "http://test-api.javascript.ru/v1/dosetrov/mailboxes/";
        this.getEmails = () => {
            return $http.get(baseUrlLetters)
                    .then(response => response.data);
        };

        this.getEmail = (letterId) => {
            return $http.get(baseUrlLetters + letterId).then(response => response.data);
        }

        this.getMailboxes = () => {
            return $http.get(baseUrlMailboxes)
                    .then(response => response.data);
        }

        this.sendEmail = (email) => {
            return $http.post(baseUrlLetters, email);
        }
    }

    angular.module('manageBoard')
        .service('emailService', injections);

})();