'use strict';
angular.module('manageBoard')
    .component('todosContainer', {
        templateUrl: 'app/components/templates/todoscontainer.html',
        controller: function(todosService) {
            this.$onInit = () => {
                todosService.getTodos().then(todos => {
                    this.todos = todos;
                    console.log(this.todos);
                });
            }
        }
    });