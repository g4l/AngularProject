'use strict';
angular.module('manageBoard')
    .component('emailContainer', {
        templateUrl: 'app/components/email/emailcontainer.html',
        bindings: {
            mailboxes: '<'
        }
    });