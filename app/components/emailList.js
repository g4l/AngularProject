'use strict';
angular.module('manageBoard')
    .component('emailList', {
        bindings: {
            'boxId': '<'
        },
        controller: function (emailService) {
            emailService.getEmails().then(emails => {
                this.emails = emails.filter(email => email.mailbox === this.boxId);
                console.log(this.emails);
            });
        }
    });
