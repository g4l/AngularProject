'use strict';
(function() {
    var injections = ['$http', todosService];

    function todosService($http) {
        let baseUrl = 'http://test-api.javascript.ru/v1/dosetrov/tasks/';

        this.getTodos = () => {
            return $http.get(baseUrl).then(resp => resp.data);
        };

        this.addTodo = (todo) => {
            return $http.post(baseUrl, todo);
        }

        this.completeTodo = (todoId) => {
            return $http.delete(baseUrl + todoId);
        }

        this.editTodo = (todo) => {
            return $http.patch(baseUrl + todo._id, todo);
        }

    }

    angular.module('manageBoard').service('todosService', injections);
})();
