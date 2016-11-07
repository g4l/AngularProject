'use strict';
angular.module('manageBoard')
    .component('todoItem', {
        bindings: {
            todo: '<'
        },
        templateUrl: 'app/components/templates/todoitem.html',
        controller: function(todosService) {
            this.showEdit = false;
            this.completed = false;
            this.enableEdit = () => {
                this.showEdit = !this.showEdit;
            }

            this.deleteTodo = () => {
                todosService.completeTodo(this.todo._id).then(() => {
                    this.completed = true;
                    this.showEdit = false;
                });
            }

            this.editTodo = () => {
                todosService.editTodo(this.todo).then(() => {
                    this.showEdit = false;
                });
            }
        }
    });
