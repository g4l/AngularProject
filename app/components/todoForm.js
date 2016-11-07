'use strict';
angular.module('manageBoard')
    .component('todoForm', {
        templateUrl: 'app/components/templates/todoform.html',
        controller: function(usersService, todosService) {
            this.$onInit = () => {
                this.newTodo = {};
                usersService.getUsers().then(users => {
                    this.users = users;
                    this.newTodo.assignee = this.users[0];
                });
                this.urgencyCategories = ['Critical', 'Urgent', 'Moderate', 'Minor', 'Irrelevant'];
                this.newTodo.urgency = this.urgencyCategories[2];
            };

            this.addTodo = () => {
                let todo = {
                    title: this.newTodo.title,
                    tags: [{
                        title: this.newTodo.assignee.fullName,
                        class: this.newTodo.urgency
                    }]
                };

                todosService.addTodo(todo).then(data => {
                    console.log(data);
                    this.todoform.$setUntouched();
                    this.newTodo = {
                        assignee: this.users[0],
                        urgency: this.urgencyCategories[2]
                    };
                });
            }
        }
    });
