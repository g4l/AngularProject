'use strict';
angular.module('manageBoard')
    .component('emailForm', {
        templateUrl: 'app/components/templates/emailForm.html',
        controller: function(emailService) {

            this.hasError = (input) => {
                switch (input) {
                    case 'subject':
                        return this.emailForm.emailSubject.$error.required && this.emailForm.emailSubject.$touched;
                    case 'email':
                        return  this.emailForm.email.$touched && (this.emailForm.email.$error.email || this.emailForm.email.$error.required);
                    case 'body':
                        return this.emailForm.body.$error.required && this.emailForm.body.$touched;
                }
            }

            this.sendEmail = (e) => {
                e.stopPropagation();
                this.currentEmail.mailbox = "582064709de15a250410ecb1";
                emailService.sendEmail(this.currentEmail).then(res => {
                    this.currentEmail = {};
                    this.emailForm.$setUntouched();
                });
            }

            this.saveDraft = (e) => {
                e.stopPropagation();
                this.currentEmail.mailbox = "582064789de15a250410ecb2";
                emailService.sendEmail(this.currentEmail).then(res => {
                    this.currentEmail = {};
                    this.emailForm.$setUntouched();
                });
            }
        }
    });
