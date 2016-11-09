'use strict';
angular.module('manageBoard').component('emailLetter', {
    templateUrl: 'app/components/email/emailLetter/emailLetter.html',
    controller: function ($stateParams, emailService) {
        this.$onInit = () => {
            emailService.getEmail($stateParams.letterId).then(email => this.email=email)
        }
    }
});