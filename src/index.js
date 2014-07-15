(function () {
    'use strict';

    var controllerId = 'dashboard';
    angular.module('app.dashboard').controller(controllerId, dashboardController);

    function dashboardController() {
        var vm = this;
        vm.posts = [];
        activate();

        function activate() {
            
            for(var i = 1; i<73;i++){
                vm.posts.push({imageUrl: 'public/images/'+ i +'.jpg'});
            }
        };
    
    }

})();

