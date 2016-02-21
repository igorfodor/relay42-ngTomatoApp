angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngResource',
  'tomatoApp.tomato',
  'tomatoApp.services',
  'ui.router'

])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/tomato' );
})

.constant('TOMATO_REST_API', 'http://localhost:8080/tomatoes')

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

;

