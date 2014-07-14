(function () {
    'use strict';

    angular.module('montage.gallery').directive('gallery', galleryDirective);

    function galleryDirective() {
        return {
            restrict: 'AEC',
            scope: {
                size: '@size'
            },
            controller: function ($scope, $element,$attrs) {
                var vm = this;
                var numberOfLoadedImages = 0;
                
                $($element).hide();
                
                vm.loaded = function(){
                    if(++numberOfLoadedImages == $attrs.size)
                    {
                        $($element).show();

                        $($element).montage({
                            minw : 100,
                            alternateHeight : true,
                            alternateHeightRange : {
                                min	: 50,
                                max	: 350
                            },
                            margin : 8,
                            fillLastRow : true
                        });    
                    }
                };
                
            }
        }
    };

})();

(function () {
    'use strict';

    angular.module('montage.gallery').directive('galleryImage', galleryDirective);

    function galleryDirective() {
        return {
            restrict: 'AEC',
            require: '^gallery',
            link: function (scope, element, attrs, gallery) {
                element.bind("load" , function(event){ 
                    scope.$apply(gallery.loaded());
                });
            }
        }
    };

})();