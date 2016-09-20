var homePage = '<h1>Home</h1> <p>this is the homepage it\'s {{vm.date | date : \'HH:mm:ss\'}}</p>';
var contactPage = '<h1>Contact</h1><p>this is the contact page</p>';
var aboutPage = '<h1>About</h1><p>this is the about page</p>';
angular.module('spa', ['ngRoute']);

angular.
    module('spa').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {

            $routeProvider.
                when('/home', {
                    template: '{{myDate}}<home date="myDate"></home>'
                }).
                when('/contact', {
                    template: contactPage
                }).
                when('/about', {
                    template: aboutPage
                }).otherwise({
                    template: '<home></home>'
                });
        }
    ]);

// component
angular.module('spa').controller('homeController', function ($interval) {
    var vm = this;
    vm.date = new Date();
    $interval(function () {
        vm.date = new Date();
    }, 1000);
});
angular.module('spa').component('home', {
    template: homePage,
    controllerAs: 'vm',
    controller: 'homeController',
    bindings: {
        date: '='
    }
});
