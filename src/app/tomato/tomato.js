angular.module( 'tomatoApp.tomato', [
        'ui.router',
        'placeholders',
        'ui.bootstrap',
        'tomatoApp.services'
    ])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'tomato', {
            url: '/tomato',
            views: {
                "main": {
                    controller: 'TomatoCtrl',
                    templateUrl: 'tomato/tomato.tpl.html'
                }
            },
            data:{ pageTitle: 'The tomato market' }
        });
    })

    .controller('TomatoCtrl', ['$scope', 'TomatoFactory',
    function ($scope, TomatoFactory) {

        //get N items from service and update list
        $scope.updateUser = function () {
            TomatoFactory.queryWithLimit({size: $scope.tomatoList.size}, function(data) {
                $scope.error = null;
                $scope.tomatoList= data;
            }, function (err) {
                if (err.data && err.data.message) {
                    $scope.error = err.data.message;
                } else if (err.statusText) {
                    $scope.error = err.statusText;
                }
            });
        };
        //initial data
        $scope.tomatoList = TomatoFactory.query();

    }]);






