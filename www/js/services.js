"use strict";

angular.module('app.services', [])

    .factory('PatientService', function ($log, pouchDB, DbSetup) {

        var current = null;

        var db = pouchDB(DbSetup.options);

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
            save: function (doc) {
                return db.put(doc)
                    .catch($log.error);
            }
        };
    })

    .factory('DbSetup', function (pouchDB, MedicalData) {

        var self = {
            options: {
                name: 'medical.db',
                adapter: 'websql'
            },
            dbInfo: {},
            initialize: function () {
                // todo save the options as a doc after the db is initialized
                console.log('Initialize database.');
                pouchDB(self.options)
                    .destroy().then(function () {
                        console.log('Load medical database design documents.');
                        pouchDB(self.options)
                            .bulkDocs(MedicalData.design_docs)
                            .then(self.info)
                    });
            },
            load: function () {
                console.log('Loading fake patient data.');
                pouchDB(self.options)
                    .bulkDocs(MedicalData.patients)
                    .then(self.info)
            },
            info: function () {
                pouchDB(self.options)
                    .info()
                    .then((function (info) { self.dbInfo = info; }))
            }
        };

        return self;
    });
