(function () {
    'use strict';

    var controllerId = 'dashboard';
    angular.module('app.dashboard').controller(controllerId, dashboardController);

    function dashboardController() {
        var vm = this;
        vm.posts = [];
        vm.selectedPost = {};
        activate();

        function activate() {
            
            for(var i = 1; i<73;i++){
                vm.posts.push({ header: 'Image header', body: 'Image body', imageUrl: 'public/images/'+ i +'.jpg'});
            }
        };
    
        vm.show = function(index){
            vm.selectedPost = vm.posts[index];
            
            $('#myModal').modal({
              keyboard: false
            })
        };
    }

})();

