"use strict";

angular.module('app.services', [])

    .factory('MedicalDbService', function (DbService) {
        return {
            all: function () {
                return DbService.allDocs();
            },
            filter: function (query) {
                query = query.toLowerCase();
                return DbService.query('patients/by_name', {
                    startKey: query,
                    endKey: query + '\u9999'
                }).then(function (data) {
                    return _.map(data.rows, function (row) {
                        return row.value;
                    });
                });
            },
            remove: function (doc) {
                DbService.delete(doc)
                    .then(function () {
                        return;
                    })
                    .catch(console.log.bind(console));
            },
            get: function (id) {
                DbService.get(id)
                    .then(function (doc) {
                        return doc;
                    })
                    .catch(console.log.bind(console));
            }
        };
    });
