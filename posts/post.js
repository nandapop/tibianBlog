'use strict';

angular.module('tibian').controller('post', function ($translatePartialLoader, $translate) {
     
    $translatePartialLoader.addPart('posts');
    $translate.refresh();
});