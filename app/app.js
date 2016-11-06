'use strict';
angular.module('manageBoard', ['ui.router', 'ngMessages'])
    .config(function($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'login',
                component: 'loginView',
                url: '/login'
            },
            {
                name: "home",
                component: 'homeView',
                url: '/home',
                resolve: {
                    authorized: ['$q', 'authorizationService', '$log', function($q, authorizationService, $log) {
                        var deferred = $q.defer();
                        authorizationService.isAuthorized().then(function(isAuthorized) {
                            if (isAuthorized) {
                                deferred.resolve();
                            } else {
                                $log.debug(deferred);
                                deferred.reject("Login error! Please Try again");
                            }
                        });

                        return deferred.promise;
                    }]
                }
            },
            {
                name: 'emails',
                url: '/emails',
                component: 'emailContainer',
                resolve: {
                    mailboxes: ['emailService', function (emailService) {
                        return emailService.getMailboxes();
                    }]
                }
            },
            {
                name: 'emails.box',
                url: '/:boxId',
                component: 'emailList',
                resolve: {
                    emails: function(emailService, $stateParams) {
                        return emailService.getEmails().then((emails) =>
                                emails.filter((email) => email.mailbox === $stateParams.boxId));
                    }
                }
            },
            {
                name: 'users',
                component: 'usersContainer',
                url: '/users'
            },
            {
                name: 'users.add',
                component: 'userForm',
                url: '/add'
            },
            {
                name: 'users.detail',
                component: 'userDetail',
                url: '/:userId'
            },
            {
                name: 'users.detail.edit',
                component: 'userForm',
                url: '/edit'
            },
            {
                name: 'todos',
                component: 'todosContainer',
                url: '/todos'
            }
        ];

        states.forEach((state) => $stateProvider.state(state));

        $urlRouterProvider.otherwise('login');
    })
    .run(function($rootScope, $log, $state) {
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            $log.error(error);
            alert(error);
            $state.go('login');
        });
    });
