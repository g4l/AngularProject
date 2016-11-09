'use strict';
angular.module('manageBoard')
    .component('emailList', {
        bindings: {
            'emails': '<'
        },
        templateUrl: 'app/components/email/emailList/emailList.html'
    });
