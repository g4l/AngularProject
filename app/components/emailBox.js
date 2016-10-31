'use strict';
angular.module('manageBoard')
    .component('emailsBox', {
        templateUrl: 'app/components/templates/emailbox.html',
        bindings: {
            mailboxes: '<'
        },
        controller: function() {
            console.log(this.mailboxes);
        }
    });