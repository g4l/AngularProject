'use strict';
angular.module('manageBoard')
    .component('emailContainer', {
        templateUrl: 'app/components/templates/emailcontainer.html',
        bindings: {
            mailboxes: '<'
        }
    });