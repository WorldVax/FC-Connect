"use strict";

angular.module('app.services', [])

    .factory('MedicalService', function ($log, pouchDB, Admin) {

        var db = pouchDB(Admin.options);

        return {
            filter: function (query) {
                query = query.toLowerCase();

                return db.query('patients/by_name', {
                    'startkey': query,
                    'endkey': query + '\u9999',
                    'include_docs': true
                }).then(function (data) {
                    return _.map(data.rows, function (row) {
                        return row.doc;
                    });
                }).catch($log.error)
            },
            read: function (id) {
                return db.get(id)
                    .catch($log.error);
            },
            save:function(doc){
                return db.put(doc)
                .catch($log.error);
            }
        };
    });
