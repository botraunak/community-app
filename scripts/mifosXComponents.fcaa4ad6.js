define(['Q', 'underscore', 'mifosX'], function (Q) {
    var components = {
        models: [
            'models.f52678ef'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService',
            'NotificationResponseHeaderProvider'
        ],
        controllers: [
            'controllers.9bb44429'
        ],
        filters: [
            'filters.34474998'
        ],
        directives: [
            'directives.892e7f9b'
        ]
    };

    return function() {
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes-initialTasks-webstorage-configuration.46e8a234'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});
