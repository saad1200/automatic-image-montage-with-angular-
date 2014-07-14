(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app
        .config(['$routeProvider', 'routes', '$httpProvider', routeConfigurator])
        .run(['$location', '$route', run]);

    function run($location, $route) {
    }

    function routeConfigurator($routeProvider, routes, $httpProvider) {
        
        routes.forEach(function (r) { $routeProvider.when(r.url, r.config); });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                }
            }
        ];
    }
})();