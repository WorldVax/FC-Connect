"use strict";

angular.module('app.services')

    .factory('SettingsService', function ($log, pouchDB, MedicalData) {

        var self = {
            dbOptions: {
                name: 'medical.db',
                adapter: 'websql'
            },
            dbInfo: {},
            syncUrl: '',
            syncCredentials: '',
            createDb: function () {
                // todo save the options as a doc after the db is initialized
                $log.log('Initialize database.');
                pouchDB(self.dbOptions)
                    .destroy().then(function () {
                        $log.log('Load medical database design documents.');
                        pouchDB(self.dbOptions)
                            .bulkDocs(MedicalData.design_docs)
                            .then(self.infoDb)
                    });
            },
            loadDb: function () {
                $log.log('Loading fake patient data.');
                pouchDB(self.dbOptions)
                    .bulkDocs(MedicalData.patients)
                    .then(self.infoDb)
            },
            infoDb: function () {
                pouchDB(self.dbOptions)
                    .info()
                    .then(function (info) { self.dbInfo = info; });
            },
            replicate: function () {
                // TODO Replicate with the server located at syncUrl using the
                // syncCredentials for authentication
            }
        };

        self.infoDb();

        return self;
    });
