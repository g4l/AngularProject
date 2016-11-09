'use strict';
angular.module('manageBoard')
    .component('todoForm', {
        templateUrl: 'app/components/todos/todoForm/todoform.html',
        controller: function(usersService, todosService, emailService) {
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
                console.log(this.sendRemainder);

                todosService.addTodo(todo).then(data => {
                    this.todoform.$setUntouched();

                    if (this.sendRemainder) {
                        let email = {
                            mailbox: "582064819de15a250410ecb3",
                            to: "me@example.com",
                            subject: this.newTodo.urgency + " todo added for user " + this.newTodo.assignee.fullName,
                            body: `New ${this.newTodo.urgency} todo was added for user ${this.newTodo.assignee.fullName}. The task is: ${this.newTodo.title}`
                        };
                        this.newTodo = {
                            assignee: this.users[0],
                            urgency: this.urgencyCategories[2]
                        };
                        emailService.sendEmail(email).then(res => console.log(res));
                    } else {
                        this.newTodo = {
                            assignee: this.users[0],
                            urgency: this.urgencyCategories[2]
                        };
                    }
                });
            }
        }
    });
