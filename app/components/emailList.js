'use strict';
angular.module('manageBoard')
    .component('emailList', {
        bindings: {
            'emails': '<'
        },
        templateUrl: 'app/components/templates/emailList.html'
    });
