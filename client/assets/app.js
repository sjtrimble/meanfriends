var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/friends'
    })
    .when('/friends', {
        templateUrl: 'partials/main.html',
        controller: 'mainController'
    })
    .when('/friends/new', {
        templateUrl: 'partials/newfriend.html',
        controller: 'newController'
    })
    .when('/friends/show/:id', {
        templateUrl: 'partials/show.html',
        controller: 'showController'
    })
    .when('/friends/edit/:id', {
        templateUrl: 'partials/edit.html',
        controller: 'editController'
    })
    .otherwise({
        redirectTo: '/'
    });
});