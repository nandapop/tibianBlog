'use strict'
angular.module('tibian').config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

        $stateProvider
        .state("main", {
            url: '/',
            templateUrl: "main.html"
//            controller: "",
//            controllerAs: "",
        })
        .state("posts", {
            url:'/posts',
            templateUrl: "posts/postTobias.html",
            controller : "post",
            controllerAs: "postCtrl"
        })    
            

});