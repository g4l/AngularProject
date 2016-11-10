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
                data: {
                    authRequired: true
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
                },
                data: {
                    authRequired: true
                }
            },
            {
                name: 'emails.new',
                url: '/new',
                component: 'emailForm'
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
                name: 'emails.box.letter',
                url: '/:letterId',
                component: 'emailLetter'
            },
            {
                name: 'users',
                component: 'usersContainer',
                url: '/users',
                data: {
                    authRequired: true
                }
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
                url: '/todos',
                data: {
                    authRequired: true
                }
            }
        ];

        states.forEach((state) => $stateProvider.state(state));

        $urlRouterProvider.otherwise('login');
    })
    .run(function($transitions) {
        $transitions.onStart({
            to: function(state) {
                return state.data != null && state.data.authRequired === true;
            }
        }, function(trans) {
            var auth = trans.injector().get('authorizationService');
            return auth.isAuthorized().then(auth => {
                if (!auth) {
                    return trans.router.stateService.target('login');
                }
            });
        });

        $transitions.onStart({
            to: 'login'
        }, function(trans) {
            var auth = trans.injector().get('authorizationService');
            return auth.isAuthorized().then(auth => {
                if (auth) {
                    return trans.router.stateService.target('home');
                }
            });
        });
    });
