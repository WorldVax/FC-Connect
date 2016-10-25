"use strict";

angular.module('app.services')

    .factory('SettingsService', function ($log, pouchDB, MedicalData) {

        var self = {
            dbName: 'medical.db',
            dbInfo: {},
            syncUrl: '',
            syncCredentials: '',
            createDb: function () {
                // todo save the options as a doc after the db is initialized
                $log.log('Initialize database.');
                pouchDB(self.dbName)
                    .destroy()
                    .then(function () {
                        $log.log('Load medical database design documents.');
                        pouchDB(self.dbName)
                            .bulkDocs(MedicalData.design_docs)
                            .then(self.infoDb)
                    });
            },
            loadDb: function () {
                $log.log('Loading fake patient data.');
                pouchDB(self.dbName)
                    .bulkDocs(MedicalData.patients)
                    .then(self.infoDb)
            },
            replicate: function () {
                // TODO Replicate with the server located at syncUrl using the
                // syncCredentials for authentication
            }
        };

        pouchDB(self.dbName)
            .info()
            .then(function (info) { self.dbInfo = info; });

        return self;
    });
