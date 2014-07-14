(function () {
    'use strict';

    var dashboard = angular.module('app.dashboard', []);
    var montageGallery = angular.module('montage.gallery', []);

    var app = angular.module('app', [
        // Angular modules 
        'ngRoute',
        
        //Application modules
        'app.dashboard',
        'montage.gallery'
    ]);

})();
