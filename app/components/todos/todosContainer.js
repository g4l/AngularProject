'use strict';
angular.module('manageBoard')
    .component('todosContainer', {
        templateUrl: 'app/components/todos/todoscontainer.html',
        controller: function(todosService) {
            this.$onInit = () => {
                todosService.getTodos().then(todos => {
                    this.todos = todos;
                });
            }
        }
    });