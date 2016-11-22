angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'Main-Controller'
    })

    .when('/nerds', {
      templateUrl: 'views/nerd.html',
      controller: 'Nerd-Controller'
    });

    $locationProvider.html5Mode(true);

  }]);
