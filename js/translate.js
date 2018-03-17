'use strict';

angular.module('tibian').config(function($translateProvider) {
    $translateProvider.useLoader('$translatePartialLoader', {  
        urlTemplate: '/translate/{part}/{lang}.json'
    });
    $translateProvider.determinePreferredLanguage();
    $translateProvider.fallbackLanguage('en');
});