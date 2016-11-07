'use strict';
angular.module('manageBoard')
    .component('todoItem', {
        bindings: {
            todo: '<'
        },
        templateUrl: 'app/components/templates/todoitem.html'
    });
