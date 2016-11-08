'use strict';
angular.module('manageBoard').component('emailLetter', {
    templateUrl: 'app/components/templates/emailLetter.html',
    controller: function ($stateParams, emailService) {
        this.$onInit = () => {
            emailService.getEmail($stateParams.letterId).then(email => this.email=email)
        }
    }
});