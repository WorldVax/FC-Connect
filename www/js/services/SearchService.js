"use strict";

angular.module('app.services')

    .factory('SearchService', function ($log, pouchDB, SettingsService) {

        var db = pouchDB(SettingsService.dbName);

        var service = {
            context: {
                query: '',
                results: []
            },
            search: function (query) {
                service.context.query = query.toLowerCase();
                return db.query('patients/by_name', {
                    'startkey': service.context.query,
                    'endkey': service.context.query + '\u9999',
                    'include_docs': true
                }).then(function (data) {
                    service.context.results = _.map(data.rows, function (row) {
                        return row.doc;
                    });
                }).catch($log.error)
            }
        };
        return service;
    });
