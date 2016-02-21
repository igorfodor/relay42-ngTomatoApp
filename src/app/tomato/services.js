angular.module('tomatoApp.services', ['ngResource'])

.factory('TomatoFactory', function ($resource, TOMATO_REST_API) {
    return $resource(TOMATO_REST_API + '/data', {}, {
        query: { method: 'GET', isArray: true },
        queryWithLimit: { method: 'GET',
            params: {size: '@size'}, isArray: true}
    });


});

